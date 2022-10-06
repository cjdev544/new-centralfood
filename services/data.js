import {
  query,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  where,
} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

import { auth, db } from '../firebase/config'

export const getRestaurants = async () => {
  const array = []
  const q = query(collection(db, 'restaurants'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  return array
}

export const getProducts = async () => {
  const array = []
  const q = query(collection(db, 'products'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  return array
}

export const getProduct = async (productId) => {
  const productRef = doc(db, 'products', productId)
  const docSnap = await getDoc(productRef)

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id }
  }
}

export const getDataHomepage = async () => {
  const array = []
  const q = query(collection(db, 'homepage'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  return array
}

export const getShippingCost = async (address, setDeliveryCost) => {
  const distance = address?.zone?.distNumber
  let costForDelivery
  if (distance <= 2) {
    costForDelivery = '0 a 2km'
  } else if (distance <= 6) {
    costForDelivery = '2 a 6km'
  } else {
    costForDelivery = '6 a 10km'
  }
  if (distance) {
    const q = query(collection(db, 'shipping'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      if (doc.data().distancia === costForDelivery)
        setDeliveryCost(doc.data().costo)
    })
  }
}

export const isOpenOrClose = () => {
  onSnapshot(doc(db, 'openClose', '8Wru5Z1vmVYRzzNbBOJA'), (doc) => {
    return doc.data()?.isOpen
  })
}

export const getAddressesUser = async (userId) => {
  const array = []
  const q = query(collection(db, 'addresses'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    if (doc.data().user === userId) {
      array.push({ id: doc.id, ...doc.data() })
    }
  })
  return array
}

export const getOrdersUser = async (userId) => {
  const array = []
  const q = query(collection(db, 'orders'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    if (doc.data().usuario === userId) {
      array.push({ id: doc.id, ...doc.data() })
    }
  })
  return array
}

export const getFirstBuyPromotion = async () => {
  let data = {}
  const q = query(collection(db, 'firstBuy'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    data = doc.data()
  })
  return data
}

export const createAddress = async (address) => {
  const addressId = uuidv4()
  const addressRef = doc(db, 'addresses', addressId)
  const user = auth.currentUser

  await setDoc(addressRef, {
    ...address,
    user: user.uid,
  })
}

export const updateAddress = async (address, updateAddress) => {
  const addressRef = doc(db, 'addresses', address.id)
  await updateDoc(addressRef, updateAddress)
}

export const deleteAddress = async (address) => {
  const addressRef = doc(db, 'addresses', address.id)
  await deleteDoc(addressRef)
}

export const getUserOrders = async (userId) => {
  const array = []
  const ordersRef = collection(db, 'orders')
  const q = query(ordersRef, where('usuario', '==', userId))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  const sortOrders = array?.sort((a, b) => b.createdAt - a.createdAt)
  return sortOrders
}

export const addNewOrder = async (order) => {
  const orderRef = doc(db, 'orders', order.id)
  await setDoc(orderRef, order)
  return order
}

export const updateOrder = async (order) => {
  const orderRef = doc(db, 'orders', order.id)
  await updateDoc(orderRef, { ...order, orderSend: true })
}
