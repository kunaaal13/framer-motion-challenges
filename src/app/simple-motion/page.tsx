'use client'

import React from 'react'
import { motion } from 'framer-motion'

function SimpleMotionExamples() {
  return (
    <div className='flex flex-col items-center justify-center gap-[250px] min-h-screen bg-[#131018]'>
      <motion.div
        className='size-[200px] rounded-[20px] border-[3px] border-dotted border-red-600'
        animate={{
          opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          x: [0, 0, 50, 100, 100, 100, 50, 0, 0, 0, 0],
          y: [0, 0, 0, 0, 50, 100, 100, 100, 50, 0, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'linear',
            repeatType: 'reverse',
          },
        }}
      ></motion.div>

      <motion.div
        className='bg-white size-[200px] mb-[500px]'
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          borderRadius: [0, 0, 100, 100, 0],
          rotate: [0, 0, 180, 180, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
          },
        }}
      ></motion.div>
    </div>
  )
}

export default SimpleMotionExamples
