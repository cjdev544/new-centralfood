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
        <Link href='/'>
          <a>
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
                      color: '#363636',
                      fontWeight: 'bold',
                      borderBottom: '2px solid #363636',
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
                        color: '#363636',
                        fontWeight: 'bold',
                        borderBottom: '2px solid #363636',
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
  )
}
