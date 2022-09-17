import { useRouter } from 'next/router'

import useAuth from '../hooks/useAuth'
import useOrders from '../hooks/useOrders'
import OrdersPage from '../components/OrdersPage'

export default function Orders() {
  const { authUser } = useAuth()
  const { orders } = useOrders()
  const router = useRouter()

  if (authUser === null) router.replace('/')

  return (
    <main>
      <OrdersPage userId={authUser?.uid} orders={orders} />
    </main>
  )
}
