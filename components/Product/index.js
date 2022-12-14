import Image from 'next/image'

import style from './Product.module.css'

export default function Product({ product, setProduct, setOpenModal }) {
  const cutDescription = product?.descripcion?.substring(0, 80)

  const handleClick = () => {
    setProduct(product)
    setOpenModal(true)
  }

  return (
    <article className={style.product} onClick={handleClick}>
      <div className={style.image}>
        <Image
          className={style.imageBox}
          src={product.image}
          alt={product.nombre}
          width={100}
          height={100}
          quality={30}
        />
      </div>
      <div className={style.info}>
        <div className={style.headerInfo}>
          <h3>{product.nombre}</h3>
          <p>{product.precio}€</p>
        </div>
        <p>{cutDescription}...</p>
      </div>
    </article>
  )
}
