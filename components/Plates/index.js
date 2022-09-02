import Image from 'next/image'

import Arepa1 from '../../public/arepa1.jpg'
import style from './Plates.module.css'

export default function Plates() {
  return (
    <section className={style.homePlates}>
      <div className={style.opacity}>
        <div className={style.background}>
          <h2 className={style.title}>Rolls Tempura</h2>
          <div className={style.products}>
            <article className={style.product}>
              <div className={style.image}>
                <Image src={Arepa1} alt='arepa' width={100} height={100} />
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
                <Image src={Arepa1} alt='arepa' width={100} height={100} />
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
                <Image src={Arepa1} alt='arepa' width={100} height={100} />
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
