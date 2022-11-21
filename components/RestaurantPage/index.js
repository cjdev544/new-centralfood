import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'

import Plates from '../Plates'
import style from './RestaurantPage.module.css'

export default function RestaurantPage({
  restaurant,
  category,
  setCategory,
  productsCategory,
  products,
  restaurants,
}) {
  return (
    <>
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
            <h2 className={style.subtitle}>{restaurant?.type}</h2>
          </div>
          <div>
            {restaurant?.firstContent?.map((content, idx) => (
              <p key={idx}>{content}</p>
            ))}
          </div>
        </div>
        {!restaurant?.isOpen && (
          <span className={style.close}>
            {restaurant?.name} se encuentra cerrado en estos momentos
          </span>
        )}
        <div className={style.categories}>
          {restaurant?.categories.map((itemCategory, idx) => (
            <Link
              key={idx}
              className={style.arrow}
              to='box'
              smooth={true}
              offset={0}
              duration={500}
            >
              <p
                className={
                  category === itemCategory ? style.category : style.none
                }
                onClick={() => setCategory(itemCategory)}
              >
                {itemCategory}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div id='box' />
      <Plates
        category={category}
        productsCategory={productsCategory}
        products={products}
        restaurants={restaurants}
      />
      <div>
        <h2>{restaurant?.subtitle}</h2>
        {restaurant?.secondContent?.map((content, idx) => (
          <p key={idx}>{content}</p>
        ))}
      </div>
    </>
  )
}
