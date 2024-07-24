'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, useAnimate, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

function NumberIncrementDecrement() {
  const [count, setCount] = useState(0)
  const [direction, setDirection] = useState<'up' | 'down'>('up')

  const [scope, animate] = useAnimate()

  function increment() {
    if (count === 20) {
      // Animates the container to shake
      animate(scope.current, {
        x: [0, 5, -5, 0],
        transition: {
          duration: 0.2,
        },
      })

      return
    }

    setCount(count + 1)
    setDirection('up')
  }

  function decrement() {
    if (count === 0) {
      // Animates the container to shake
      animate(scope.current, {
        x: [0, 5, -5, 0],
        transition: {
          duration: 0.2,
        },
      })

      return
    }

    setCount(count - 1)
    setDirection('down')
  }

  return (
    <div className='w-full h-dvh flex flex-col items-center justify-center bg-black gap-8'>
      <div ref={scope} className='flex items-center gap-8 text-3xl'>
        <button
          onClick={decrement}
          className={cn(
            'flex h-14 w-14 text-white items-center justify-center rounded-full bg-[#262626] text-xl active:scale-90'
          )}
        >
          <Minus />
        </button>

        <h3 className='text-center w-12'>
          <AnimatePresence mode='popLayout' custom={direction}>
            {count
              .toString()
              .split('')
              .map((char, index) => (
                <motion.span
                  key={`${char} ${index}`}
                  initial={{
                    y: direction === 'up' ? 30 : -30,
                    opacity: 0,
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                  }}
                  exit={{
                    y: direction === 'up' ? -30 : 30,
                    opacity: 0,
                    filter: 'blur(4px)',
                  }}
                  className='inline-block tabular-nums text-white'
                >
                  {char}
                </motion.span>
              ))}
          </AnimatePresence>
        </h3>

        <button
          onClick={increment}
          className={cn(
            'flex h-14 w-14 text-white items-center justify-center rounded-full bg-[#262626] text-xl active:scale-90'
          )}
        >
          <Plus />
        </button>
      </div>

      <p className='text-slate-300'>20 is the max number.</p>
    </div>
  )
}

export default NumberIncrementDecrement
