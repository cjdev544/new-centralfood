import Head from 'next/head'
import CarPage from '../components/CarPage'

export default function Car({ addresses }) {
  return (
    <>
      <Head>
        <title>Carrito | CentralFoodMalaga</title>
        <meta
          name='description'
          content='Restaurante venezolano, comida internacional con sabor a Venezuela. Seis restaurantes, seis sabores. SushiGuay: restaurante de comida japonesa, GuayWok: restaurante de comida china, Con sabor a casita: restaurante de comida venezolana, Hamburguesería Venezuela: restaurante de comida americana, Pokes Guay> restaurante de comida hawaiana, DonBurrito: restaurante de comida mexicana'
        />
      </Head>
      <main>
        <CarPage addresses={addresses} />
      </main>
    </>
  )
}
