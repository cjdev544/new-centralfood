import Link from 'next/link'
import { useRouter } from 'next/router'

import useAuth from '../../hooks/useAuth'
import style from './NavBar.module.css'

export default function NavBar() {
  const { authUser } = useAuth()
  const router = useRouter()

  const currentPath = router.pathname

  return (
    <nav className={style.navBar}>
      <ul className={style.menu}>
        <li
          style={
            currentPath === '/'
              ? {
                  color: '#363636',
                  fontWeight: 'bold',
                  borderBottom: '2px solid #363636',
                }
              : { fontWeight: 'normal' }
          }
        >
          <Link href='/' prefetch={false}>
            <a>Inicio</a>
          </Link>
        </li>
        <li
          style={
            currentPath === '/restaurantes'
              ? {
                  color: '#363636',
                  fontWeight: 'bold',
                  borderBottom: '2px solid #363636',
                }
              : { fontWeight: 'normal' }
          }
        >
          <Link href='/restaurantes' prefetch={false}>
            <a>Restaurantes</a>
          </Link>
        </li>
        {authUser && (
          <li
            style={
              currentPath === '/pedidos'
                ? {
                    color: '#363636',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #363636',
                  }
                : { fontWeight: 'normal' }
            }
          >
            <Link href='/pedidos' prefetch={false}>
              <a>Mis pedidos</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
