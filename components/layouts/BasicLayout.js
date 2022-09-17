import useData from '../../hooks/useData'
import useAuth from '../../hooks/useAuth'
import Header from '../Header'
import Footer from '../Footer'
import style from './Layout.module.css'

export default function BasicLayout({ children }) {
  useAuth()

  const { isOpen } = useData()
  console.log({ isOpen })
  return (
    <>
      {isOpen === false && (
        <div className={style.isOpen}>
          <span>El restaurante se encuentra cerrado en estod momentos</span>
        </div>
      )}
      <Header />
      {children}
      {/* footer */}
      <Footer />
    </>
  )
}
