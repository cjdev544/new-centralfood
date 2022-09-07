import useAuth from '../../hooks/useAuth'
import Header from '../Header'
import Footer from '../Footer'

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
