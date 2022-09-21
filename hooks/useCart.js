import { useEffect, useState } from 'react'
import { round } from 'mathjs'

import {
  getOrdersUser,
  getFirstBuyPromotion,
  getShippingCost,
} from '../services/data'
import useAuth from '../hooks/useAuth'
import useLocalStorage from '../hooks/useLocalStorage'

const useCart = () => {
  const [deliveryCost, setDeliveryCost] = useState(0)
  const [addressSelected, setAddressSelected] = useState(null)
  const [promotionalCode, setPromotionalCode] = useState(null)
  const [promotion, setPromotion] = useState(null)
  const [totalProducts, setTotalProducts] = useState(null)

  const { authUser } = useAuth()
  const { cartProducts, totalCostProducts } = useLocalStorage()

  useEffect(() => {
    if (!authUser?.uid) {
      if (!promotionalCode) {
        setTotalProducts(totalCostProducts)
        return
      } else {
        //buscar codigo de promocion
      }
    }

    getOrdersUser(authUser.uid).then((res) => {
      if (res?.length === 0) {
        getFirstBuyPromotion().then((res) => {
          if (!promotionalCode) {
            setPromotion(res)
            const promo = res.cost
            const promoNumber = round((totalCostProducts * promo) / 100, 2)
            setTotalProducts(round(totalCostProducts - promoNumber, 2))
          } else {
            //TODO: Pedir codigo promocional
          }
        })
      } else {
        if (!promotionalCode) {
          setTotalProducts(totalCostProducts)
        } else {
          //TODO: Pedir codigo promocional
        }
      }
    })
  }, [authUser, promotionalCode, totalCostProducts])

  useEffect(() => {
    if (addressSelected) {
      getShippingCost(addressSelected, setDeliveryCost)
    }
  }, [addressSelected])

  return {
    deliveryCost,
    addressSelected,
    promotion,
    totalProducts,
    setDeliveryCost,
    setAddressSelected,
    setPromotionalCode,
  }
}

export default useCart
