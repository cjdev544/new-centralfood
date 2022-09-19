import { useState } from 'react'

import Product from '../Product'
import ProductModal from '../modals/ProductModal'
import style from './HomePlates.module.css'

export default function HomePlates({ products, dataHome }) {
  const [openModal, setOpenModal] = useState(false)
  const [product, setProduct] = useState({})

  const productsInSection = dataHome?.productsSection.map((productId) => {
    const res = products.filter(
      (productGlobal) => productGlobal.id === productId && products?.disponible
    )
    return res[0]
  })

  return (
    <section className={style.homePlates}>
      <div className={style.opacity}>
        <div className={style.background}>
          <p className={style.discount}>
            Realiza tu primera compra con un <span>10% de DESCUENTO</span>
          </p>
          {productsInSection[0] !== undefined && (
            <>
              <h3 className={style.title}>Nuestros platos más pedidos</h3>
              <div className={style.products}>
                {productsInSection.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    setOpenModal={setOpenModal}
                    setProduct={setProduct}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {openModal && (
        <ProductModal
          setOpenModal={setOpenModal}
          products={products}
          product={product}
        />
      )}
    </section>
  )
}
