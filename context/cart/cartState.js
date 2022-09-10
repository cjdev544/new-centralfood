import { useState } from 'react'

import CartContext from './cartContext'

const CartState = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartState
