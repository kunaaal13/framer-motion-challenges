'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Expand Right -> Expamd Bottom -> Contract to basic LEFT -> go below and fade out

function BasicMultiStep() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-[#131018]'>
      <div className='w-[150px] overflow-hidden flex relative flex-col aspect-[2/4] text-white bg-[#41352a] rounded-2xl'>
        <div className='h-full basic-multi-step-fadeout'>
          <motion.div
            animate={{
              opacity: [0, 1, 1, 1, 1, 1, 0],
              scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
              scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1],
              duration: 18,
            }}
            className='text-[80px] origin-top-left [font-family:monospace] leading-[0.8] inset-1 absolute break-all'
          >
            responsive
          </motion.div>
        </div>
        <p className='mt-auto p-2'>Make your animations work on all devices</p>
      </div>
    </div>
  )
}

export default BasicMultiStep
