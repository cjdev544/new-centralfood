import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'

import useAuth from './useAuth'
import { createCounterInLocalStorage } from '../helpers/createCounterInLocalStorage'
import { addNewOrder } from '../services/data'

const useOrders = () => {
  const { authUser } = useAuth()

  const createNewOrder = addNewOrder

  return {
    createNewOrder,
  }
}

export default useOrders
