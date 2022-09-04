import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'
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

  const { startWithGoogle, registerWithEmailAndPassword } = useAuth()

  const loginWithGoogle = () => {
    setIsLoading(true)
    startWithGoogle(setOpenModal, setIsLoading)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(true),
      lastname: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      password: Yup.string()
        .min(6)
        .required('La contraseña debe tener almenos 6 caracteres'),
    }),

    onSubmit: async (formData) => {
      const { email, password, name, lastname } = formData
      const displayName = `${name} ${lastname}`

      setIsLoading(true)

      registerWithEmailAndPassword(
        email,
        password,
        displayName,
        setOpenModal,
        setIsLoading
      )
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
            style={
              formik.errors?.name
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
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
            style={
              formik.errors?.lastname
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
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
            style={
              formik.errors?.email
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
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
            style={
              formik.errors?.email
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
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
        <span className={style.error}>{formik.errors?.password}</span>
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
