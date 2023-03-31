import { useRef } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'

import style from './PopUpModal.module.css'

export default function PopUpModal({ setOpenModal }) {
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
        <div className={style.modalContent}>
          <div>
            <h3 className={style.title}>
              <span className={style.icon}>⚠ </span> Advertencia{' '}
              <span className={style.icon}> ⚠</span>
            </h3>
            <p className={style.text}>
              La entrega será más lenta de lo habitual debido a las actividades
              y tráfico de Semena Santa
            </p>
            <button
              className='button'
              style={{
                color: '#000',
                fontWeight: 'bold',
                border: '#000 solid 2px'
              }}
              onClick={() => setOpenModal(false)}
            >
              Entiendo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
