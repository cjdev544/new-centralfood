import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast } from 'react-toastify'

import useAuth from '../../hooks/useAuth'
import { createAddress } from '../../services/data'
import PlacesAutocompleteGoogle from '../PlacesAutocompleteGoogle'
import style from './AddressForm.module.css'

export default function AddressForm({
  address,
  setOpenModal,
  setAddressSelected,
}) {
  const [addressNotAccepted, setAddressNotAccepted] = useState(null)
  const [zone, setZone] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { authUser } = useAuth()

  const formik = useFormik({
    initialValues: {
      title: address?.title || '',
      zone: address?.zone?.address || '',
      postalCode: address?.postalCode || '',
      details: address?.details || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required(true),
      postalCode: Yup.string().required(true),
      details: Yup.string().required(true),
    }),
    onSubmit: (formData) => {
      setIsLoading(true)

      formData.zone = zone
      if (!address) {
        createAddress(formData)
          .then((res) => {
            if (setAddressSelected)
              setAddressSelected({ ...formData, user: authUser.uid })
            toast.success('Dirección agragada correctamente')
            setOpenModal(false)
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
            toast.error('Error al crear la dirección')
            setOpenModal(false)
            setIsLoading(false)
          })
      } else {
        setOpenModal(false)
        //updateAddress(dataTemp, setShowModal, setIsLoading)
      }
    },
  })

  return (
    <div className={style.right}>
      <h3>Crear dirección</h3>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.inputGroup}>
          <label htmlFor='title'>Título de la dirección</label>
          <input
            className={style.input}
            name='title'
            type='text'
            placeholder='Ejmp: Mi Casa'
            onChange={formik.handleChange}
            value={formik.values.title}
            style={
              formik.errors?.title
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
          />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor='cp'>Código postal</label>
          <input
            className={style.input}
            name='postalCode'
            type='text'
            placeholder='Codigo postal'
            onChange={formik.handleChange}
            value={formik.values.postalCode}
            style={
              formik.errors?.postalCode
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
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
            name='details'
            type='text'
            placeholder='Detalles especificos de dirección'
            onChange={formik.handleChange}
            value={formik.values.details}
            style={
              formik.errors?.details
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
          />
        </div>
        <button
          type='submit'
          className='button'
          disabled={addressNotAccepted || !zone?.distance ? true : false}
          style={
            addressNotAccepted || !zone?.distance
              ? { backgroundColor: 'rgba(200, 200, 200, 0.7)' }
              : { color: '#fff' }
          }
        >
          <ClipLoader color='#fff' loading={isLoading} size={20} />
          Crear
        </button>
      </form>
    </div>
  )
}
