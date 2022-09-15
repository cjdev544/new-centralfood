import { useState } from 'react'

export default function PayWithCash({ isLoading, setIsLoading, setOpenModal }) {
  const [cash, setCash] = useState(null)

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <form className='form-payment' onSubmit={handleSubmit}>
      <span>Cantidad en efectivo, para devolver el cambio</span>
      <input
        type='number'
        placeholder='Cambio para'
        onChange={(e) => setCash(e.target.value)}
      />
      <button className='submit' type='submit' disabled={isLoading || !cash}>
        Realizar pedido
      </button>
    </form>
  )
}
