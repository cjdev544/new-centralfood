import Image from 'next/image'

import GuayWok from '../../public/logo-guaywok.svg'
import SushiGuay from '../../public/logo-sushi.svg'
import HamVzl from '../../public/logo-hamburgueseria.svg'
import Sabor from '../../public/logo-sabor.svg'
import style from './RestaurantPage.module.css'

export default function RestaurantPage() {
  const categories = [
    'Entrantes',
    'Maki',
    'Temaki',
    'Sushiroll Fresquitos',
    'Rolls Semetempura',
    'Rolls Tempura',
    'Los Combos mas Guay',
    'Extras',
  ]

  return (
    <div className={style.restaurant}>
      <div className={style.info}>
        <div className={style.logo}>
          <Image
            src={SushiGuay}
            alt='logo SushiGuay'
            width={200}
            height={200}
            className={style.restaurant}
          />
          <h1>SushiGuay</h1>
          <span>Comida Japonesa</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={style.categories}>
        {categories.map((category, idx) => (
          <p key={idx}>{category}</p>
        ))}
      </div>
    </div>
  )
}
