import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'
import { format } from 'date-fns'

import NoImage from '../../public/no-image.png'
import style from './OrdersPage.module.css'

export default function Order({ order, setOpenModal, setOrderSelected }) {
  return (
    <div key={order.id} className={style.order}>
      {!order?.deliveryIn && !order?.cancel && (
        <div className={style.alert}>Por confirmar</div>
      )}
      {order?.deliveryIn && !order?.orderSend && (
        <div className={style.sending}>
          Entrega aproximada: {order.deliveryIn} min
        </div>
      )}
      {order?.orderSend && !order?.cancel && (
        <div className={style.send}>Enviado</div>
      )}
      {order?.cancel && <div className={style.cancel}>Pedido cancelado</div>}

      <div className={style.header}>
        <span>Pedido: {order.id}</span>
        <div className={style.flex}>
          <span>{format(order.createdAt, 'dd/MM/yyyy - h:m a')}</span>
          <span
            className={style.icon}
            onClick={() => {
              setOpenModal(true)
              setOrderSelected(order)
            }}
          >
            Ver más <FaEye className={style.icon} />
          </span>
        </div>
      </div>
      {order.pedido?.map((product) => (
        <div className={style.box} key={product.id}>
          <div className={style.info}>
            <Link href={`/plato/${product?.path}`}>
              <a>
                <Image
                  src={product?.url ? product.url : NoImage}
                  alt={product.producto}
                  width={100}
                  height={100}
                />
              </a>
            </Link>
            <div className={style.data}>
              <h4>{product.producto}</h4>
              <span>Precio unitario: {product.precioUnitario}€</span>
              <span>Cantidad del producto: {product.cantidadDelProducto}</span>
              <span>Subtotal: {product.subTotal}€</span>
            </div>
          </div>
        </div>
      ))}
      {!order.descuento?.cost && (
        <div className={style.span}>
          <span>Total por productos: {order.totalProductos}€</span>
          <span>Costo de envío: {order.costoEnvio}€</span>
        </div>
      )}
      {order.descuento?.cost && (
        <>
          <div className={style.spanBlock}>
            <span>Total por productos: {order.sinDescuento}€</span>
            <span>
              {order.descuento.nombre}: {order.descuento.cost}%
            </span>
          </div>
          <div className={style.span}>
            <span>Descuento aplicado: {order.totalProductos}€</span>
            <span>Costo de envío: {order.costoEnvio}€</span>
          </div>
        </>
      )}
      <p className={style.pay}>Total pagado: {order.totalCompra}€</p>
    </div>
  )
}
