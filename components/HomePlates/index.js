import { useState } from 'react'
import dynamic from 'next/dynamic'

const ProductModal = dynamic(import('../modals/ProductModal'))
import Product from '../Product'
import style from './HomePlates.module.css'

export default function HomePlates({ products, restaurants, dataHome }) {
  const [openModal, setOpenModal] = useState(false)
  const [product, setProduct] = useState({})

  const productsFilter = dataHome?.productsSection?.map((productId) => {
    const res = products.filter(
      (productGlobal) => productGlobal.id === productId
    )
    return res[0]
  })
  const productsInSection = productsFilter?.filter(
    (product) => product.disponible
  )

  return (
    <section className={style.homePlates}>
      <div className={style.opacity}>
        <div className={style.background}>
          <p className={style.discount}>
            Realiza tu primera compra con un <span>10% de DESCUENTO</span>
          </p>
          {productsInSection[0] !== undefined && (
            <>
              <h2 className={style.title}>Nuestros platos más pedidos</h2>
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
          restaurants={restaurants}
        />
      )}
    </section>
  )
}
