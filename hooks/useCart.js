import { useEffect, useState } from 'react'
import { round } from 'mathjs'

import {
  getOrdersUser,
  getFirstBuyPromotion,
  getShippingCost,
} from '../services/data'
import useAuth from '../hooks/useAuth'
import useLocalStorage from '../hooks/useLocalStorage'
import { getDiscounts } from '../services/data'

const useCart = () => {
  const [deliveryCost, setDeliveryCost] = useState(0)
  const [addressSelected, setAddressSelected] = useState(null)
  const [promotionalCode, setPromotionalCode] = useState(null)
  const [promotion, setPromotion] = useState(null)
  const [totalProducts, setTotalProducts] = useState(null)
  const [discounts, setDiscounts] = useState(null)
  const [discount, setDiscount] = useState(null)
  const [isPromotionCodeCorrect, setIsPromotionCodeCorrect] = useState(false)

  const { authUser } = useAuth()
  const { totalCostProducts } = useLocalStorage()

  useEffect(() => {
    if (!discounts) {
      if (authUser) allDiscounts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discounts, authUser])

  const allDiscounts = async () => {
    const array = []
    const res = await getDiscounts()
    res.forEach((discount) => {
      if (discount.discountFor !== 'client') {
        array.push(discount)
      } else if (discount.clientEmail === authUser.email) {
        array.push(discount)
      }
    })
    setDiscounts(array)
  }

  useEffect(() => {
    if (!authUser?.uid) {
      if (!promotionalCode) {
        setTotalProducts(totalCostProducts)
      } else {
        // showPromotionalDiscount()
      }
    }

    if (authUser?.uid) {
      getOrdersUser(authUser.uid).then((res) => {
        if (res?.length === 0) {
          getFirstBuyPromotion().then((res) => {
            if (!promotionalCode) {
              setPromotion(res)
              const promo = res.cost
              const promoNumber = round((totalCostProducts * promo) / 100, 2)
              setTotalProducts(round(totalCostProducts - promoNumber, 2))
            } else {
              // showPromotionalDiscount()
            }
          })
        } else {
          if (!promotionalCode) {
            setTotalProducts(totalCostProducts)
          } else {
            // showPromotionalDiscount()
          }
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser, promotionalCode, totalCostProducts])

  useEffect(() => {
    if (addressSelected) {
      getShippingCost(addressSelected, setDeliveryCost)
    }
  }, [addressSelected])

  useEffect(() => {
    if (promotionalCode) {
      const res = discounts.find(
        (disc) =>
          disc.name.toLowerCase().trim() ===
          promotionalCode.toLowerCase().trim()
      )
      if (res) {
        setDiscount(res)
        setIsPromotionCodeCorrect(true)
      } else {
        setIsPromotionCodeCorrect(false)
      }
    }
  }, [promotionalCode, discounts])
  useEffect(() => {
    if (isPromotionCodeCorrect) {
      const promotionalDiscount = {
        cost: discount.discount,
        name: discount.name,
        id: discount.id,
        type: discount.type,
        use: discount.use,
      }
      setPromotion(promotionalDiscount)
      const promo = discount.discount
      const promoNumber = round((totalCostProducts * promo) / 100, 2)
      setTotalProducts(round(totalCostProducts - promoNumber, 2))
    } else {
      setPromotion(null)
    }
  }, [isPromotionCodeCorrect, discount, totalCostProducts])

  return {
    deliveryCost,
    addressSelected,
    promotion,
    promotionalCode,
    isPromotionCodeCorrect,
    totalProducts,
    setDeliveryCost,
    setAddressSelected,
    setPromotionalCode,
  }
}

export default useCart
