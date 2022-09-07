import { useEffect, useState } from 'react'

import { FaPlus, FaCheck } from 'react-icons/fa'
import style from './Complement.module.css'

export default function Complement({ product, setComplements }) {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (isChecked) {
      setComplements((products) => [...products, product])
    } else {
      setComplements((products) =>
        products.filter((complement) => complement.id !== product.id)
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, product])

  return (
    <div
      className={isChecked ? style.itemBoxCheck : style.itemBox}
      onClick={() => setIsChecked(!isChecked)}
    >
      <span>{product.nombre}</span>
      <div className={style.right}>
        <span>{product.precio}€</span>
        <div className={isChecked ? style.circleItemCheck : style.circleItem}>
          {isChecked ? <FaCheck /> : <FaPlus />}
        </div>
      </div>
    </div>
  )
}
