import { useEffect } from 'react'
import Head from 'next/head'
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
    <>
      <Head>
        <title>Cuenta | CentralFoodMalaga</title>
        <meta
          name='description'
          content='Restaurante venezolano, comida internacional con sabor a Venezuela. Seis restaurantes, seis sabores. SushiGuay: restaurante de comida japonesa, GuayWok: restaurante de comida china, Con sabor a casita: restaurante de comida venezolana, Hamburguesería Venezuela: restaurante de comida americana, Pokes Guay> restaurante de comida hawaiana, DonBurrito: restaurante de comida mexicana'
        />
      </Head>
      <main>
        <AccountPage />
      </main>
    </>
  )
}
