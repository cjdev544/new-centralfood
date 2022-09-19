import { useState } from 'react'
import { useRouter } from 'next/router'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast } from 'react-toastify'

import useAuth from '../../hooks/useAuth'
import useOrders from '../../hooks/useOrders'
import { fetchPaymentApi } from '../../helpers/fetchPaymentApi'
import { fetchSendEmail } from '../../helpers/fetchSendEmail'

export default function PayWithCash({
  isLoading,
  products,
  address,
  values,
  priceShipping,
  total,
  setIsLoading,
  setOpenModalPay,
}) {
  const router = useRouter()
  const { authUser } = useAuth()
  const [cash, setCash] = useState(null)
  const { createNewOrder } = useOrders()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (total > cash) {
      toast.warning('El efectivo debe ser mayor al monto a pagar')
      return
    }

    setIsLoading(true)

    fetchPaymentApi(
      'payment',
      products,
      authUser,
      address,
      values,
      priceShipping
    )
      .then(async (response) => {
        if (response?.msg) {
          toast.error(response.msg)
          setIsLoading(false)
          return
        }

        const { order } = response
        order.cash = cash
        // Create order in firebase
        await createNewOrder(order)
        await fetchSendEmail(authUser?.email, order)
        setIsLoading(false)
        setOpenModalPay(false)
        toast.success('Recivira un correo con los detalles del pedido')
        router.push('/pedidos')
        //removeAllProductsCart()
      })
      .catch((err) => {
        console.log(err)
        toast.warning('Error al crear la orden')
        setIsLoading(false)
        setOpenModalPay(false)
      })
  }

  return (
    <form className='form-payment' onSubmit={handleSubmit}>
      <span>Cantidad en efectivo, para devolver el cambio</span>
      <input
        type='number'
        placeholder='Cambio para'
        onChange={(e) => setCash(e.target.value)}
      />
      <button className='submit' type='submit' disabled={isLoading}>
        <ClipLoader color='#fff' loading={isLoading} size={20} />
        Realizar pedido
      </button>
    </form>
  )
}
