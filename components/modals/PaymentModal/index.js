import { useRef, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { FaRegWindowClose } from 'react-icons/fa'

import PayWithCard from '../../PayWithCard'
import style from './PaymentModal.module.css'
import PayWithCash from '../../PayWithCash'

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`)

export default function PaymentModal({
  values,
  name,
  phone,
  shipping,
  address,
  deliveryCost,
  products,
  promotion,
  totalCostProducts,
  totalProducts,
  total,
  setOpenModalPay,
}) {
  const boxRef = useRef()

  const [cashPayment, setCashPayment] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setOpenModalPay(false)
    }
  }

  return (
    <div className={style.modal} onClick={isClicked}>
      <div ref={boxRef} className={style.box}>
        <FaRegWindowClose
          className={style.close}
          onClick={() => {
            setOpenModalPay(false)
          }}
        />
        <div className={style.amount}>
          <h2>PEDIDO</h2>
          <div className={style.amountItem}>
            <span>Productos:</span>
            <span>{totalCostProducts}€</span>
          </div>
          {promotion && (
            <>
              <div className={style.amountItem}>
                <span>{promotion.name}:</span>
                <span>{promotion.cost}%</span>
              </div>
              <div className={style.amountItem}>
                <span>Descuento aplicado:</span>
                <span>{totalProducts}€</span>
              </div>
            </>
          )}
          <div className={style.amountItem}>
            <span>Envío:</span>
            <span>{deliveryCost}€</span>
          </div>
          <div className={style.amountItem}>
            <span className={style.total}>TOTAL:</span>
            <span className={style.total}>{total}€</span>
          </div>
          <div className={style.dataClient}>
            <p>
              <span>Recive: </span> {name}
            </p>
            <p>
              <span>Teléfono: </span> {phone}
            </p>
            {shipping ? (
              <p>
                <span>Dirección: </span> {address.title}
              </p>
            ) : (
              <p>Recogida en el local</p>
            )}
          </div>
        </div>
        <button
          className={style.button}
          onClick={() => setCashPayment(!cashPayment)}
        >
          {cashPayment ? 'Pagar con tarjeta' : 'Pagar con efectivo'}
        </button>
        <div className={style.right}>
          <div className={style.payment}>
            <div className={style.data}>
              <Elements stripe={stripePromise}>
                {cashPayment ? (
                  <PayWithCash
                    isLoading={isLoading}
                    products={products}
                    address={address}
                    values={values}
                    priceShipping={deliveryCost}
                    setIsLoading={setIsLoading}
                    setOpenModalPay={setOpenModalPay}
                  />
                ) : (
                  <PayWithCard
                    products={products}
                    address={address}
                    values={values}
                    priceShipping={deliveryCost}
                    setOpenModalPay={setOpenModalPay}
                  />
                )}
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
