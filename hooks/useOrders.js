import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'

import useAuth from './useAuth'
import { createCounterInLocalStorage } from '../helpers/createCounterInLocalStorage'
import { addNewOrder, getUserOrders } from '../services/data'

const useOrders = () => {
  const { authUser } = useAuth()
  const [orders, setOrders] = useState([])
  const [ordersAlert, setOrdersAlert] = useState(null)

  useEffect(() => {
    if (authUser?.uid) {
      getUserOrders(authUser.uid).then(setOrders)
    }
  }, [authUser])

  useEffect(() => {
    if (authUser?.uid && orders?.length > 0) {
      const orderNotShipping = orders.filter(
        (order) => order?.orderSend === undefined || order?.cancel
      )

      const ordersStorage = orderNotShipping?.filter(
        (order) => order?.deliveryIn !== undefined
      )

      ordersStorage?.map((order) => {
        const varStorage = localStorage.getItem(`orderCF_${order.id}`)
        if (
          varStorage === '[object Undefined]' ||
          varStorage === null ||
          varStorage === undefined
        ) {
          if (!order?.cancelCounter) {
            createCounterInLocalStorage(order)
          }
        }
      })
      console.log({ orderNotShipping })
    }
  }, [authUser, orders])

  useEffect(() => {
    if (authUser?.uid && orders?.length > 0) {
      const ordersAlert = orders?.map((order) => {
        if (localStorage.getItem(`orderCF_${order.id}`)) {
          if (!order.cancelCounter) {
            return order
          }
        }
      })

      const ordersDelivery = ordersAlert?.filter((order) => order !== undefined)
      const ordersNoDelivery = orders?.filter(
        (order) => order?.deliveryIn === undefined
      )
      const ordersInAlert = [...ordersNoDelivery, ...ordersDelivery]

      ordersInAlert?.map((order) => listenChange(order))

      if (ordersInAlert?.length > 0) {
        setOrdersAlert(ordersInAlert)
      } else {
        setOrdersAlert(null)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser, orders])

  const listenChange = (order) => {
    if (orders) {
      const unsubscribe = onSnapshot(
        doc(db, 'orders', `${order.id}`),
        (doc) => {
          compareOrder(doc.data())
        }
      )
      if (order?.orderSend || order?.cancel) unsubscribe()
    }
  }

  const compareOrder = (order) => {
    const orderCompare = orders?.filter(
      (newOrder) => newOrder.id === order?.id
    )[0]

    if (
      orderCompare?.deliveryIn !== order?.deliveryIn ||
      orderCompare?.orderSend !== order?.orderSend ||
      orderCompare?.cancel !== order?.cancel
    ) {
      setOrders(
        orders.map((oldOrder) => (oldOrder.id === order.id ? order : oldOrder))
      )
    }
  }

  const createNewOrder = addNewOrder

  return {
    orders,
    ordersAlert,
    createNewOrder,
  }
}

export default useOrders
