import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast } from 'react-toastify'
import {
  FaUser,
  FaEye,
  FaEyeSlash,
  FaAddressCard,
  FaLock,
  FaGoogle,
} from 'react-icons/fa'

import useAuth from '../../hooks/useAuth'
import style from './formStyles.module.css'

export default function RegisterForm({ setOpenModal, setShowLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { startWithGoogle } = useAuth()

  const loginWithGoogle = () => {
    setIsLoading(true)
    startWithGoogle(setOpenModal, setIsLoading)
  }

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
      <div className={style.title}>Registrate</div>
      <button className='buttonGoogle' onClick={loginWithGoogle}>
        <ClipLoader color='#fff' loading={isLoading} size={20} />
        Inicia con Google <FaGoogle />
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
        <button type='submit' className='button'>
          <ClipLoader color='#fff' loading={isLoading} size={20} />
          Registrarte
        </button>
      </form>
      <p className={style.changeForm}>
        ¿Ya tienes una cuenta?{' '}
        <span onClick={() => setShowLogin(true)}>Inicia sesión</span>
      </p>
    </div>
  )
}
