import { useState } from 'react'
import Image from 'next/image'
import { FaPlus, FaMinus, FaCheck } from 'react-icons/fa'
import DatePicker, { setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import Ley from '../../public/menu-ley.png'
import 'react-datepicker/dist/react-datepicker.css'

import Arepa1 from '../../public/arepa1.jpg'
import style from './CarPage.module.css'

export default function CarPage() {
  setDefaultLocale(es)

  const [cutlery, setCutlery] = useState(false)
  const [numberCutlery, setNumberCutlery] = useState(1)
  const [createNotes, setCreateNotes] = useState(false)
  const [notes, setNotes] = useState('')
  const [isDeliveryNow, setIsDeliveryNow] = useState(true)
  const [startDate, setStartDate] = useState(new Date())
  const [shipping, setShipping] = useState(true)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [promotionalCode, setPromotionalCode] = useState(null)

  const isCloseDay = (date) => {
    const day = date.getDay()
    return day !== 2
  }

  return (
    <div className={style.car}>
      <div className={style.left}>
        <h3>Productos agregados</h3>
        <div className={style.productList}>
          <Image src={Arepa1} alt='arepa' width={50} height={50} />
          <h4>Arepa Reina pepeada</h4>
          <div className={style.numberProducts}>
            <div className={style.circle}>
              <FaMinus />
            </div>
            <span className={style.spanNumber}>1</span>
            <div className={style.circle}>
              <FaPlus />
            </div>
          </div>
          <span>5.50€</span>
        </div>

        <div className={style.productList}>
          <Image src={Arepa1} alt='arepa' width={50} height={50} />
          <h4>Arepa Reina pepeada</h4>
          <div className={style.numberProducts}>
            <div className={style.circle}>
              <FaMinus />
            </div>
            <span className={style.spanNumber}>1</span>
            <div className={style.circle}>
              <FaPlus />
            </div>
          </div>
          <span>5.50€</span>
        </div>

        <div className={style.productList}>
          <Image src={Arepa1} alt='arepa' width={50} height={50} />
          <h4>Arepa Reina pepeada</h4>
          <div className={style.numberProducts}>
            <div className={style.circle}>
              <FaMinus />
            </div>
            <span className={style.spanNumber}>1</span>
            <div className={style.circle}>
              <FaPlus />
            </div>
          </div>
          <span>5.50€</span>
        </div>

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
            <div className={style.twoItems} onClick={() => setShipping(true)}>
              <span>Recogida en el local</span>
              {shipping ? <FaCheck className={style.circleItem} /> : ''}
            </div>
            <div className={style.twoItems} onClick={() => setShipping(false)}>
              <span>Entrega a domicilio</span>
              {!shipping ? <FaCheck className={style.circleItem} /> : ''}
            </div>
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
            <span>10,60€</span>
          </div>
          <div className={style.amountItem}>
            <span>Envío:</span>
            <span>2,50€</span>
          </div>
          <div className={style.amountItem}>
            <span className={style.total}>TOTAL:</span>
            <span className={style.total}>13,10€</span>
          </div>
        </div>

        <button className={style.button}>Confirmar</button>
      </div>
    </div>
  )
}
