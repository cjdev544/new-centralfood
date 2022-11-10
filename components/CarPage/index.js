import { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { round } from 'mathjs'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'
import DatePicker, { setDefaultLocale } from 'react-datepicker'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { toast } from 'react-toastify'
import 'react-datepicker/dist/react-datepicker.css'

import Ley from '../../public/menu-ley.png'
import useData from '../../hooks/useData'
import useAuth from '../../hooks/useAuth'
import useLocalStorage from '../../hooks/useLocalStorage'
import AddressModal from '../modals/AddressModal'
import FormModal from '../modals/FormModal'
import useCart from '../../hooks/useCart'
import ProductInCart from '../ProductInCart'
import Auth from '../Auth'
import style from './CarPage.module.css'

const PaymentModal = dynamic(() => import('../modals/PaymentModal'), {
  suspense: true,
})

export default function CarPage() {
  setDefaultLocale(es)

  const { isOpen } = useData()
  const { authUser } = useAuth()
  const { cartProducts, totalCostProducts } = useLocalStorage()
  const {
    deliveryCost,
    addressSelected,
    promotion,
    totalProducts,
    setDeliveryCost,
    setAddressSelected,
    setPromotionalCode,
  } = useCart()

  const [cutlery, setCutlery] = useState(false)
  const [numberCutlery, setNumberCutlery] = useState(1)
  const [createNotes, setCreateNotes] = useState(false)
  const [notes, setNotes] = useState('')
  const [isDeliveryNow, setIsDeliveryNow] = useState(true)
  const [startDate, setStartDate] = useState(new Date())
  const [shipping, setShipping] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [openModalAuth, setOpenModalAuth] = useState(false)
  const [openModalPay, setOpenModalPay] = useState(false)
  const [values, setValues] = useState({})

  useEffect(() => {
    setValues({
      shipping,
      cutlery,
      numberCutlery,
      notes,
      isDeliveryNow,
      dateDelivery: format(startDate, 'dd/MM/yy'),
      timeDelivery: format(startDate, 'h:m a'),
      name,
      phone,
    })
  }, [
    shipping,
    cutlery,
    numberCutlery,
    notes,
    isDeliveryNow,
    startDate,
    name,
    phone,
  ])

  const isCloseDay = (date) => {
    const day = date.getDay()
    return day !== 2
  }

  const handleShowModal = () => {
    if (totalCostProducts < 12) {
      toast.warning('La compra mínima para entrega a domicilio es de 12€')
    } else {
      setShipping(true)
      if (authUser?.uid) {
        setOpenModal(true)
      } else {
        setOpenModalAuth(true)
      }
    }
  }

  const handleSubmit = () => {
    if (!isOpen) {
      toast.warning('El restaurante se encuentra cerrado en estos momentos')
      return
    }

    if (!authUser?.uid) {
      setOpenModalAuth(true)
      return
    }

    if (!name || !phone) {
      toast.warning('El nombre y el teléfono son obligatorios')
      return
    }
    setOpenModalPay(true)
  }

  return (
    <div className={style.car}>
      <div className={style.left}>
        <h2>Productos agregados</h2>
        {!cartProducts && (
          <p style={{ textAlign: 'center' }}>No se han agregado productos.</p>
        )}
        {cartProducts?.map((product) => (
          <ProductInCart key={product.id} product={product} />
        ))}

        <div className={style.ley}>
          <Image src={Ley} alt='arepa' width={400} height={260} />
          <p>
            Alergias alimentarias o necesidades dietéticas especiales: Antes de
            realizar su pedido, contacte directamente con en restaurante
            Teléfono: 649-71-88-31
          </p>
        </div>
      </div>

      <div className={style.right}>
        <h4>Opciones del pedido</h4>
        <div className={style.cutlery}>
          <div className={style.check}>
            <p>¿Deseas cubiertos?</p>
            <div className={style.onlyCheck}>
              <span>Si</span>
              <div onClick={() => setCutlery(!cutlery)}>
                {cutlery ? (
                  <FaCheck className={style.circleItem} />
                ) : (
                  <FaPlus className={style.circleItem} />
                )}
              </div>
            </div>
          </div>
          {cutlery && (
            <input
              className={style.input}
              type='number'
              min='1'
              placeholder='¿Para cuantas personas?'
              onChange={(e) => setNumberCutlery(e.target.value)}
            />
          )}
        </div>

        <div className={style.cutlery}>
          <div className={style.check}>
            <p>
              ¿Tienes alergias, deseas eliminar algún ingrediente ó algún
              comentario para el envío?
            </p>
            <div className={style.onlyCheck}>
              <span>Si</span>
              <div onClick={() => setCreateNotes(!createNotes)}>
                {createNotes ? (
                  <FaCheck className={style.circleItem} />
                ) : (
                  <FaPlus className={style.circleItem} />
                )}
              </div>
            </div>
          </div>
          {createNotes && (
            <textarea
              className={style.textarea}
              placeholder='Agregar notas para el envío'
              onChange={(e) => setNotes(e.target.value)}
            />
          )}
        </div>

        <div className={style.twoOptions}>
          <div className={style.twoOptionsBox}>
            <p>¿Momento para la entrega?</p>
            <div
              className={style.twoItems}
              onClick={() => setIsDeliveryNow(true)}
            >
              <span>Lo antes posible</span>
              {isDeliveryNow ? <FaCheck className={style.circleItem} /> : ''}
            </div>
            <div
              className={style.twoItems}
              onClick={() => setIsDeliveryNow(false)}
            >
              <span>Programar fecha de entrega</span>
              {!isDeliveryNow ? <FaCheck className={style.circleItem} /> : ''}
            </div>
          </div>
          {!isDeliveryNow && (
            <DatePicker
              dateFormat='dd/MM/yy h:mm aa'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              timeInputLabel='Hora:'
              showTimeInput
              minDate={new Date()}
              filterDate={isCloseDay}
              mini
            />
          )}
        </div>

        <div className={style.twoOptions}>
          <div className={style.twoOptionsBox}>
            <p>¿Cómo quieres realizar tu pedido?</p>
            <div
              className={style.twoItems}
              onClick={() => {
                setShipping(false)
                setAddressSelected(null)
                setDeliveryCost(0)
              }}
            >
              <span>Recogida en el local</span>
              {!shipping ? <FaCheck className={style.circleItem} /> : ''}
            </div>
            <div className={style.twoItems} onClick={handleShowModal}>
              <span>Entrega a domicilio</span>
              {shipping ? <FaCheck className={style.circleItem} /> : ''}
            </div>
            {totalCostProducts < 12 && (
              <span className={style.noShipping}>
                La compra mínima para entrega a domicilio es de 12€
              </span>
            )}
            {addressSelected?.title && (
              <span className={style.addressTitle}>
                Dirección de envío: {addressSelected.title}
              </span>
            )}
          </div>
        </div>

        <div className={style.cutlery}>
          <input
            className={style.inputContact}
            type='text'
            placeholder='Nombre de quien recive'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={style.inputContact}
            type='number'
            placeholder='Teléfono de contacto'
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className={style.inputContact}
            type='text'
            placeholder='¿Tienes un código promocional?'
            onChange={(e) => setPromotionalCode(e.target.value)}
          />
        </div>

        <div className={style.amount}>
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
            <span className={style.total}>
              {round(totalProducts + Number(deliveryCost), 2)}€
            </span>
          </div>
        </div>

        <button className={style.button} onClick={handleSubmit}>
          Confirmar
        </button>
      </div>
      {openModal && (
        <AddressModal
          userId={authUser.uid}
          setShipping={setShipping}
          setAddressSelected={setAddressSelected}
          setOpenModal={setOpenModal}
        />
      )}
      {openModalAuth && (
        <FormModal
          setOpenModal={setOpenModalAuth}
          contentModal={<Auth setOpenModal={setOpenModalAuth} />}
        />
      )}
      {openModalPay && (
        <Suspense fallback={''}>
          <PaymentModal
            values={values}
            name={name}
            phone={phone}
            shipping={shipping}
            address={addressSelected}
            deliveryCost={deliveryCost}
            products={cartProducts}
            promotion={promotion}
            totalProducts={totalProducts}
            totalCostProducts={totalCostProducts}
            total={round(totalProducts + Number(deliveryCost), 2)}
            setOpenModalPay={setOpenModalPay}
          />
        </Suspense>
      )}
    </div>
  )
}
