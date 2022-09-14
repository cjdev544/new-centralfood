import { useContext, useEffect, useState } from 'react'
import { round } from 'mathjs'

import CartContext from '../context/cart/cartContext'
import { CART } from '../helpers/constants'

const useLocalStorage = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext)
  const [totalCostProducts, setTotalCostProducts] = useState(0)

  useEffect(() => {
    if (cartProducts) {
      let total = 0
      cartProducts.forEach((product) => {
        const price = round(product?.precio * product.number, 2)
        total = round(price + total, 2)
      })
      setTotalCostProducts(total)
    }
  }, [cartProducts])

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem(CART))
    setCartProducts(products)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addProductCart = (plate) => {
    const cart = JSON.parse(localStorage.getItem(CART))
    if (cart) {
      const newStorage = cart?.filter(
        (plateStorage) => plateStorage.id !== plate.id
      )
      newStorage.push(plate)

      localStorage.setItem(CART, JSON.stringify(newStorage))
      setCartProducts(newStorage)
    } else {
      localStorage.setItem(CART, JSON.stringify([plate]))
      setCartProducts([plate])
    }
  }

  const updateProductCart = (product, number) => {
    product.number = number
    const cart = JSON.parse(localStorage.getItem(CART))
    const newStorage = cart?.map((productCart) =>
      productCart.id === product.id ? product : productCart
    )
    localStorage.setItem(CART, JSON.stringify(newStorage))
    setCartProducts(newStorage)
  }

  const deleteProductCart = (product) => {
    const cart = JSON.parse(localStorage.getItem(CART))

    const newStorage = cart?.filter(
      (plateStorage) => plateStorage.id !== product.id
    )
    if (newStorage?.length > 0) {
      localStorage.setItem(CART, JSON.stringify(newStorage))
    } else {
      localStorage.removeItem(CART)
    }
    setCartProducts(newStorage)
  }

  return {
    cartProducts,
    totalCostProducts,
    addProductCart,
    updateProductCart,
    deleteProductCart,
  }
}

export default useLocalStorage
