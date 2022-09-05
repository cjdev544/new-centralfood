import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'

import useAuth from '../../hooks/useAuth'
import style from './settingsForm.module.css'

export default function ChangeNameForm({ isLoading, setIsLoading }) {
  const { authUser, setAuthUser, updateName } = useAuth()
  const userName = authUser?.displayName

  const splitUserName = userName?.split(' ')

  const formik = useFormik({
    initialValues: { name: splitUserName[0], lastname: splitUserName[1] },
    validationSchema: Yup.object({
      name: Yup.string().required(true),
      lastname: Yup.string().required(true),
    }),

    onSubmit: (formData) => {
      setIsLoading(true)
      updateName(formData, setIsLoading)
    },
  })

  return (
    <div className={style.changeForm}>
      <h4>Cambiar nombre y apellido</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputsGroup}>
          <input
            className={style.input}
            name='name'
            placeholder='Nuevo nombre'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            className={style.input}
            name='lastname'
            placeholder='Nuevo apellido'
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
        </div>
        <button type='submit' className='button'>
          <ClipLoader color='#fff' loading={isLoading} size={20} />
          Actualizar
        </button>
      </form>
    </div>
  )
}
