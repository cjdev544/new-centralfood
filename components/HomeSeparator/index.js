import style from './HomeSeparator.module.css'

export default function HomeSeparator() {
  return (
    <div className={style.separator}>
      <div className={style.background}>
        <div className={style.info}>
          <span className={style.one}>Comida internacional</span>
          <span className={style.two}>con sabor a</span>
          <span className={style.tree}>Venezuela</span>
        </div>
      </div>
    </div>
  )
}
