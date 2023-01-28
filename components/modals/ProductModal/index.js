import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { round } from 'mathjs'
import { FaRegWindowClose, FaPlus, FaMinus, FaCheck } from 'react-icons/fa'
import { toast } from 'react-toastify'

import useLocalStorage from '../../../hooks/useLocalStorage'
import IsPlateWhitJalapeños from './components/IsPlateWhitJalapeños'
import { getProductsComplements } from '../../../helpers/getProductsComplements'
import Complement from '../../Complement'
import style from './ProductModal.module.css'
import IsPlatePepper from './components/IsPlatePepper'

export default function ProductModal({
  restaurants,
  products,
  product,
  setOpenModal,
}) {
  const router = useRouter()

  const [restaurant, setRestaurant] = useState(null)
  const [counterProduct, setCounterProduct] = useState(1)
  const [productCost, setProductCost] = useState(0)
  const [complements, setComplements] = useState([])
  const [complementsCost, setComplementsCost] = useState(0)
  const [isPepper, setIsPepper] = useState(false)
  const [selectPepper, setSelectPepper] = useState(false)
  const [pepperPlate, setPepperPlate] = useState(null)
  const [isJalapeño, setIsJalapeño] = useState(false)
  const [selectJalapeño, setSelectJalapeño] = useState(false)
  const [jalapeñoPlate, setJalapeñoPlate] = useState(null)
  const [total, setTotal] = useState(0)
  const boxRef = useRef()

  const { addProductCart } = useLocalStorage({})

  useEffect(() => {
    const restaurantProduct = restaurants.find(
      (restaurant) => restaurant.page === product.restaurante
    )
    setRestaurant(restaurantProduct)
  }, [product, restaurants])

  useEffect(() => {
    setProductCost(round(product?.precio * counterProduct, 2))
  }, [counterProduct, product])

  useEffect(() => {
    let total = 0
    if (complements.length === 0) {
      setComplementsCost(0)
    } else {
      complements.forEach((complement) => {
        total = round(Number(complement.precio) + total, 2)
        setComplementsCost(total)
      })
    }
  }, [complements])

  useEffect(() => {
    setTotal(round(productCost + complementsCost, 2))
  }, [productCost, complementsCost])

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setOpenModal(false)
    }
  }

  useEffect(() => {
    if (product) {
      const plateIsPepper = product.path.includes('noodles')
      if (plateIsPepper) {
        setIsPepper(true)
      } else {
        setIsPepper(false)
      }
    }
  }, [product])

  useEffect(() => {
    if (product) {
      const plateIsJalapeño = product.path.includes('burrito')
      if (plateIsJalapeño) {
        setIsJalapeño(true)
      } else {
        setIsJalapeño(false)
      }
    }
  }, [product])

  useEffect(() => {
    if (isPepper) {
      let msg
      if (selectPepper) {
        msg = '(Con Picante)'
      } else {
        msg = '(Sin Picante)'
      }
      setPepperPlate({ ...product, nombre: `${product.nombre} ${msg}` })
    }
  }, [product, isPepper, selectPepper])

  useEffect(() => {
    if (isJalapeño) {
      let msg
      if (selectJalapeño) {
        msg = '(Con Jalapeño)'
      } else {
        msg = '(Sin Jalapeño)'
      }
      setJalapeñoPlate({ ...product, nombre: `${product.nombre} ${msg}` })
    }
  }, [product, isJalapeño, selectJalapeño])

  const { extras, drinks, beer, desserts } = getProductsComplements(
    products,
    product
  )

  const plusPlate = () => {
    setCounterProduct(counterProduct + 1)
  }

  const minusPlate = () => {
    if (counterProduct > 1) {
      setCounterProduct(counterProduct - 1)
    }
  }

  const addCar = () => {
    if (!restaurant?.isOpen) {
      toast.warning(`${restaurant.name} se encuentra cerrado en estos momentos`)
      return
    }
    if (isPepper) {
      addProductCart({ ...pepperPlate, number: counterProduct })
      complements.forEach((complement) => {
        addProductCart({ ...complement, number: 1 })
      })
    } else if (isJalapeño) {
      addProductCart({ ...jalapeñoPlate, number: counterProduct })
      complements.forEach((complement) => {
        addProductCart({ ...complement, number: 1 })
      })
    } else {
      addProductCart({ ...product, number: counterProduct })
      complements.forEach((complement) => {
        addProductCart({ ...complement, number: 1 })
      })
    }
    setOpenModal(false)
    router.push('/carrito')
  }

  return (
    <div className={style.modal} onClick={isClicked}>
      <div ref={boxRef} className={style.box}>
        <FaRegWindowClose
          className={style.close}
          onClick={() => setOpenModal(false)}
        />
        <div className={style.left}>
          <p className={style.extra}>Extras</p>
          {extras.map((product) => (
            <Complement
              key={product.id}
              product={product}
              setComplements={setComplements}
            />
          ))}

          {/* Drinks */}
          <p className={style.extra}>Bebidas</p>
          {drinks.map((product) => (
            <Complement
              key={product.id}
              product={product}
              setComplements={setComplements}
            />
          ))}

          {/* Desserts */}
          <p className={style.extra}>Postres</p>
          {desserts.map((product) => (
            <Complement
              key={product.id}
              product={product}
              setComplements={setComplements}
            />
          ))}

          {/* Beer */}
          <p className={style.extra}>Cervezas</p>
          {beer.map((product) => (
            <Complement
              key={product.id}
              product={product}
              setComplements={setComplements}
            />
          ))}
        </div>

        <div className={style.right}>
          <div className={style.product}>
            <Image
              src={product.image}
              alt={product.nombre}
              width={200}
              height={200}
              quality={50}
            />
          </div>
          <h2>{product.nombre}</h2>
          <p>{product.descripcion}</p>
          {isPepper && (
            <IsPlatePepper
              selectPepper={selectPepper}
              setSelectPepper={setSelectPepper}
            />
          )}
          {isJalapeño && (
            <IsPlateWhitJalapeños
              selectJalapeño={selectJalapeño}
              setSelectJalapeño={setSelectJalapeño}
            />
          )}
          <span className={style.productPrice}>{product.precio}€</span>
          <div className={style.numberProducts}>
            <div className={style.circle} onClick={minusPlate}>
              <FaMinus />
            </div>
            <span className={style.spanNumber}>{counterProduct}</span>
            <div className={style.circle} onClick={plusPlate}>
              <FaPlus />
            </div>
          </div>
          <div className={style.button}>
            <button className='button' onClick={addCar}>
              Añadir por {total}€
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
