import Image from 'next/image'

import Arepa2 from '../../public/arepa2.jpg'
import Cachapa from '../../public/cachapa.jpg'
import style from './About.module.css'

export default function About() {
  return (
    <section className={style.about}>
      <h3>Quienes somos</h3>
      <div className={style.img1}>
        <Image src={Arepa2} alt='Arepa' width={300} height={300} quality={30} />
      </div>
      <div className={style.img2}>
        <Image
          src={Cachapa}
          alt='Cachapa'
          width={300}
          height={300}
          quality={30}
        />
      </div>
      <div className={style.info}>
        <p>
          Hola y bienvenido a CentralFood Málaga. Somos una pareja de
          venezolanos con gran pasión y entusiasmo por la comida y sus
          diferentes sabores. ¡Si! Somos un restaurante venezolano en Málaga,
          pero, traemos la comida internacional fusionada con nuestro toque
          caribeño para crear una explocion de sabores. Ofrecemos comida
          internacional con sabor a Venezuela, seis restaurantes, cada uno con
          el sabor característico de su lugar de origen incorporando nuestra
          firma auténtica para sorprender tu paladar, como dice nuestro eslogan:
          “En la variedad está el gusto”.
        </p>
        <p>
          Puedes disfrutar de nuestro menú en un local acogedor, atendido por
          nosotros, donde nuestra prioridad será tu comodidad, bienestar y
          disfrute, ó si prefieres degustar una rica comida en la comodidad de
          tu hogar, ofrecemos entregas a domicilio. Revisa el menu de todos
          nuestros restaurantes, elije lo que quieras y pasala Guay.
        </p>
      </div>
    </section>
  )
}
