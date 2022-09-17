import { useEffect, useState } from 'react'
import {
  query,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'
import { toast } from 'react-toastify'

import { db } from '../firebase/config'

const useData = () => {
  const [isOpen, setIsOpen] = useState(undefined)

  useEffect(() => {
    if (isOpen === undefined) {
      isOpenOrClose(setIsOpen)
    }
  }, [])

  const getRestaurants = async () => {
    const array = []
    const q = query(collection(db, 'restaurants'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() })
    })
    return { restaurants: array }
  }

  const getProducts = async () => {
    try {
      const array = []
      const q = query(collection(db, 'products'))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() })
      })
      return array
    } catch (err) {
      console.log(err)
      toast.error('Error en el servidor')
    }
  }

  const getProduct = async (productId) => {
    const productRef = doc(db, 'products', productId)
    const docSnap = await getDoc(productRef)

    if (docSnap.exists()) {
      return { ...docSnap.data(), id: docSnap.id }
    }
  }

  const getDataHomepage = async () => {
    const array = []
    const q = query(collection(db, 'homepage'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() })
    })
    return array
  }

  const getShippingCostFirebase = async () => {
    const array = []
    const q = query(collection(db, 'shipping'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() })
    })
    return { shippingCost: array }
  }

  const isOpenOrClose = () => {
    onSnapshot(doc(db, 'openClose', '8Wru5Z1vmVYRzzNbBOJA'), (doc) => {
      setIsOpen(doc.data()?.isOpen)
    })
  }

  return {
    isOpen,
    getRestaurants,
    getProducts,
    getProduct,
    getDataHomepage,
    getShippingCostFirebase,
  }
}

export default useData
