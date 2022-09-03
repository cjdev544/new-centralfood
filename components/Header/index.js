import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaCartPlus } from 'react-icons/fa'

import useFormModal from '../../hooks/useFormModal'
import FormModal from '../modals/FormModal'
import Auth from '../Auth'
import Logo from '../../public/central-food.svg'
import style from './Header.module.css'

export default function Header() {
  const router = useRouter()
  const currentPath = router.pathname

  const { openModal, setOpenModal } = useFormModal()

  return (
    <header className={style.headerContainer}>
      <div className={`container ${style.header}`}>
        {/* Logo */}
        <Link href='/'>
          <a>
            <div className={style.logo}>
              <Image
                src={Logo}
                alt='Central Food logo'
                width={100}
                height={100}
              />
            </div>
          </a>
        </Link>

        {/* Menu */}
        <nav className={style.nav}>
          <ul className={style.menu}>
            <Link href='/'>
              <a>
                <li
                  style={
                    currentPath === '/'
                      ? {
                          color: '#ff5400',
                          fontWeight: 'bold',
                        }
                      : { fontWeight: 'normal' }
                  }
                >
                  Inicio
                </li>
              </a>
            </Link>
            <Link href='/restaurantes'>
              <a>
                <li
                  style={
                    currentPath === '/restaurantes'
                      ? {
                          color: '#ff5400',
                          fontWeight: 'bold',
                        }
                      : { fontWeight: 'normal' }
                  }
                >
                  Restaurantes
                </li>
              </a>
            </Link>
            <Link href='/pedidos'>
              <a>
                <li
                  style={
                    currentPath === '/pedidos'
                      ? {
                          color: '#ff5400',
                          fontWeight: 'bold',
                        }
                      : { fontWeight: 'normal' }
                  }
                >
                  Mis pedidos
                </li>
              </a>
            </Link>
          </ul>
        </nav>

        {/* Profile */}
        <div className={style.cartSide}>
          <div className={style.cartIcon}>
            <FaCartPlus className={style.cart} />
            <span>2</span>
          </div>
          <div className={style.profile} onClick={() => setOpenModal(true)}>
            <Image src={Logo} alt='Central Food logo' width={50} height={50} />
          </div>
        </div>
      </div>
      {openModal && (
        <FormModal setOpenModal={setOpenModal} contentModal={<Auth />} />
      )}
    </header>
  )
}
