"use client"

import {motion as anim, AnimatePresence} from "framer-motion"
const Transition = ({ children } : any ) => {
  return (
    <AnimatePresence mode="wait">
      <anim.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: [0, 1, 1], y: -0, rotate: 0 }}
        exit={{ opacity: 0, y: 0, rotate: -0 }}
        transition={{
          duration: 0.5,
          times: [0, 0.5, 1],
          delay: 0.35,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        {children}
      </anim.div>
    </AnimatePresence>
  )
}

export default Transition;