import Image from 'next/image'
import Link from 'next/link'

// import Moto from '../../public/trineo.svg'
// import CentralFood from '../../public/logo-navidad.svg'
import Moto from '../../public/moto.svg'
import CentralFood from '../../public/centralfood10.svg'
import GuayWok from '../../public/logo-guaywok.svg'
import SushiGuay from '../../public/logo-sushi.svg'
import HamVzl from '../../public/logo-hamburgueseria.svg'
import Sabor from '../../public/logo-sabor.svg'
import Pokes from '../../public/logo-pokes.svg'
import style from './Hero.module.css'

export default function Hero() {
  return (
    <div className={`container ${style.hero}`}>
      {/* LeftSide */}
      <div className={style.leftSide}>
        <div className={style.moto}>
          <h2>Comida a domicilio en Málaga</h2>
          <div className={style.motoIcon}>
            {/* <Image src={Moto} alt='delivery image' width={35} height={35} /> */}
            <Image src={Moto} alt='delivery image' width={110} height={110} />
          </div>
        </div>
        <div className={style.title}>
          <h1>
            CentralFood <span>Málaga</span>
          </h1>
          <span>En la variedad está el gusto</span>
        </div>
        <p className={style.phone}>
          También puedes hacer tus pedidos al número: 649-71-88-31
        </p>
      </div>

      {/* RightSide */}
      <div className={style.rightSide}>
        <div className={style.images}>
          <div className={style.principalImage}>
            <Image
              src={CentralFood}
              alt='Logo CentralFood'
              width={400}
              height={300}
              priority={true}
            />
          </div>
          <p className={style.styles}>
            Cinco restaurantes, Cinco estilos.
            <span>Dale click en el logo y ve todos sus platos</span>
          </p>
          <div className={style.restaurants}>
            <Link href='/sushiguay' prefetch={false}>
              <a>
                <Image
                  src={SushiGuay}
                  alt='logo SushiGuay'
                  width={100}
                  height={100}
                  className={style.restaurant}
                  priority={true}
                />
              </a>
            </Link>
            <Link href='/guaywok' prefetch={false}>
              <a>
                <Image
                  src={GuayWok}
                  alt='logo GuayWok'
                  width={100}
                  height={100}
                  className={style.restaurant}
                  priority={true}
                />
              </a>
            </Link>
            <Link href='/sabor-casita' prefetch={false}>
              <a>
                <Image
                  src={Sabor}
                  alt='logo Con sabor a casita'
                  width={100}
                  height={100}
                  className={style.restaurant}
                  priority={true}
                />
              </a>
            </Link>
            <Link href='/hamburgueseria-venezuela' prefetch={false}>
              <a>
                <Image
                  src={HamVzl}
                  alt='logo hamburguesería Venezuela'
                  width={100}
                  height={100}
                  className={style.restaurant}
                  priority={true}
                />
              </a>
            </Link>
            <Link href='/pokes-guay' prefetch={false}>
              <a>
                <Image
                  src={Pokes}
                  alt='logo Pokes Guay'
                  width={100}
                  height={100}
                  className={style.restaurant}
                  priority={true}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
