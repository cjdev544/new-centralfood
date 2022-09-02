import Footer from '../Footer'
import Header from '../Header'

export default function BasicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* footer */}
      <Footer />
    </>
  )
}
