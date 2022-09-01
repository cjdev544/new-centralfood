import Image from 'next/image'

import Arepa2 from '../../public/arepa2.jpg'
import Cachapa from '../../public/cachapa.jpg'
import style from './About.module.css'

export default function About() {
  return (
    <section className={style.about}>
      <h3>Quienes somos</h3>
      <div className={style.img1}>
        <Image src={Arepa2} alt='Arepa' width={300} height={300} />
      </div>
      <div className={style.img2}>
        <Image src={Cachapa} alt='Cachapa' width={300} height={300} />
      </div>
      <div className={style.info}>
        <p>
          Hola!!! que gusto nos da tenerte de visita en busca de un buen sushi a
          domicilio en Málaga… pues estas en el lugar indicado, donde probaras
          sabores que te encantaran, aprovechamos este privilegio para
          presentarnos somos un emprendimiento joven y este oficio paso de ser
          nuestro hobby amantes de la comida japonesa a una realidad, esto
          comenzó en noviembre del 2019 Cuando de tanto buscar un rico sushi en
          tempura era casi misión imposible o un arroz frito como el de
          Venezuela y woow nada, muy rico sí!, pero allí faltaba algo… un buen
          fin de semana una amiga me llama y me dice; Jennifer es posible que tu
          esposo nos haga sushi para una pequeña quedada yo le respondí que sí,
          y compramos los ingredientes al llegar el día al que mi amiga invita a
          varios de sus conocidos, vaya sorpresa la nuestra en esa reunión
          estaban varios dueños de locales que al pasar la velada después de
          servir el sushi, donde Gabriel mi esposo se destacó y preparo su best
          seller el Plátano Roll con salmón en tempura su salsa de anguila y sus
          roles crocantes en tempura como el Tiger Roll yo prepare arroz frito a
          nuestro estilo venezolano, teníamos poco tiempo de estar aquí en
          Málaga por ende no comprendíamos muchas palabras!...
        </p>
      </div>
    </section>
  )
}
