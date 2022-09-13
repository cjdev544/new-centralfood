import { useRef } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'

import AddressForm from '../../AddressForm'
import style from './UpdateAddressModal.module.css'

export default function UpdateAddressModal({
  address,
  setAddresses,
  setOpenModal,
  setIsLoading,
}) {
  const boxRef = useRef()

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setOpenModal(false)
    }
  }

  return (
    <div className={style.modal} onClick={isClicked}>
      <div ref={boxRef} className={style.box}>
        <FaRegWindowClose
          className={style.close}
          onClick={() => setOpenModal(false)}
        />
        <div className={style.right}>
          <AddressForm
            address={address}
            setAddresses={setAddresses}
            setOpenModal={setOpenModal}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  )
}
