import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader'

const subscribeEmail = dynamic(() =>
  import('../../helpers/subscribeEmail').then((res) => res.subscribeEmail)
)
import style from './SubscribeForm.module.css'
import { toast } from 'react-toastify'

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
          <label>
            <input
              type='checkbox'
              id='cbox1'
              value='first_checkbox'
              onChange={(e) => setChecked(e.target.checked)}
            />{' '}
            He leído y acepto los{' '}
            <Link href='/terminos-condiciones' prefetch={false}>
              <a>Términos y condiciones</a>
            </Link>
          </label>
        </div>
        <button type='submit' className='button' disabled={isLoading}>
          <ClipLoader color='#000' loading={isLoading} size={20} />
          <span className={style.spanButton}>Suscribirme</span>
        </button>
      </form>
    </section>
  )
}
