// import TagManager from 'react-gtm-module'
import { ToastContainer } from 'react-toastify'
import CookieConsent from 'react-cookie-consent'

import AuthState from '../context/auth/authState'
import CartState from '../context/cart/cartState'
import AlertState from '../context/alerts/alertsState'
import BasicLayout from '../components/layouts/BasicLayout'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const handleAcceptCookie = () => {
    //   TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID })
  }

  return (
    <AuthState>
      <CartState>
        <AlertState>
          <BasicLayout>
            <Component {...pageProps} />
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar
              closeOnClick
              rtl={false}
              draggable
              pauseOnHover
            />
            <CookieConsent
              enableDeclineButton
              onAccept={handleAcceptCookie}
              buttonText='Aceptar'
              declineButtonText='Rechazar'
            >
              Este sitio web utiliza cookies para mejorar la experiencia del
              usuario.
            </CookieConsent>
          </BasicLayout>
        </AlertState>
      </CartState>
    </AuthState>
  )
}

export default MyApp
