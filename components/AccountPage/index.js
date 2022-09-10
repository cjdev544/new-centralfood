import { useState } from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'

import useAuth from '../../hooks/useAuth'
import AddressForm from '../AddressForm'
import ChangeNameForm from './ChangeNameForm'
import ChangeEmailForm from './ChangeEmailForm'
import style from './AccountPage.module.css'

export default function AccountPage() {
  const [isLoading, setIsLoading] = useState(false)

  const { authUser } = useAuth()

  return (
    <div className={style.account}>
      <div className={style.accountBox}>
        <div className={style.left}>
          <h3>Direcciones</h3>
          {/* Items */}
          <div className={style.items}>
            <div className={style.item}>
              <h4>Mi casa</h4>
              <div className={style.info}>
                <span>Código postal: 45874</span>
                <span>Calle Oscar Wilde, Málaga, España</span>
                <span>Esquina, soria, Casa Mijares</span>
                <div className={style.buttons}>
                  <button className='button'>Editar</button>
                  <button className='other-button'>Eliminar</button>
                </div>
              </div>
            </div>

            <div className={style.item}>
              <h4>Mi casa</h4>
              <div className={style.info}>
                <span>Código postal: 45874</span>
                <span>Calle Oscar Wilde, Málaga, España</span>
                <span>Esquina, soria, Casa Mijares</span>
                <div className={style.buttons}>
                  <button className='button'>Editar</button>
                  <button className='other-button'>Eliminar</button>
                </div>
              </div>
            </div>

            <div className={style.item}>
              <h4>Mi casa</h4>
              <div className={style.info}>
                <span>Código postal: 45874</span>
                <span>Calle Oscar Wilde, Málaga, España</span>
                <span>Esquina, soria, Casa Mijares</span>
                <div className={style.buttons}>
                  <button className='button'>Editar</button>
                  <button className='other-button'>Eliminar</button>
                </div>
              </div>
            </div>
          </div>

          {/* ***** */}
        </div>

        {/* Right */}
        <AddressForm />
      </div>

      {authUser?.provider === 'password' && (
        <div className={style.settings}>
          {/* Change name */}
          <ChangeNameForm isLoading={isLoading} setIsLoading={setIsLoading} />
          <ChangeEmailForm isLoading={isLoading} setIsLoading={setIsLoading} />
          {/* <ChangePasswordForm
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          /> */}
        </div>
      )}
    </div>
  )
}
