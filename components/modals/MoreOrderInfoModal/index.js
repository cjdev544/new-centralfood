import { useRef } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import { format } from 'date-fns'

import style from './MoreOrderInfoModal.module.css'

export default function MoreOrderInfoModal({ order, setOpenModal }) {
  const boxRef = useRef()

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setOpenModal(false)
    }
  }

  return (
    <div className={style.modal} onClick={isClicked}>
      <div ref={boxRef} className={style.box}>
        <FaRegWindowClose
          className={style.close}
          onClick={() => setOpenModal(false)}
        />
        <p className={style.first}>
          <span className={style.bold}>Pedido N°: </span> {order.id}
        </p>
        <p>
          <span className={style.bold}>Nombre: </span> {order.name}
        </p>
        <p>
          <span className={style.bold}>Teléfono: </span> {order.phone}
        </p>
        {order.direccionEnvio === 'Recogida en el local' ? (
          <p>
            Dirección de envío:
            <span className={style.bold}> Recogida en el local</span>
          </p>
        ) : (
          <p>
            <span className={style.bold}>Dirección del pedido:</span>{' '}
            {order.direccionEnvio?.details},{' '}
            {order.direccionEnvio?.zone?.address}
          </p>
        )}
        <p>
          <span className={style.bold}>Fecha de pedido:</span>{' '}
          {format(order.createdAt, 'dd/MM/yy - h:m a')}
        </p>
        {order.cubiertosParaPersonas > 1 && (
          <p>
            <span className={style.bold}>Cubiertos para:</span>{' '}
            {order.cubiertosParaPersonas} personas.
          </p>
        )}
        {order.notas && (
          <p>
            <span className={style.bold}>Observaciones:</span> {order.notas}
          </p>
        )}
        {order.cubiertosParaPersonas === 1 && (
          <p>
            <span className={style.bold}>Cubiertos para:</span>{' '}
            {order.cubiertosParaPersonas} persona.
          </p>
        )}
        <p>
          <span className={style.bold}>Fecha de entrega:</span>{' '}
          {order.fechaEntrega}
        </p>
        <p>
          <span className={style.bold}>Hora de entrega:</span>{' '}
          {order.horaEntrega}
        </p>
        <p>
          <span className={style.bold}>Total por productos:</span>{' '}
          {order.totalProductos}€
        </p>
        <p>
          <span className={style.bold}>Costo de envío:</span> {order.costoEnvio}
          €
        </p>
        <p>
          <span className={style.bold}>Total pagado:</span> {order.totalCompra}€
        </p>
        <p>
          <span className={style.bold}>Metodo de pago:</span>{' '}
          {order.idPago ? 'Tarjeta' : 'Efectivo'}
        </p>
      </div>
    </div>
  )
}
