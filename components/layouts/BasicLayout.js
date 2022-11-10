import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Link, animateScroll as scroll } from 'react-scroll'
import { FaArrowCircleUp } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useData from '../../hooks/useData'
import useAuth from '../../hooks/useAuth'
import useOrders from '../../hooks/useOrders'
import style from './Layout.module.css'

const Header = dynamic(() => import('../Header'), { suspense: true })
const OrderAlert = dynamic(() => import('../OrderAlert'), { suspense: true })
const Footer = dynamic(() => import('../Footer'), { suspense: true })

export default function BasicLayout({ children }) {
  useAuth()

  const { isOpen } = useData()
  const { ordersAlert } = useOrders()

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <div id='up' />
      {isOpen === false && (
        <div className={style.isOpen}>
          <span>El restaurante se encuentra cerrado en estos momentos</span>
        </div>
      )}
      {ordersAlert?.length > 0 &&
        ordersAlert.map((order) => (
          <Suspense key={order?.id} fallback={''}>
            <OrderAlert order={order} />
          </Suspense>
        ))}
      <Suspense fallback={''}>
        <Header />
      </Suspense>
      {children}
      {/* footer */}
      <Suspense fallback={''}>
        <Footer />
      </Suspense>
      <Link
        className={style.arrow}
        to='up'
        smooth={true}
        offset={0}
        duration={500}
        rel='noreferrer noopener'
        aria-label='Ia al principio de página'
      >
        <FaArrowCircleUp />
      </Link>
    </>
  )
}
