import {
  query,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'

import { db } from '../firebase/config'

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

export const getShippingCostFirebase = async () => {
  const array = []
  const q = query(collection(db, 'shipping'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  return { shippingCost: array }
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
