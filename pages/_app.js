import Link from 'next/link'
import TagManager from 'react-gtm-module'
import CookieConsent from 'react-cookie-consent'

import AuthState from '../context/auth/authState'
import CartState from '../context/cart/cartState'
import AlertState from '../context/alerts/alertsState'
import BasicLayout from '../components/layouts/BasicLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const handleAcceptCookie = () => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID })
  }

  return (
    <AuthState>
      <CartState>
        <AlertState>
          <BasicLayout>
            <Component {...pageProps} />
            <CookieConsent
              enableDeclineButton
              onAccept={handleAcceptCookie}
              buttonText='Aceptar'
              declineButtonText='Rechazar'
            >
              Esta página web utiliza cookies para analizar de forma anónima y
              estadística el uso que haces de la web, mejorar los contenidos y
              tu experiencia de navegación. Para más información accede a la{' '}
              <Link href='politica-cookies' prefetch={false}>
                <a style={{ color: 'orange' }}>Política de Cookies</a>
              </Link>
            </CookieConsent>
          </BasicLayout>
        </AlertState>
      </CartState>
    </AuthState>
  )
}

export default MyApp
