import { useState } from 'react'
import { useRouter } from 'next/router'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'

import useAuth from '../../hooks/useAuth'
import useOrders from '../../hooks/useOrders'
import useLocalStorage from '../../hooks/useLocalStorage'
import { fetchPaymentApi } from '../../helpers/fetchPaymentApi'
import { fetchSendEmail } from '../../helpers/fetchSendEmail'

export default function PayWithCard({
  products,
  address,
  values,
  priceShipping,
  setOpenModalPay,
}) {
  const router = useRouter()
  const { authUser } = useAuth()
  const { createNewOrder } = useOrders()
  const { removeAllProductsCart } = useLocalStorage()

  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)

  const stripe = useStripe()
  const elements = useElements()

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }

  const handleChange = async (e) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProcessing(true)

    fetchPaymentApi(
      'stripe',
      products,
      authUser,
      address,
      values,
      priceShipping
    )
      .then(async (response) => {
        const { clientSecret, order } = response

        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })

        if (payload.error) {
          setError(`Error en el pago. ${payload.error.message}`)
          toast.error(payload.error.message)
          setProcessing(false)
        } else {
          // Create order in firebase
          await createNewOrder(order)
          await fetchSendEmail(authUser?.email, order)
          setError(null)
          setProcessing(false)
          setSucceeded(true)
          setOpenModalPay(false)
          toast.success('La orden ha sido enviada')
          router.push('/pedidos')
          removeAllProductsCart()
        }
      })
      .catch((err) => {
        setProcessing(false)
        toast.error('Error en el servidor, intente nuevamente')
        return null
      })
  }

  return (
    <form className='form-payment' id='payment-form' onSubmit={handleSubmit}>
      <span>C.P = Codigo Postal</span>
      <CardElement
        id='card-element'
        options={cardStyle}
        onChange={handleChange}
      />
      <button disabled={processing || disabled || succeeded} id='submit'>
        <span id='button-text'>
          {processing ? <div className='spinner' id='spinner'></div> : 'Pagar'}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className='card-error' role='alert'>
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? 'result-message' : 'result-message hidden'}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {' '}
          Stripe dashboard.
        </a>{' '}
        Refresh the page to pay again.
      </p>
    </form>
  )
}
