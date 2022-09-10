import { useState } from 'react'

import PlacesAutocompleteGoogle from '../PlacesAutocompleteGoogle'
import style from './AddressForm.module.css'

export default function AddressForm() {
  const [addressNotAccepted, setAddressNotAccepted] = useState(null)
  const [zone, setZone] = useState(null)

  return (
    <div className={style.right}>
      <h3>Crear dirección</h3>
      <form className={style.form}>
        <div className={style.inputGroup}>
          <label htmlFor='title'>Título de la dirección</label>
          <input
            className={style.input}
            type='text'
            id='title'
            name='title'
            placeholder='Ejmp: Mi Casa'
          />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor='cp'>Código postal</label>
          <input
            className={style.input}
            type='text'
            id='cp'
            name='cp'
            placeholder='Ejmp: Mi Casa'
          />
        </div>
        <PlacesAutocompleteGoogle
          setZone={setZone}
          setAddressNotAccepted={setAddressNotAccepted}
        />
        {addressNotAccepted && (
          <span className={style.addressNotValid}>
            Solo realizamos envios a 10km de nuestro local.
          </span>
        )}
        <div className={style.inputGroup}>
          <label htmlFor='address2'>Casa/Edificio/Número</label>
          <input
            className={style.input}
            type='text'
            id='address2'
            name='address2'
            placeholder='Ejmp: Mi Casa'
          />
        </div>
        <button
          type='submit'
          className='button'
          disabled={addressNotAccepted ? true : false}
          style={
            !addressNotAccepted
              ? { color: '#fff' }
              : { backgroundColor: 'rgba(200, 200, 200, 0.7)' }
          }
        >
          Crear
        </button>
      </form>
    </div>
  )
}
