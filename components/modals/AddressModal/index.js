import { useEffect, useRef, useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'

import { getAddressesUser } from '../../../services/data'
import AddressForm from '../../AddressForm'
import style from './AddressModal.module.css'

export default function AddressModal({
  userId,
  setShipping,
  setShippingButton,
  setAddressSelected,
  setOpenModal,
}) {
  const [addresses, setAddresses] = useState([])
  const boxRef = useRef()

  useEffect(() => {
    getAddressesUser(userId).then((res) => setAddresses(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setShipping(false)
      setShippingButton(null)
      setOpenModal(false)
      setAddressSelected(null)
    }
  }

  const handleClick = (address) => {
    setAddressSelected(address)
    setOpenModal(false)
  }

  return (
    <div className={style.modal} onClick={isClicked}>
      <div ref={boxRef} className={style.box}>
        <FaRegWindowClose
          className={style.close}
          onClick={() => {
            setShipping(false)
            setShippingButton(null)
            setOpenModal(false)
            setAddressSelected(null)
          }}
        />
        <div className={style.left}>
          <h3>Direcciones</h3>
          {addresses.length === 0 && (
            <p className={style.selectionText}>
              No se han agregado direcciones
            </p>
          )}
          {addresses.length > 0 && (
            <p className={style.selectionText}>
              Selecciona una dirección o crea una nueva
            </p>
          )}
          {addresses.map((address) => (
            <>
              <div
                key={address.id}
                className={style.item}
                onClick={() => handleClick(address)}
              >
                <h4>{address.title}</h4>
                <div className={style.info}>
                  <span>Código postal: {address.postalCode}</span>
                  <span>{address.zone.address}</span>
                  <span>{address.details}</span>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className={style.right}>
          <AddressForm
            setOpenModal={setOpenModal}
            setAddressSelected={setAddressSelected}
          />
        </div>
      </div>
    </div>
  )
}
