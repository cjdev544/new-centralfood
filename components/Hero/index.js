import Image from 'next/image'
import Link from 'next/link'

import Moto from '../../public/moto.svg'
import CentralFood from '../../public/central-food2.svg'
import GuayWok from '../../public/logo-guaywok.svg'
import SushiGuay from '../../public/logo-sushi.svg'
import HamVzl from '../../public/logo-hamburgueseria.svg'
import Sabor from '../../public/logo-sabor.svg'
import style from './Hero.module.css'

export default function Hero() {
  return (
    <div className={`container ${style.hero}`}>
      {/* LeftSide */}
      <div className={style.leftSide}>
        <div className={style.moto}>
          <h2>Comida a domicilio en Málaga</h2>
          <div className={style.motoIcon}>
            <Image src={Moto} alt='delivery image' width={35} height={35} />
          </div>
        </div>
        <div className={style.title}>
          <h1>
            CentralFood <span>Málaga</span>
          </h1>
          <span>En la variedad esta el gusto</span>
        </div>
        <p className={style.phone}>
          También puedes hacer tus pedidos al número: 649-71-88-31
        </p>
      </div>

      {/* RightSide */}
      <div className={style.rightSide}>
        <div className={style.images}>
          <Image
            src={CentralFood}
            alt='Logo CentralFood'
            width={300}
            height={300}
          />
          <p className={style.styles}>
            Cuatro restaurantes, Cuatro estilos.
            <span>Dale click en el logo y ve todos sus platos</span>
          </p>
          <div className={style.restaurants}>
            <Link href='/sushiguay'>
              <a>
                <Image
                  src={SushiGuay}
                  alt='logo SushiGuay'
                  width={130}
                  height={130}
                  className={style.restaurant}
                />
              </a>
            </Link>
            <Link href='/guaywok'>
              <a>
                <Image
                  src={GuayWok}
                  alt='logo GuayWok'
                  width={130}
                  height={130}
                  className={style.restaurant}
                />
              </a>
            </Link>
            <Link href='/sabor-casita'>
              <a>
                <Image
                  src={Sabor}
                  alt='logo Con sabor a casita'
                  width={130}
                  height={130}
                  className={style.restaurant}
                />
              </a>
            </Link>
            <Link href='/hamburgueseria-venezuela'>
              <a>
                <Image
                  src={HamVzl}
                  alt='logo hamburguesería Venezuela'
                  width={130}
                  height={130}
                  className={style.restaurant}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
