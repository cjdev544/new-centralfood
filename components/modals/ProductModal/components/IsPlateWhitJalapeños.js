import { FaCheck } from 'react-icons/fa'
import style from './exclusivePlate.module.css'

export default function IsPlateWhitJalapeños({
  selectJalapeño,
  setSelectJalapeño,
}) {
  return (
    <div className={style.exclusive}>
      <div
        style={
          !selectJalapeño
            ? { fontWeight: 'bold' }
            : {
                backgroundColor: 'transparent',
                border: '2px solid #000',
                color: '#000',
              }
        }
        className={style.select}
        onClick={() => setSelectJalapeño(false)}
      >
        <span>Sin jalapeño</span>
        {!selectJalapeño && <FaCheck />}
      </div>
      <div
        style={
          selectJalapeño
            ? { fontWeight: 'bold' }
            : {
                backgroundColor: 'transparent',
                border: '2px solid #000',
                color: '#000',
              }
        }
        className={style.select}
        onClick={() => setSelectJalapeño(true)}
      >
        <span>Con jalapeño</span>
        {selectJalapeño && <FaCheck />}
      </div>
    </div>
  )
}
