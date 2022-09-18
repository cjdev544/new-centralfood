import { useEffect, useState } from 'react'
import moment from 'moment'

import useAuth from '../../hooks/useAuth'
import Counter from '../Counter'
import style from './OrderAlert.module.css'
import { or } from 'mathjs'

export default function OrderAlert({ order }) {
  const { authUser } = useAuth()
  const [alertState, setAlertState] = useState(null)
  const [alert, setAlert] = useState(null)
  const [orderAlert, setOrderAlert] = useState(true)
  const [name, setName] = useState('')

  useEffect(() => {
    if (authUser?.displayName) {
      setName(authUser.displayName.split(' ')[0])
    }
  }, [authUser])

  useEffect(() => {
    if (order?.deliveryIn) setAlertState('deliveryIn')
    if (order?.orderSend) setAlertState('orderSend')
    if (order?.cancel) setAlertState('cancel')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order])

  useEffect(() => {
    const alertType = {
      orderSend: {
        msg: `El pedido N°${order?.id}`,
        msg2: 'YA VA EN CAMINO. Gracias por preferirnos y que aproveche',
        emoji: '🏍️',
        color: '#69af00',
      },
      cancel: {
        msg: `El pedido N°${order?.id} NO PUEDE SER DESPACHADO`,
        msg2: order.cancel,
        emoji: '😔',
        color: '#ff0000',
      },
      deliveryIn: {
        msg: `El pedido N°${order?.id}`,
        msg2: 'SE ESTÁ PREPARANDO',
        emoji: '👩‍🍳',
        color: '#69af00',
      },
    }

    const alertDefault = {
      msg: `Hola ${name}, En breve será notificado con la confirmación del pedido N°${order?.id} y el tiempo estimado para su entrega`,
      color: '#ff5400',
    }

    setAlert(alertType[alertState] || alertDefault)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertState])

  useEffect(() => {
    if (order?.cancel) {
      const now = moment(new Date())
      const buyTime = moment(order.createdAt)
      var duration = moment.duration(now.diff(buyTime))
      const minutes = duration.asMinutes()
      console.log({ minutes })
      if (minutes > 155) setOrderAlert(null)
    }
  }, [order])

  if (!orderAlert) return null

  return (
    <div className={style.alert} style={{ backgroundColor: `${alert?.color}` }}>
      <span className={style.text}>
        {alert?.msg} <span className={style.emoji}>{alert?.emoji}</span>{' '}
        {alert?.msg2}
      </span>
      {order?.deliveryIn !== undefined && (
        <Counter order={order} setOrderAlert={setOrderAlert} />
      )}
    </div>
  )
}
