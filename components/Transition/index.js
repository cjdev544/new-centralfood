import { AnimatePresence, motion } from 'framer-motion'

import style from './Transition.module.css'

export default function Transition({ category, children }) {
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
  }

  return (
    <div className={style.transition}>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          key={category}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
