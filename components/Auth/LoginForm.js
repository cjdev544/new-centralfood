import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast } from 'react-toastify'
import {
  FaEye,
  FaEyeSlash,
  FaAddressCard,
  FaLock,
  FaGoogle,
} from 'react-icons/fa'

import useAuth from '../../hooks/useAuth'
import style from './formStyles.module.css'

export default function LoginForm({ setOpenModal, setShowLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { startWithGoogle, loginWhitEmailAndPassword } = useAuth()

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
      setIsLoading(true)
      const { email, password } = formData

      loginWhitEmailAndPassword(email, password, setOpenModal, setIsLoading)
    },
  })

  return (
    <div className={style.content}>
      <div className={style.title}>Iniciar sesión</div>
      <button className='buttonGoogle' onClick={loginWithGoogle}>
        <ClipLoader color='#fff' loading={isLoading} size={20} />
        Inicia con Google <FaGoogle />
      </button>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.inputBox}>
          <FaAddressCard className={style.formIcon} />
          <input
            className={style.input}
            name='email'
            type='text'
            placeholder='Correo electrónico'
            autoFocus
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
              formik.errors?.password
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
        <div className={style.remember}>
          <span>¿Has olvidado la contraseña?</span>
        </div>
        <button type='submit' className='button'>
          <ClipLoader color='#fff' loading={isLoading} size={20} />
          Iniciar sesión
        </button>
      </form>
      <p className={style.changeForm}>
        ¿No tienes una cuenta?{' '}
        <span onClick={() => setShowLogin(false)}>Registrate</span>
      </p>
    </div>
  )
}
