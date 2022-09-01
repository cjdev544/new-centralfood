import Image from 'next/image'

import Arepa1 from '../../public/arepa1.jpg'
import style from './HomePlates.module.css'

export default function HomePlates() {
  return (
    <section className={style.homePlates}>
      <div className={style.opacity}>
        <div className={style.background}>
          <p className={style.discount}>
            Realiza tu primera compra con un <span>10% de DESCUENTO</span>
          </p>
          <h3 className={style.title}>Nuestros platos más buscados</h3>
          <div className={style.products}>
            <article className={style.product}>
              <div className={style.image}>
                <Image
                  src={Arepa1}
                  alt='arepa'
                  width={150}
                  height={150}
                  objectFit
                />
              </div>
              <div className={style.info}>
                <div className={style.headerInfo}>
                  <h2>Arepa Peluda</h2>
                  <p>
                    Precio: <span>7,80€</span>
                  </p>
                </div>
                <p>
                  El arroz chino venezolano original en el mundo debido a su
                  original en el mundo debido a su...
                </p>
              </div>
            </article>
            <article className={style.product}>
              <div className={style.image}>
                <Image
                  src={Arepa1}
                  alt='arepa'
                  width={150}
                  height={150}
                  objectFit
                />
              </div>
              <div className={style.info}>
                <div className={style.headerInfo}>
                  <h2>Arepa Peluda</h2>
                  <p>
                    Precio: <span>7,80€</span>
                  </p>
                </div>
                <p>
                  El arroz chino venezolano original en el mundo debido a su
                  original en el mundo debido a su...
                </p>
              </div>
            </article>
            <article className={style.product}>
              <div className={style.image}>
                <Image
                  src={Arepa1}
                  alt='arepa'
                  width={150}
                  height={150}
                  objectFit
                />
              </div>
              <div className={style.info}>
                <div className={style.headerInfo}>
                  <h2>Arepa Peluda</h2>
                  <p>
                    Precio: <span>7,80€</span>
                  </p>
                </div>
                <p>
                  El arroz chino venezolano original en el mundo debido a su
                  original en el mundo debido a su...
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
