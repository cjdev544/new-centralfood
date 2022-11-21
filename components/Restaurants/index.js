import Image from 'next/image'
import Link from 'next/link'

import SushiGuay from '../../public/logo-sushi.svg'
import GuyWok from '../../public/logo-guaywok.svg'
import SaborCasita from '../../public/logo-sabor.svg'
import Hamburguesería from '../../public/logo-hamburgueseria.svg'
import style from './Restaurants.module.css'

export default function Restaurants() {
  return (
    <section className={style.restaurants}>
      <p className={style.titleSection}>Cinco restaurantes, Cinco estilos</p>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nisi lectus, aliquet a malesuada vitae, semper vitae
                nibh. Proin convallis ornare ipsumae, tempus id nunc. Aliquam
                molestie nunc quis eros commodo, finibus cursus dui ultrices. In
                risus sapien, viverra ac sem id, facilisis tincidunt orci.
                Mauris pulvinar, arcu quis varius tincidunt, velit sem hendrerit
                velit, id interdum nisl lacus id ex.
              </p>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nisi lectus, aliquet a malesuada vitae, semper vitae
                nibh. Proin convallis ornare ipsum, eget lobortis velit tempus
                nec. Proin pretium porta purus sit amet luctus. Pellentesque
                aliquet consectetur malesuada. Etiam nec finibus tellus.
                Suspendisse ipsum enim, accumsan at magna congue, gravida porta
                magna. Nullam ipsum ipsum, aliquet at fermentum vitae, tempus id
                nunc. Aliquam molestie nunc quis eros commodo,tincidunt, velit
                sem hendrerit velit, id interdum nisl lacus id ex.
              </p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nisi lectus, aliquet a malesuada vitae, semper vitae
                nibh. Proin convallis ornare ipsum, eget lobortis velit tempus
                nec. Proin pretium porta purus sit amet luctus. Pellentesque
                aliquet consectetur malesuada. Etiam nec finibus tellus.
                Suspendisse ipsum enim, accumsan at magna congue, gravida porta
                magna. Nullam ipsum ipsum, aliquet at fer
              </p>
            </div>
          </a>
        </Link>
      </div>
    </section>
  )
}
