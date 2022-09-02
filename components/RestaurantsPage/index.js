import Image from 'next/image'
import Link from 'next/link'

import GuayWok from '../../public/logo-guaywok.svg'
import SushiGuay from '../../public/logo-sushi.svg'
import HamVzl from '../../public/logo-hamburgueseria.svg'
import Sabor from '../../public/logo-sabor.svg'
import style from './RestaurantsPage.module.css'

export default function RestaurantsPage() {
  return (
    <div className={style.restaurants}>
      <h1>Nuestros Restaurantes</h1>
      <div className={style.logos}>
        <Link href='/sushiguay'>
          <a>
            <div className={style.restaurant}>
              <Image
                src={SushiGuay}
                alt='logo SushiGuay'
                width={130}
                height={130}
                className={style.restaurant}
              />
              <h2>SushiGuay</h2>
              <span>Comida Japonesa</span>
            </div>
          </a>
        </Link>
        <Link href='/guaywok'>
          <a>
            <div className={style.restaurant}>
              <Image
                src={GuayWok}
                alt='logo GuayWok'
                width={130}
                height={130}
                className={style.restaurant}
              />
              <h2>GuayWok</h2>
              <span>Comida China</span>
            </div>
          </a>
        </Link>
        <Link href='/sabor-casita'>
          <a>
            <div className={style.restaurant}>
              <Image
                src={Sabor}
                alt='logo Con sabor a casita'
                width={130}
                height={130}
                className={style.restaurant}
              />
              <h2>Con Sabor a Casita</h2>
              <span>Comida Latinoamericana</span>
            </div>
          </a>
        </Link>
        <Link href='/hamburgueseria-venezuela'>
          <a>
            <div className={style.restaurant}>
              <Image
                src={HamVzl}
                alt='logo hamburguesería Venezuela'
                width={130}
                height={130}
                className={style.restaurant}
              />
              <h2>Hamburguesería VZLA</h2>
              <span>Hamburguesas, Perros, Pepitos y Camperos</span>
            </div>
          </a>
        </Link>
      </div>
      <Link href='/postres-bebidas'>
        <a className={style.drinks}>
          <div className={style.button}>
            <h2>Postres y Bebidas</h2>
          </div>
        </a>
      </Link>
    </div>
  )
}
