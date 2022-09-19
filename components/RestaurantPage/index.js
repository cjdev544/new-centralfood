import Image from 'next/image'

import style from './RestaurantPage.module.css'

export default function RestaurantPage({ restaurant, category, setCategory }) {
  return (
    <div className={style.restaurant}>
      <div className={style.info}>
        <div className={style.logo}>
          <Image
            src={restaurant?.image}
            alt={`logo de ${restaurant?.name}`}
            width={200}
            height={200}
            className={style.restaurant}
          />
          <h1>{restaurant?.name}</h1>
          <span>{restaurant?.type}</span>
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
      {!restaurant?.isOpen && (
        <span className={style.close}>
          {restaurant?.name} se encuentra cerrado en estos momentos
        </span>
      )}
      <div className={style.categories}>
        {restaurant?.categories.map((itemCategory, idx) => (
          <p
            key={idx}
            className={category === itemCategory ? style.category : style.none}
            onClick={() => setCategory(itemCategory)}
          >
            {itemCategory}
          </p>
        ))}
      </div>
    </div>
  )
}
