import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast } from 'react-toastify'

import useAuth from '../../hooks/useAuth'
import useOrders from '../../hooks/useOrders'
import { fetchPaymentApi } from '../../helpers/fetchPaymentApi'

export default function PayWithCash({
  isLoading,
  products,
  address,
  values,
  priceShipping,
  setIsLoading,
  setOpenModalPay,
}) {
  const [cash, setCash] = useState(null)
  const { authUser } = useAuth()
  const { createNewOrder } = useOrders()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log('comprando...')
    fetchPaymentApi(products, authUser, address, values, priceShipping)
      .then((response) => {
        if (response?.msg) {
          toast.error(response.msg)
          setIsLoading(false)
          return
        }

        const { order } = response
        order.cash = cash
        // Create order in firebase
        createNewOrder(order)
        setIsLoading(false)
        setOpenModalPay(false)
        toast.success('La orden ha sido enviada')
        //router.push('/pedidos')
        //removeAllProductsCart()
      })
      .catch((err) => {
        console.log(err)
        toast.warning('Error al crear la orden')
        setIsLoading(false)
        setOpenModalPay(false)
      })
  }

  return (
    <form className='form-payment' onSubmit={handleSubmit}>
      <span>Cantidad en efectivo, para devolver el cambio</span>
      <input
        type='number'
        placeholder='Cambio para'
        onChange={(e) => setCash(e.target.value)}
      />
      <button className='submit' type='submit'>
        <ClipLoader color='#fff' loading={isLoading} size={20} />
        Realizar pedido
      </button>
    </form>
  )
}
