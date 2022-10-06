import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'

import useAuth from '../../hooks/useAuth'
import style from './settingsForm.module.css'

export default function ChangePasswordForm({ isLoading, setIsLoading }) {
  const { authUser, updatePasswordUser } = useAuth()
  const email = authUser.email

  const formik = useFormik({
    initialValues: {
      email,
      password: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required(true),
      newPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref('repeatNewPassword')], true),
      repeatNewPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref('newPassword')], true),
    }),
    onSubmit: (formData) => {
      setIsLoading(true)
      updatePasswordUser(formData, setIsLoading)
    },
  })

  return (
    <div className={style.changeForm}>
      <h4>Cambiar Contraseña</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputsGroup}>
          <span>{email}</span>
          <input
            className={style.input}
            name='password'
            type='password'
            placeholder='Contraseña actual'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className={style.inputsGroup}>
          <input
            className={style.input}
            name='newPassword'
            type='password'
            placeholder='Nueva contraseña'
            onChange={formik.handleChange}
            value={formik.values.newPassword}
          />
          <input
            className={style.input}
            name='repeatNewPassword'
            type='password'
            placeholder='Confirma la nueva contraseña'
            onChange={formik.handleChange}
            value={formik.values.repeatNewPassword}
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
