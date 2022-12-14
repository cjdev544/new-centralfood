import { useState } from 'react'
import dynamic from 'next/dynamic'

const ProductModal = dynamic(import('../modals/ProductModal'))
import Product from '../Product'
import Transition from '../Transition'
import style from './Plates.module.css'

export default function Plates({
  category,
  productsCategory,
  products,
  restaurants,
}) {
  const [openModal, setOpenModal] = useState(false)
  const [product, setProduct] = useState({})

  return (
    <div className={style.homePlates}>
      <div className={style.opacity}>
        <div className={style.background}>
          <Transition category={category}>
            <h2 className={style.title}>{category}</h2>
            <div className={style.products}>
              {productsCategory.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  setOpenModal={setOpenModal}
                  setProduct={setProduct}
                />
              ))}
            </div>
          </Transition>
        </div>
      </div>
      {openModal && (
        <ProductModal
          setOpenModal={setOpenModal}
          products={products}
          product={product}
          restaurants={restaurants}
        />
      )}
    </div>
  )
}
