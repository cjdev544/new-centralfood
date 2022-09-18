import { ToastContainer } from 'react-toastify'

import AuthState from '../context/auth/authState'
import CartState from '../context/cart/cartState'
import AlertState from '../context/alerts/alertsState'
import BasicLayout from '../components/layouts/BasicLayout'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
          </BasicLayout>
        </AlertState>
      </CartState>
    </AuthState>
  )
}

export default MyApp
