import { Suspense } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { getProducts, getDataHomepage, getRestaurants } from '../services/data'
import SubscribeForm from '../components/SubscribeForm'

const Hero = dynamic(() => import('../components/Hero'), { suspense: true })
const HomePlates = dynamic(() => import('../components/HomePlates'), {
  suspense: true,
})
const About = dynamic(() => import('../components/About'), { suspense: true })
const HomeSeparator = dynamic(() => import('../components/HomeSeparator'), {
  suspense: true,
})
const Restaurants = dynamic(() => import('../components/Restaurants'), {
  suspense: true,
})
export default function Home({ products, restaurants, dataHome }) {
  return (
    <>
      <Head>
        <title>CentralFoodMalaga</title>
        <meta
          name='description'
          content='Restaurante venezolano, comida internacional con sabor a Venezuela. Seis restaurantes, seis sabores. SushiGuay: restaurante de comida japonesa, GuayWok: restaurante de comida china, Con sabor a casita: restaurante de comida venezolana, Hamburguesería Venezuela: restaurante de comida americana, Pokes Guay> restaurante de comida hawaiana, DonBurrito: restaurante de comida mexicana'
        />
      </Head>

      <main>
        <Suspense fallback={`Cargando...`}>
          <Hero />
        </Suspense>
        <SubscribeForm />
        <Suspense fallback={`<h2>Platos mas pedidos</h2>`}>
          <HomePlates
            products={products}
            restaurants={restaurants}
            dataHome={dataHome[0]}
          />
        </Suspense>
        <Suspense fallback={`<h2>Quienes somos</h2>`}>
          <About />
        </Suspense>
        <Suspense
          fallback={`<h3>Comida internacional en Málaga
                      con sabor a
                      Venezuela</h3>`}
        >
          <HomeSeparator />
        </Suspense>
        <Suspense fallback={`<h2>Nuestros restaurantes</h2>`}>
          <Restaurants />
        </Suspense>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  const restaurants = await getRestaurants()
  const dataHome = await getDataHomepage()

  return {
    props: { products, restaurants, dataHome },
  }
}
