import { useRef } from 'react'
import Image from 'next/image'
import { FaRegWindowClose, FaPlus, FaMinus } from 'react-icons/fa'

import { getProductsComplements } from '../../../helpers/getProductsComplements'
import Complement from '../../Complement'
import style from './ProductModal.module.css'

export default function ProductModal({ products, product, setOpenModal }) {
  const boxRef = useRef()

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setOpenModal(false)
    }
  }

  const { extras, drinks, beer, desserts } = getProductsComplements(
    products,
    product
  )

  return (
    <div className={style.modal} onClick={isClicked}>
      <div ref={boxRef} className={style.box}>
        <FaRegWindowClose
          className={style.close}
          onClick={() => setOpenModal(false)}
        />
        <div className={style.left}>
          <p className={style.extra}>Extras</p>
          {extras.map((product) => (
            <Complement key={product.id} product={product} />
          ))}

          {/* Drinks */}
          <p className={style.extra}>Bebidas</p>
          {drinks.map((product) => (
            <Complement key={product.id} product={product} />
          ))}

          {/* Desserts */}
          <p className={style.extra}>Postres</p>
          {desserts.map((product) => (
            <Complement key={product.id} product={product} />
          ))}

          {/* Beer */}
          <p className={style.extra}>Cervezas</p>
          {beer.map((product) => (
            <Complement key={product.id} product={product} />
          ))}
        </div>
        <div className={style.right}>
          <div className={style.product}>
            <Image
              src={product.image}
              alt={product.nombre}
              width={200}
              height={200}
            />
          </div>
          <h2>{product.nombre}</h2>
          <p>{product.descripcion}</p>
          <span className={style.productPrice}>{product.precio}€</span>
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
