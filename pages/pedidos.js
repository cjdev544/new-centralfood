import Head from 'next/head'
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
    <>
      <Head>
        <title>Pedidos | CentralFoodMalaga</title>
        <meta
          name='description'
          content='Restaurante venezolano, comida internacional con sabor a Venezuela. Seis restaurantes, seis sabores. SushiGuay: restaurante de comida japonesa, GuayWok: restaurante de comida china, Con sabor a casita: restaurante de comida venezolana, Hamburguesería Venezuela: restaurante de comida americana, Pokes Guay> restaurante de comida hawaiana, DonBurrito: restaurante de comida mexicana'
        />
      </Head>
      <main>
        <OrdersPage userId={authUser?.uid} orders={orders} />
      </main>
    </>
  )
}
