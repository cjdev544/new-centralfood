import { Link, animateScroll as scroll } from 'react-scroll'
import { FaArrowCircleUp } from 'react-icons/fa'

import useData from '../../hooks/useData'
import useAuth from '../../hooks/useAuth'
import useOrders from '../../hooks/useOrders'
import Header from '../Header'
import Footer from '../Footer'
import OrderAlert from '../OrderAlert'
import style from './Layout.module.css'

export default function BasicLayout({ children }) {
  useAuth()

  const { isOpen } = useData()
  const { ordersAlert } = useOrders()

  return (
    <>
      <div id='up' />
      {isOpen === false && (
        <div className={style.isOpen}>
          <span>El restaurante se encuentra cerrado en estos momentos</span>
        </div>
      )}
      {ordersAlert?.length > 0 &&
        ordersAlert.map((order) => (
          <OrderAlert key={order?.id} order={order} />
        ))}
      <Header />
      {children}
      {/* footer */}
      <Footer />
      <Link
        className={style.arrow}
        to='up'
        smooth={true}
        offset={0}
        duration={500}
        aria-label='Ir arriba'
      >
        <FaArrowCircleUp />
      </Link>
    </>
  )
}
