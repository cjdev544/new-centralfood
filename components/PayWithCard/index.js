import { useState } from 'react'
import { useRouter } from 'next/router'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

//import style from './PayWithCard.module.css'

export default function PayWithCard({ setOpenModalPay }) {
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)

  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

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
    console.log('hacer compra')
    setOpenModalPay(false)
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
