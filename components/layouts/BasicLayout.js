import useAuth from '../../hooks/useAuth'
import Footer from '../Footer'
import Header from '../Header'

export default function BasicLayout({ children }) {
  useAuth()

  return (
    <>
      <Header />
      {children}
      {/* footer */}
      <Footer />
    </>
  )
}
