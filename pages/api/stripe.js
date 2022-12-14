const admin = require('firebase-admin')
const stripe = require('stripe')(`${process.env.STRIPE_PRIVATE_KEY}`)
const { round } = require('mathjs')

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: `${process.env.FIREBASE_PROJECT_ID}`,
      clientEmail: `${process.env.FIREBASE_CLIENT_EMAIL}`,
      privateKey: `${process.env.FIREBASE_PRIVATE_KEY}`.replace(/\\n/g, '\n'),
    }),
  })
}

const db = admin.firestore()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const {
      products,
      idUser,
      username,
      addressShipping,
      values,
      priceShipping,
    } = req.body

    const productsSend = []
    let totalPayment = 0
    let firstBuyDiscount
    let searchProduct
    let array = []
    let descuento = {}
    let notDiscount = null
    let data = {}

    // Is first buy for client?
    const getFirstBuyDiscount = async () => {
      const firstBuyDiscountRef = db
        .collection('firstBuy')
        .doc('WjIbtKQdy2XADU8reeZB')
      const doc = await firstBuyDiscountRef.get()
      firstBuyDiscount = doc.data().cost
      descuento = {
        nombre: 'Descuento por primera compra',
        cost: doc.data().cost,
      }
    }

    const ordersRef = db.collection('orders').where('usuario', '==', idUser)
    const docs = await ordersRef.get()
    docs.forEach((doc) => {
      array.push(doc.data())
    })
    if (!array?.length) {
      getFirstBuyDiscount()
    }

    // Search and calculate subtotal for products
    for await (const product of products) {
      const productsRef = db.collection('products').doc(product.id)
      const doc = await productsRef.get()

      if (doc.exists) {
        searchProduct = { ...doc.data(), id: doc.id }
      }

      const subTotalForProduct = round(product.number * searchProduct.precio, 2)

      totalPayment = Number(totalPayment) + Number(subTotalForProduct)

      const meibyPepperPlate = searchProduct.path.includes('noodles')
      let namePepperPlate
      if (meibyPepperPlate) namePepperPlate = product.nombre

      productsSend.push({
        producto: namePepperPlate || searchProduct.nombre,
        id: searchProduct.id,
        precioUnitario: searchProduct.precio,
        descripcion: searchProduct.descripcion,
        cantidadDelProducto: product.number,
        subTotal: subTotalForProduct,
        path: searchProduct.path,
        url: searchProduct.image,
        vendido: searchProduct.vendido,
      })
    }

    if (firstBuyDiscount) {
      notDiscount = round(Number(totalPayment), 2)
      totalPayment =
        Number(totalPayment) -
        (Number(totalPayment) * Number(firstBuyDiscount)) / 100
    }

    if (values?.shipping) {
      totalPayment = Number(totalPayment) + Number(priceShipping)
    }

    totalPayment = round(Number(totalPayment) * 100, 2)

    if (values?.cutlery) {
      values.cubiertosParaPersonas = values?.numberCutlery
    } else {
      values.cubiertosParaPersonas = 0
    }

    if (values.isDeliveryNow) {
      values.fechaEntrega = 'Hoy'
      values.horaEntrega = 'Lo antes posible'
    } else {
      values.fechaEntrega = values?.dateDelivery
      values.horaEntrega = values?.timeDelivery
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPayment,
      currency: 'eur',
    })

    data = {
      name: values.name,
      phone: values.phone,
      usuario: idUser,
      username,
      sinDescuento: notDiscount,
      descuento,
      createdAt: Date.now(),
      totalCompra: round(Number(totalPayment) / 100, 2),
      idPago: paymentIntent.id,
      id: paymentIntent.id,
      direccionEnvio: addressShipping || 'Recogida en el local',
      pedido: productsSend,
      totalProductos: round(totalPayment / 100 - priceShipping, 2),
      costoEnvio: priceShipping,
      cubiertosParaPersonas: values?.cubiertosParaPersonas,
      fechaEntrega: values?.fechaEntrega,
      horaEntrega: values?.horaEntrega,
      notas: values?.notes,
    }

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      order: data,
    })
  } catch (err) {
    res.status(500).json({
      msg: err,
    })
  }
}
