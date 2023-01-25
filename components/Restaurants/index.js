import Image from 'next/image'
import Link from 'next/link'

import SushiGuay from '../../public/logo-sushi.svg'
import GuyWok from '../../public/logo-guaywok.svg'
import SaborCasita from '../../public/logo-sabor.svg'
import Hamburguesería from '../../public/logo-hamburgueseria.svg'
import Burrito from '../../public/logo-burrito.png'
import Poke from '../../public/logo-pokes.svg'
import style from './Restaurants.module.css'

export default function Restaurants() {
  return (
    <section className={style.restaurants}>
      <p className={style.titleSection}>Seis restaurantes, Seis estilos</p>
      <div className={style.grid}>
        {/* SushiGuay */}
        <Link href='/sushiguay' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <div className={style.title}>
                <Image
                  src={SushiGuay}
                  alt='Logo SushiGuay'
                  width={100}
                  height={100}
                />
                <h2>SushiGuay</h2>
              </div>
              <p>
                SushiGuay un restaurante japonés en Málaga. Ofrecemos gran
                variedad de sushi, como los Maki, Sushiroll, Rolls Tempura,
                Rolls Semi Tempura y varios combos, puedes ver nuestro menú por
                apartados dando click en cada sección para verlos en detalle.
              </p>
              <p>SushiGuay tu sushi en Málaga.</p>
            </div>
          </a>
        </Link>

        {/* GuayWok */}
        <Link href='/guaywok' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <div className={style.title}>
                <Image
                  src={GuyWok}
                  alt='Logo GuyWok'
                  width={100}
                  height={100}
                />
                <h2>GuayWok</h2>
              </div>
              <div>
                <p>
                  GuyWok un restaurante de comida china en Málaga. Ofrecemos un
                  menú variado de comida cantonesa, como el típico arroz chino,
                  lumpia, chop suey, pollo agridulce, upon noodles y noodles con
                  o sin picante como también platos combinados, puedes ver
                  nuestro menú por apartados dando click en cada sección para
                  verlos en detalle.
                </p>
                <p>GuayWok tu comida china en Málaga.</p>
              </div>
            </div>
          </a>
        </Link>

        {/* Con sabor a Casita */}
        <Link href='/sabor-casita' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <div className={style.title}>
                <Image
                  src={SaborCasita}
                  alt='Logo Con sabor a Casita'
                  width={100}
                  height={100}
                />
                <h2>Con sabor a Casita</h2>
              </div>
              <div>
                <p>
                  Con sabor a casita, comida casera venezolana en Málaga. Si
                  buscas ese rico sabor de la comida casera como las empanadas
                  venezolanas, arepas venezolanas, el famoso pabellón criollo,
                  cachapas y otros platos con ese toque de hecho en casa, estás
                  en el lugar indicado. Puedes ver nuestro menú por apartados
                  dando click en cada sección para verlos en detalle.
                </p>
                <p>Restaurante venezolano en Málaga</p>
              </div>
            </div>
          </a>
        </Link>

        {/* Hamburguesería Venezuela */}
        <Link href='/hamburgueseria-venezuela' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <div className={style.title}>
                <Image
                  src={Hamburguesería}
                  alt='Logo Con sabor a Casita'
                  width={100}
                  height={100}
                />
                <h2>Hamburguesería Venezuela</h2>
              </div>
              <p>
                Hamburguesería VZLA, comida americana con sabor a Venezuela en
                Málaga. Si buscas ese rico sabor de las hamburguesas
                venezolanas, perros calientes y camperos, estás en el lugar
                indicado. Puedes ver nuestro menú por apartados dando click en
                cada sección para verlos en detalle.
              </p>
              <p>Hamburgusas en Málaga con sabor a Venezuela</p>
            </div>
          </a>
        </Link>

        {/* Pokes Guay */}
        <Link href='/pokes-guay' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <div className={style.title}>
                <Image
                  src={Poke}
                  alt='Logo Pokes Guay'
                  width={100}
                  height={100}
                />
                <h2>Pokes Guay</h2>
              </div>
              <p>
                Pokes Guay, comida hawaiana con sabor a Venezuela en Málaga. En
                este restaurante te ofrecemos Pokes Bowls fríos y calientes, con
                la posibilidad de que tú mismo lo puedas armar a tu gusto.
                Puedes ver nuestro menú por apartados dando click en cada
                sección para verlos en detalle.
              </p>
              <p>Poeke hawaianos en Málaga con sabor a Venezuela</p>
            </div>
          </a>
        </Link>

        {/* Don Burrito */}
        <Link href='/don-burrito' prefetch={false}>
          <a>
            <div className={style.restaurant}>
              <div className={style.title}>
                <Image
                  src={Burrito}
                  alt='Logo Don Burrito'
                  width={100}
                  height={100}
                />
                <h2>Don Burrito</h2>
              </div>
              <p>
                Don Burrito es un restaurante Mexicano en Málaga. Ofrecemos
                platos típicos de México, como variedad de burritos mexicanos, y
                bolls con el típico sabor de la cocina mexicana, puedes ver
                nuestro menú por apartados dando click en cada sección para
                verlos en detalle.
              </p>
              <p>Comida mexicana en Málaga con sabor a Venezuela</p>
            </div>
          </a>
        </Link>
      </div>
    </section>
  )
}
