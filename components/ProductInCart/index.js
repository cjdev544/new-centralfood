import { useEffect, useState } from 'react'
import Image from 'next/image'
import { round } from 'mathjs'
import { FaPlus, FaMinus } from 'react-icons/fa'

import useLocalStorage from '../../hooks/useLocalStorage'
import style from './ProductInCart.module.css'

export default function ProductInCart({ product }) {
  const [counterProduct, setCounterProduct] = useState(1)
  const [productCost, setProductCost] = useState(0)

  const { updateProductCart, deleteProductCart } = useLocalStorage()

  useEffect(() => {
    setCounterProduct(product.number)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setProductCost(round(product?.precio * counterProduct, 2))
  }, [product, counterProduct])

  const plusPlate = () => {
    setCounterProduct(counterProduct + 1)
    updateProductCart(product, counterProduct + 1)
  }

  const minusPlate = () => {
    if (counterProduct > 1) {
      setCounterProduct(counterProduct - 1)
      updateProductCart(product, counterProduct - 1)
    } else {
      deleteProductCart(product)
    }
  }

  return (
    <div className={style.productList}>
      <Image src={product.image} alt={product.nombre} width={50} height={50} />
      <h4>{product.nombre}</h4>
      <div className={style.right}>
        <div className={style.numberProducts}>
          <div className={style.circle} onClick={minusPlate}>
            <FaMinus />
          </div>
          <span className={style.spanNumber}>{counterProduct}</span>
          <div className={style.circle} onClick={plusPlate}>
            <FaPlus />
          </div>
        </div>
        <span className={style.price}>{productCost}€</span>
      </div>
    </div>
  )
}
