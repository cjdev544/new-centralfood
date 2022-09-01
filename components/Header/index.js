import Image from 'next/image'
import { FaCartPlus } from 'react-icons/fa'

import Logo from '../../public/central-food.svg'
import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={`container ${style.header}`}>
        {/* Logo */}
        <div className={style.logo}>
          <Image src={Logo} alt='Central Food logo' width={100} height={100} />
        </div>

        {/* Menu */}
        <nav className={style.nav}>
          <ul className={style.menu}>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Mis pedidos</li>
          </ul>
        </nav>

        {/* Profile */}
        <div className={style.cartSide}>
          <div className={style.cartIcon}>
            <FaCartPlus className={style.cart} />
            <span>2</span>
          </div>
          <div className={style.profile}>
            <Image src={Logo} alt='Central Food logo' width={50} height={50} />
          </div>
        </div>
      </div>
    </header>
  )
}
