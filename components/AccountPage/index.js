import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast } from 'react-toastify'

import useAuth from '../../hooks/useAuth'
import AddressForm from '../AddressForm'
import { deleteAddress, getAddressesUser } from '../../services/data'
import ChangeNameForm from './ChangeNameForm'
import ChangeEmailForm from './ChangeEmailForm'
import UpdateAddressModal from '../modals/UpdateAddressModal'
import style from './AccountPage.module.css'

export default function AccountPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [addresses, setAddresses] = useState([])
  const [address, setAddress] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const { authUser } = useAuth()

  useEffect(() => {
    if (authUser?.uid) {
      getAddressesUser(authUser.uid).then((res) => setAddresses(res))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser])

  const removeAddress = (addressForDelete) => {
    setIsLoading(true)
    deleteAddress(addressForDelete)
      .then((res) => {
        setAddresses((last) =>
          last.filter((element) => element.id !== addressForDelete.id)
        )
        toast.success('Dirección eliminda correctamente')
        setIsLoading(false)
      })
      .catch((err) => {
        toast.error('Error al eliminar la dirección')
        setIsLoading(false)
      })
  }

  return (
    <div className={style.account}>
      <div className={style.accountBox}>
        <div className={style.left}>
          <h3>Direcciones</h3>
          {/* Items */}
          <div className={style.items}>
            {addresses.length === 0 && <p>No se han agregado direcciones</p>}
            {addresses.map((address) => (
              <div key={address.id} className={style.item}>
                <h4>{address.title}</h4>
                <div className={style.info}>
                  <span>Código postal: {address.postalCode}</span>
                  <span>{address.zone.address}</span>
                  <span>{address.details}</span>
                  <div className={style.buttons}>
                    <button
                      className='button'
                      onClick={() => {
                        setAddress(address)
                        setOpenModal(true)
                      }}
                    >
                      <ClipLoader color='#fff' loading={isLoading} size={20} />
                      Editar
                    </button>
                    <button
                      className='other-button'
                      onClick={() => removeAddress(address)}
                    >
                      <ClipLoader color='#fff' loading={isLoading} size={20} />
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ***** */}
        </div>

        {/* Right */}
        <AddressForm setAddresses={setAddresses} />
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
      {openModal && (
        <UpdateAddressModal
          address={address}
          setAddresses={setAddresses}
          setOpenModal={setOpenModal}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  )
}
