import { useState } from 'react'

import { FaPlus, FaCheck } from 'react-icons/fa'
import style from './Complement.module.css'

export default function Complement({ product }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div
      className={isChecked ? style.itemBoxCheck : style.itemBox}
      onClick={handleClick}
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
