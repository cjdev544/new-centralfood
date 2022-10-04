import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaMap } from 'react-icons/fa'

import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.column}>
            <h4>Visita nuestras redes</h4>
            <div className={style.icon}>
              <a
                href='https://www.facebook.com/Centralfoodmalaga'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Facebook'
              >
                <FaFacebook />
              </a>
              <a
                href='https://www.instagram.com/centralfoodmalaga/'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=+34649718831'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Whatsapp'
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className={style.column}>
            <h4>Legales</h4>
            <div className={style.legacy}>
              <Link href='/terminos-condiciones'>
                <a>
                  <p>Términos y condiciones</p>
                </a>
              </Link>
              <Link href='/politica-cookies'>
                <a>
                  <p>Política de cookies</p>
                </a>
              </Link>
              <Link href='/derecho-desistimiento'>
                <a>
                  <p>Derecho de desistimiento</p>
                </a>
              </Link>
            </div>
          </div>
          <div className={style.column}>
            <h4>Local</h4>
            <div className={style.local}>
              <a
                href='https://www.google.com/maps/place/Central+food+M%C3%A1laga/@36.7212638,-4.4411586,17z/data=!3m1!4b1!4m5!3m4!1s0xd72f73a27895f9b:0x783c668421062425!8m2!3d36.7212596!4d-4.4389589?hl=es'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Mapa'
                className={style.map}
              >
                Ver mapa
                <FaMap className={style.map} />
              </a>
              <br />
              Av Carlos Haya, con calle Francisco Rueda Perez 1, local 7 29007
              Málaga, España
              <span>Tlf: 649-71-88-31</span>
            </div>
          </div>
        </div>
        <p className={style.copy}>
          Elaborado por <span>CjDev544</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
