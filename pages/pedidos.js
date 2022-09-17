import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import useAuth from '../hooks/useAuth'
import useOrders from '../hooks/useOrders'
import OrdersPage from '../components/OrdersPage'

export default function Orders() {
  const { authUser } = useAuth()
  const { getOrdersUser } = useOrders()
  const router = useRouter()

  const [orders, setOrders] = useState([])

  if (authUser === null) router.replace('/')

  useEffect(() => {
    if (authUser?.uid) {
      getOrdersUser(authUser.uid).then(setOrders)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser])

  return (
    <main>
      <OrdersPage userId={authUser?.uid} orders={orders} />
    </main>
  )
}
