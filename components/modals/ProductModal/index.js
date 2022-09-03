import { useRef } from 'react'
import Image from 'next/image'
import { FaRegWindowClose, FaPlus, FaMinus, FaCheck } from 'react-icons/fa'

import Arepa1 from '../../../public/arepa1.jpg'
import style from './ProductModal.module.css'

export default function ProductModal({ setOpenModal }) {
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
        <div className={style.left}>
          <p className={style.extra}>Complemento</p>
          <div className={style.itemBoxCheck}>
            <span>Salsa de Soja</span>
            <div className={style.circleItemCheck}>
              <FaCheck />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>

          {/* Drinks */}
          <p className={style.extra}>Bebidas</p>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>

          {/* Others */}
          <p className={style.extra}>Postres</p>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
          <div className={style.itemBox}>
            <span>Salsa de Soja</span>
            <div className={style.circleItem}>
              <FaPlus />
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.product}>
            <Image src={Arepa1} alt='arepa' width={200} height={200} />
          </div>
          <h2>Arepa Reina Pepiada</h2>
          <p>
            repa rellena con pollo desmechado con aguacate y salsa especial de
            mayonesa
          </p>
          <span className={style.productPrice}>5,50€</span>
          <div className={style.numberProducts}>
            <div className={style.circle}>
              <FaMinus />
            </div>
            <span className={style.spanNumber}>1</span>
            <div className={style.circle}>
              <FaPlus />
            </div>
          </div>
          <div className={style.button}>
            <button className='button'>Añadir por 5,50€</button>
          </div>
        </div>
      </div>
    </div>
  )
}
