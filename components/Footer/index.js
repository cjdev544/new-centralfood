import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaMap } from 'react-icons/fa'

import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.column}>
            <p className={style.footerTitle}>Visita nuestras redes</p>
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
            <p className={style.footerTitle}>Legales</p>
            <div className={style.legacy}>
              <Link href='/terminos-condiciones' prefetch={false}>
                <a>
                  <p>Términos y condiciones</p>
                </a>
              </Link>
              <Link href='/politica-cookies' prefetch={false}>
                <a>
                  <p>Política de cookies</p>
                </a>
              </Link>
              <Link href='/derecho-desistimiento' prefetch={false}>
                <a>
                  <p>Derecho de desistimiento</p>
                </a>
              </Link>
            </div>
          </div>
          <div className={style.column}>
            <p className={style.footerTitle}>Dirección</p>
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
              Calle Martínez Maldonado, 75, 29007 Málaga, España
              <span>Tlf: 649-71-88-31</span>
            </div>
          </div>
        </div>
        <p className={style.copy}>
          <a
            href='https://cjdev544.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            Elaborado por <span>CjDev544</span>
          </a>
          <br />
          &copy; {new Date().getFullYear()} CentralFoodMalaga
        </p>
      </div>
    </footer>
  )
}

export default Footer
