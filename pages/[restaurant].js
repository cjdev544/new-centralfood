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
    setTitle(restaurant?.name || 'Central Food')
    setDescription(
      restaurant?.description ||
        'Central Food, porque en la variedad esta el gusto. Comida venezolana en Málaga. Hamburguesas venezolana, comida china venezolana, sushi venezolano, comida casera venezolana'
    )
  }, [path, restaurant])

  useEffect(() => {
    if (!category) {
      const products = productsRestaurant.filter(
        (product) => product.categoria === restaurant.categories[0]
      )
      setCategory(restaurant?.categories[0])
      setProductCategory(products)
    } else {
      const products = productsRestaurant.filter(
        (product) => product.categoria === category
      )
      setProductCategory(products)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])
  console.log(path, restaurants)
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
          restaurant={restaurant}
        />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const allProducts = await getProducts()
  const restaurants = await getRestaurants()

  const products = allProducts?.filter((product) => product.disponible)

  return {
    props: { products, restaurants }, // will be passed to the page component as props
  }
}
