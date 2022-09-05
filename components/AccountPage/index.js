import style from './AccountPage.module.css'

export default function AccountPage() {
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
        <div className={style.right}>
          <h3>Crear dirección</h3>
          <form className={style.form}>
            <div className={style.inputGroup}>
              <label htmlFor='title'>Título de la dirección</label>
              <input
                className={style.input}
                type='text'
                id='title'
                name='title'
                placeHolder='Ejmp: Mi Casa'
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor='cp'>Código postal</label>
              <input
                className={style.input}
                type='text'
                id='cp'
                name='cp'
                placeHolder='Ejmp: Mi Casa'
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor='address'>Calle/Avenida/Zona</label>
              <input
                className={style.input}
                type='text'
                id='address'
                name='address'
                placeHolder='Ejmp: Mi Casa'
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor='address2'>Casa/Edificio/Número</label>
              <input
                className={style.input}
                type='text'
                id='address2'
                name='address2'
                placeHolder='Ejmp: Mi Casa'
              />
            </div>
            <button type='submit' className='button'>
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
