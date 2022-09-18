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
      {isOpen === false && (
        <div className={style.isOpen}>
          <span>El restaurante se encuentra cerrado en estod momentos</span>
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
    </>
  )
}
