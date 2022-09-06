import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useOnclickOutside from 'react-cool-onclickoutside'
import { FaCartPlus } from 'react-icons/fa'

import useAuth from '../../hooks/useAuth'
import useFormModal from '../../hooks/useFormModal'
import FormModal from '../modals/FormModal'
import Auth from '../Auth'
import Logo from '../../public/central-food.svg'
import style from './Header.module.css'

export default function Header() {
  const router = useRouter()
  const currentPath = router.pathname

  const { authUser, logout } = useAuth()
  const { openModal, setOpenModal } = useFormModal()
  const [showOptions, setShowOptions] = useState(false)
  const [initialsName, setInitialsName] = useState(null)

  useEffect(() => {
    if (authUser && !authUser?.photoURL) {
      let initialsNames
      if (authUser?.displayName) {
        const separateName = authUser.displayName.split(' ')
        initialsNames = separateName[0].at(0) + separateName[1].at(0)
        setInitialsName(initialsNames.toUpperCase())
      } else {
        setInitialsName('Pf')
      }
    }
  }, [authUser])

  const ref = useOnclickOutside(() => {
    setShowOptions(false)
  })

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
            {authUser && (
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
            )}
          </ul>
        </nav>

        {/* Profile */}
        <div className={style.cartSide}>
          <Link href='/carrito'>
            <a>
              <div className={style.cartIcon}>
                <FaCartPlus className={style.cart} />
                <span>2</span>
              </div>
            </a>
          </Link>
          {!authUser && (
            <span className={style.auth} onClick={() => setOpenModal(true)}>
              INICIO / REGISTRO
            </span>
          )}
          {authUser && (
            <div
              className={style.profile}
              onClick={() => setShowOptions(!showOptions)}
            >
              {authUser?.photoURL && (
                <Image
                  src={authUser.photoURL}
                  alt='Opciones de usuario'
                  width={50}
                  height={50}
                  className={style.photoUser}
                />
              )}
              {!authUser?.photoURL && (
                <div className={style.noPhoto}>
                  <span>{initialsName}</span>
                </div>
              )}
              <div
                ref={ref}
                className={style.options}
                style={showOptions ? { right: '1rem' } : { right: '-15rem' }}
              >
                <Link href='/cuenta'>
                  <a>
                    <span>Perfil de usuario</span>
                  </a>
                </Link>
                <span onClick={logout}>Cerrar sesión</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <FormModal
          setOpenModal={setOpenModal}
          contentModal={<Auth setOpenModal={setOpenModal} />}
        />
      )}
    </header>
  )
}
