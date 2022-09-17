import { useState } from 'react'

import MoreOrderInfoModal from '../modals/MoreOrderInfoModal'
import Order from './Order'
import style from './OrdersPage.module.css'

export default function OrdersPage({ userId, orders }) {
  const [orderSelected, setOrderSelected] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  if (userId === null)
    return (
      <div className={style.orders}>
        <h2>Debes iniciar sesión</h2>
      </div>
    )

  return (
    <div className={style.orders}>
      <h1>Mis pedidos</h1>
      {orders?.length === 0 ? (
        <h3>
          Todavía no has realizado ninguna compra. Obten un descuento por tu
          primera compra.
        </h3>
      ) : (
        <div className={style.orderList}>
          {orders.map((order) => (
            <Order
              key={order.id}
              order={order}
              setOrderSelected={setOrderSelected}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      )}
      {openModal && (
        <MoreOrderInfoModal order={orderSelected} setOpenModal={setOpenModal} />
      )}
    </div>
  )
}
