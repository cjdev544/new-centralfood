import { useState } from 'react'

import Product from '../Product'
import ProductModal from '../modals/ProductModal'
import style from './Plates.module.css'
import Transition from '../Transition'

export default function Plates({
  category,
  productsCategory,
  products,
  restaurants,
}) {
  const [openModal, setOpenModal] = useState(false)
  const [product, setProduct] = useState({})

  return (
    <section className={style.homePlates}>
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
    </section>
  )
}
