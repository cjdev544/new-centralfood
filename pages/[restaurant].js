import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getProducts, getRestaurants } from '../services/data'
import Plates from '../components/Plates'
import Seo from '../components/Seo'
import RestaurantPage from '../components/RestaurantPage'

export default function Restaurant({ products, restaurants }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState(null)
  const [productsCategory, setProductCategory] = useState([])

  const router = useRouter()
  const path = router.query.restaurant

  const restaurant = restaurants.find((restaurant) => restaurant.page === path)

  const productsRestaurant = products.filter(
    (product) => product.restaurante === path
  )

  useEffect(() => {
    const restaurant = {
      sushiguay: 'Sushi Guay',
      guaywok: 'Guay Wok',
      'sabor-casita': 'Con Sabor a Casita',
      'hamburgueseria-venezuela': 'La Hamburguesería VZLA',
      'postres-bebidas': 'Postres y Bebidas',
    }
    const desc = {
      sushiguay:
        'Sushi Guay, restaurante de comida japonesa, sushi, maki, temaki, rolls tempura, rolls semitempura, ensaladas y platos combinados.',
      guaywok:
        'Guay Wok, restaourante de comida china, arroz, lumpia, pollo agridulce, chopsuey y platos combinados.',
      'sabor-casita':
        'Con Sabor a Casita, restaurante de comida latína, empanadas ,arepas, tostones playeros, cachapas, camperos y pabellon.',
      'hamburgueseria-venezuela':
        'Hamburguesería con el mejor sabor Venezolano, Hamburguesas, Perros calientes, Pepitos y Camperos',
      'postres-bebidas':
        'Postres y Bebidas, acompaña tu comida con la variedad de bebidas y postres que tenemos para ti.',
    }
    setTitle(restaurant[path] || 'Central Food')
    setDescription(
      desc[path] ||
        'Central Food, porque en la variedad esta el gusto. Comida venezolana en Málaga. Hamburguesas venezolana, comida china venezolana, sushi venezolano, comida casera venezolana'
    )
  }, [path])

  useEffect(() => {
    if (!category) {
      const products = productsRestaurant.filter(
        (product) => product.categoria === restaurant.categories[0]
      )
      setCategory(restaurant.categories[0])
      setProductCategory(products)
    } else {
      const products = productsRestaurant.filter(
        (product) => product.categoria === category
      )
      setProductCategory(products)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  return (
    <>
      <Seo title={title} description={description} />
      <main style={{ overflow: 'hidden' }}>
        <RestaurantPage
          restaurant={restaurant}
          category={category}
          setCategory={setCategory}
        />
        <Plates
          category={category}
          productsCategory={productsCategory}
          products={products}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const products = await getProducts()
  const restaurants = await getRestaurants()

  return {
    props: { products, restaurants }, // will be passed to the page component as props
  }
}
