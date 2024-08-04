'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Loader } from 'lucide-react'
import { useState } from 'react'

const variants = {
  initial: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 12,
      stiffness: 130,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 12,
      stiffness: 130,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 12,
      stiffness: 130,
    },
  },
}

function LoginButton() {
  const [activeState, setActiveState] = useState<
    'Log In' | 'Loading' | 'Success'
  >('Log In')

  function handleClick() {
    if (activeState === 'Success') {
      return
    }

    setActiveState('Loading')

    setTimeout(() => {
      setActiveState('Success')
    }, 3000)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#131018]'>
      <motion.button
        className='bg-white w-80 h-12 rounded-lg text-black gap-4 flex items-center justify-center'
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence initial={false} mode='popLayout'>
          {activeState === 'Log In' ? (
            <motion.span
              key={'Log In'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              Log In
            </motion.span>
          ) : activeState === 'Success' ? (
            <motion.div
              key={'Success'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='flex items-center gap-4'
            >
              <CheckCircle className='size-5' />
              <span>Success</span>
            </motion.div>
          ) : (
            <motion.div
              key={'Loading'}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='flex items-center gap-4'
            >
              <Loader className='animate-spin size-5' />
              <span>Loading</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default LoginButton
