import Image from 'next/image'
import Link from 'next/link'

import GuayWok from '../../public/logo-guaywok.svg'
import SushiGuay from '../../public/logo-sushi.svg'
import HamVzl from '../../public/logo-hamburgueseria.svg'
import Sabor from '../../public/logo-sabor.svg'
import Poke from '../../public/logo-pokes.svg'
import Burrito from '../../public/logo-burrito.png'
import style from './RestaurantsPage.module.css'

export default function RestaurantsPage() {
  return (
    <div className={style.restaurants}>
      <h1>Nuestros Restaurantes</h1>
      <div className={style.logos}>
        <Link href='/sushiguay' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <Image
                src={SushiGuay}
                alt='logo SushiGuay'
                width={100}
                height={100}
                className={style.restaurant}
              />
              <h2>SushiGuay</h2>
              <span>Comida Japonesa</span>
            </div>
          </a>
        </Link>
        <Link href='/guaywok' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <Image
                src={GuayWok}
                alt='logo GuayWok'
                width={100}
                height={100}
                className={style.restaurant}
              />
              <h2>GuayWok</h2>
              <span>Comida China</span>
            </div>
          </a>
        </Link>
        <Link href='/sabor-casita' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <Image
                src={Sabor}
                alt='logo Con sabor a casita'
                width={100}
                height={100}
                className={style.restaurant}
              />
              <h2>Con Sabor a Casita</h2>
              <span>Comida Casera</span>
            </div>
          </a>
        </Link>
        <Link href='/hamburgueseria-venezuela' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <Image
                src={HamVzl}
                alt='logo hamburguesería Venezuela'
                width={100}
                height={100}
                className={style.restaurant}
              />
              <h2>Hamburguesería VZLA</h2>
              <span>Hamburguesas, Perros, Pepitos y Camperos</span>
            </div>
          </a>
        </Link>
        <Link href='/pokes-guay' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <Image
                src={Poke}
                alt='logo Pokes Guay'
                width={100}
                height={100}
                className={style.restaurant}
              />
              <h2>Pokes Guay</h2>
              <span>Comida Hawaiana</span>
            </div>
          </a>
        </Link>
        <Link href='/don-burrito' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <Image
                src={Burrito}
                alt='logo Don Burrito'
                width={100}
                height={100}
                className={style.restaurant}
              />
              <h2>Don Burrito</h2>
              <span>Comida Mejicana</span>
            </div>
          </a>
        </Link>
      </div>
      <Link href='/postres-bebidas' prefetch={false}>
        <a className={style.drinks}>
          <div className={style.button}>
            <h2>Postres y Bebidas</h2>
          </div>
        </a>
      </Link>
    </div>
  )
}
