import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import useAuth from '../hooks/useAuth'
import AccountPage from '../components/AccountPage'

export default function Account() {
  const router = useRouter()
  const { authUser } = useAuth()

  useEffect(() => {
    if (!authUser?.uid) {
      router.replace('/')
      toast.warning('Inicia sesión para entrar en tu cuenta')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser?.uid])

  return (
    <main>
      <AccountPage />
    </main>
  )
}
