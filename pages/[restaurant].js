import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getProducts, getRestaurants } from '../services/data'
import RestaurantPage from '../components/RestaurantPage'

export default function Restaurant({ products, restaurants }) {
  const [category, setCategory] = useState(null)
  const [productsCategory, setProductCategory] = useState([])

  const router = useRouter()
  const path = router.query.restaurant

  const restaurant = restaurants.find((restaurant) => restaurant.page === path)

  const productsRestaurant = products.filter(
    (product) => product.restaurante === path
  )

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

  return (
    <RestaurantPage
      restaurant={restaurant}
      category={category}
      setCategory={setCategory}
      productsCategory={productsCategory}
      products={products}
      restaurants={restaurants}
    />
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { restaurant: 'sushiguay' } },
      { params: { restaurant: 'guaywok' } },
      { params: { restaurant: 'sabor-casita' } },
      { params: { restaurant: 'hamburgueseria-venezuela' } },
      { params: { restaurant: 'pokes-guay' } },
      { params: { restaurant: 'don-burrito' } },
    ],
    fallback: 'blocking',
  }
}

export async function getStaticProps() {
  const allProducts = await getProducts()
  const restaurants = await getRestaurants()

  const products = allProducts?.filter((product) => product.disponible)

  return {
    props: { products, restaurants },
  }
}
