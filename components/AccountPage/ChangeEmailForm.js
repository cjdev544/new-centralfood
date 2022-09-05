import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'

import useAuth from '../../hooks/useAuth'
import style from './settingsForm.module.css'

export default function ChangeEmailForm({ isLoading, setIsLoading }) {
  const { authUser, updateEmailUser } = useAuth()
  const email = authUser.email

  const formik = useFormik({
    initialValues: {
      email,
      password: '',
      newEmail: '',
      repeatEmail: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required(true),
      newEmail: Yup.string()
        .email(true)
        .required(true)
        .oneOf([Yup.ref('repeatEmail')], true),
      repeatEmail: Yup.string()
        .email(true)
        .required(true)
        .oneOf([Yup.ref('newEmail')], true),
    }),

    onSubmit: (formData) => {
      setIsLoading(true)
      updateEmailUser({ ...formData, email }, setIsLoading)
    },
  })

  return (
    <div className={style.changeForm}>
      <h4>Cambiar Email</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputsGroup}>
          <span>{email}</span>
          <input
            className={style.input}
            name='password'
            type='password'
            placeholder='Contraseña'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className={style.inputsGroup}>
          <input
            className={style.input}
            name='newEmail'
            placeholder='Nuevo email'
            onChange={formik.handleChange}
            value={formik.values.newEmail}
          />
          <input
            className={style.input}
            name='repeatEmail'
            placeholder='Confirma el nuevo email'
            onChange={formik.handleChange}
            value={formik.values.repeatEmail}
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
