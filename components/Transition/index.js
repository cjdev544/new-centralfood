import { AnimatePresence, motion } from 'framer-motion'

import style from './Transition.module.css'

export default function Transition({ category, children }) {
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
  }

  return (
    <div className={style.transition}>
      <AnimatePresence initial={false} exitBeforeEnter>
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
