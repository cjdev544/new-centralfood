import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  FaUser,
  FaEye,
  FaEyeSlash,
  FaAddressCard,
  FaLock,
  FaGoogle,
} from 'react-icons/fa'

import style from './formStyles.module.css'

export default function RegisterForm({ setShowLogin }) {
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El correo no es valido')
        .required('El correo es requerido'),
      password: Yup.string().required('La contraseña es requerida'),
    }),

    onSubmit: async (formData) => {
      // Validate formik.errors?.email
      console.log(formData)
    },
  })

  return (
    <div className={style.content}>
      <div className={style.title}>Iniciar sesión</div>
      <button className='buttonGoogle'>
        Inicia con Gmail <FaGoogle />
      </button>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.inputBox}>
          <FaUser className={style.formIcon} />
          <input
            className={style.input}
            name='name'
            type='text'
            placeholder='Nombre'
            autoFocus
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.inputBox}>
          <FaUser className={style.formIcon} />
          <input
            className={style.input}
            name='lastname'
            type='text'
            placeholder='Apellido'
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.inputBox}>
          <FaAddressCard className={style.formIcon} />
          <input
            className={style.input}
            name='email'
            type='text'
            placeholder='Correo electrónico'
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.inputBox}>
          <FaLock className={style.formIcon} />
          <input
            className={style.input}
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Contraseña'
            autoComplete='current-password'
            onChange={formik.handleChange}
          />
          {showPassword ? (
            <FaEye
              className={style.formIconEye}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaEyeSlash
              className={style.formIconEye}
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <input type='submit' value='Iniciar sesión' className='button' />
      </form>
      <p className={style.changeForm}>
        ¿Ya tienes una cuenta?{' '}
        <span onClick={() => setShowLogin(true)}>Inicia sesión</span>
      </p>
    </div>
  )
}
