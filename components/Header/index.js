import { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import useOnclickOutside from 'react-cool-onclickoutside'
import { FaCartPlus } from 'react-icons/fa'

const FormModal = dynamic(() => import('../modals/FormModal'), {
  suspense: true
})
import useAuth from '../../hooks/useAuth'
import useFormModal from '../../hooks/useFormModal'
import Auth from '../Auth'
import Logo from '../../public/centralfood.svg'
// import Logo from '../../public/gorro.png'
// import Logo from '../../public/logoCentralValentin.png'
import useLocalStorage from '../../hooks/useLocalStorage'
import NavBar from '../NavBar'
import style from './Header.module.css'

export default function Header() {
  const { authUser, logout } = useAuth()
  const { cartProducts } = useLocalStorage()
  const { openModal, setOpenModal } = useFormModal()
  const [showOptions, setShowOptions] = useState(false)
  const [initialsName, setInitialsName] = useState('Pf')

  useEffect(() => {
    if (authUser && !authUser?.photoURL) {
      let initialsNames
      if (authUser?.displayName) {
        const separateName = authUser.displayName.split(' ')
        initialsNames = separateName[0].at(0) + separateName[1].at(0)
        setInitialsName(initialsNames.toUpperCase())
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
        <Link href='/' prefetch={false}>
          <a>
            <div className={style.logo}>
              <Image
                src={Logo}
                alt='Central Food logo'
                //width={143} navidad
                //height={97} navidad
                // width={100}
                // height={80}
                width={120}
                height={90}
                priority={true}
              />
            </div>
          </a>
        </Link>

        {/* Menu */}
        <div className={style.firstMenu}>
          <NavBar />
        </div>

        {/* Profile */}
        <div className={style.cartSide}>
          <Link href='/carrito' prefetch={false}>
            <a>
              <div className={style.cartIcon}>
                <FaCartPlus className={style.cart} />
                {cartProducts && (
                  <span
                    style={
                      !cartProducts?.length
                        ? { display: 'none' }
                        : { color: '#fff' }
                    }
                  >
                    {cartProducts?.length}
                  </span>
                )}
              </div>
              <span className={style.hidden}>carrito de compras</span>
            </a>
          </Link>
          {!authUser && (
            <span className={style.auth} onClick={() => setOpenModal(true)}>
              INICIO / REGISTRO
            </span>
          )}
          {authUser && (
            <div
              ref={ref}
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
                className={style.options}
                style={
                  showOptions
                    ? { opacity: '1', top: '5rem' }
                    : { opacity: '0', top: '-10rem' }
                }
              >
                <Link href='/cuenta' prefetch={false}>
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
      <div className={style.secundMenu}>
        <NavBar />
      </div>
      {openModal && (
        <Suspense fallback={''}>
          <FormModal
            setOpenModal={setOpenModal}
            contentModal={<Auth setOpenModal={setOpenModal} />}
          />
        </Suspense>
      )}
    </header>
  )
}
