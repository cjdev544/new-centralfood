import { useState } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'

import style from './SubscribeForm.module.css'
import { toast } from 'react-toastify'
import { subscribeEmail } from '../../helpers/subscribeEmail'

export default function SubscribeForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El correo no es valido')
        .required('El correo es obligatorio'),
    }),

    onSubmit: (formData) => {
      if (!checked) {
        toast.warning('Debes aceptar nuestas políticas de privacidad')
        return
      }

      const { email } = formData

      setIsLoading(true)
      subscribeEmail(email)
        .then(() => {
          toast.success('Gracias por suscribirte')
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
          toast.error('Error en el servidor. Intenta nuevamente')
          setIsLoading(false)
        })
    },
  })

  return (
    <section className={style.subscribe}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.header}>
          <p>Suscribete a CentralFood Málaga</p>
          <span>
            Recive cupones de descuento en tu correo y mantente informado de
            nuestras novedades.
          </span>
        </div>
        <input
          className={style.input}
          type='email'
          name='email'
          placeholder='Correo electrónico'
          onChange={formik.handleChange}
        />
        <div className={style.checkBox}>
          <input
            type='checkbox'
            id='cbox1'
            value='first_checkbox'
            onChange={(e) => setChecked(e.target.checked)}
          />{' '}
          He leído y acepto la{' '}
          <Link href='/politica-privacidad'>
            <a>política de privacidad</a>
          </Link>
        </div>
        <button type='submit' className='button' disabled={isLoading}>
          <ClipLoader color='#fff' loading={isLoading} size={20} />
          Suscribirme
        </button>
      </form>
    </section>
  )
}
