import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { round } from 'mathjs'
import { FaRegWindowClose, FaPlus, FaMinus } from 'react-icons/fa'

import { getProductsComplements } from '../../../helpers/getProductsComplements'
import Complement from '../../Complement'
import style from './ProductModal.module.css'

export default function ProductModal({ products, product, setOpenModal }) {
  const [counterProduct, setCounterProduct] = useState(1)
  const [productCost, setProductCost] = useState(0)
  const [complements, setComplements] = useState([])
  const [complementsCost, setComplementsCost] = useState(0)
  const [total, setTotal] = useState(0)
  const boxRef = useRef()

  useEffect(() => {
    setProductCost(round(product?.precio * counterProduct, 2))
  }, [counterProduct, product])

  useEffect(() => {
    let total = 0
    complements.forEach((complement) => {
      total = round(Number(complement.precio) + total, 2)
      setComplementsCost(total)
    })
  }, [complements])

  useEffect(() => {
    setTotal(round(productCost + complementsCost, 2))
  }, [productCost, complementsCost])

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setOpenModal(false)
    }
  }

  const { extras, drinks, beer, desserts } = getProductsComplements(
    products,
    product
  )

  const plusPlate = () => {
    setCounterProduct(counterProduct + 1)
  }

  const minusPlate = () => {
    if (counterProduct > 1) {
      setCounterProduct(counterProduct - 1)
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
          <p className={style.extra}>Extras</p>
          {extras.map((product) => (
            <Complement
              key={product.id}
              product={product}
              setComplements={setComplements}
            />
          ))}

          {/* Drinks */}
          <p className={style.extra}>Bebidas</p>
          {drinks.map((product) => (
            <Complement
              key={product.id}
              product={product}
              setComplements={setComplements}
            />
          ))}

          {/* Desserts */}
          <p className={style.extra}>Postres</p>
          {desserts.map((product) => (
            <Complement
              key={product.id}
              product={product}
              setComplements={setComplements}
            />
          ))}

          {/* Beer */}
          <p className={style.extra}>Cervezas</p>
          {beer.map((product) => (
            <Complement
              key={product.id}
              product={product}
              setComplements={setComplements}
            />
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
            <div className={style.circle} onClick={minusPlate}>
              <FaMinus />
            </div>
            <span className={style.spanNumber}>{counterProduct}</span>
            <div className={style.circle} onClick={plusPlate}>
              <FaPlus />
            </div>
          </div>
          <div className={style.button}>
            <button className='button'>Añadir por {total}€</button>
          </div>
        </div>
      </div>
    </div>
  )
}
