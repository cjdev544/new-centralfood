import { ToastContainer } from 'react-toastify'

import BasicLayout from '../components/layouts/BasicLayout'
import AuthState from '../context/auth/authState'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
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
    </AuthState>
  )
}

export default MyApp
