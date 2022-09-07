export const getProductsComplements = (products, product) => {
  const platesRestaurant = products.filter((element) => {
    if (element.restaurante === product.restaurante) {
      if (element.disponible) return element
    }
  })

  const extras = platesRestaurant.filter(
    (product) => product.categoria === 'Extras'
  )

  const drinksAndOthers = products.filter((product) => {
    if (product.restaurante === 'postres-bebidas') {
      if (product.disponible) return products
    }
  })

  const drinks = drinksAndOthers.filter(
    (product) => product.categoria === 'Bebidas'
  )
  const beer = drinksAndOthers.filter(
    (product) => product.categoria === 'Cervezas'
  )
  const desserts = drinksAndOthers.filter(
    (product) => product.categoria === 'Postres'
  )

  return {
    extras,
    drinks,
    beer,
    desserts,
  }
}
