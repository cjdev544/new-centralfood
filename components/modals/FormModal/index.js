import { useRef } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'

import style from './FormModal.module.css'

export default function FormModal({ setOpenModal, contentModal }) {
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
        {contentModal}
      </div>
    </div>
  )
}
