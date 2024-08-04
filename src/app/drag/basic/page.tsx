'use client'

import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

function DragBasic() {
  const x = useMotionValue(0)
  const bgColor = useTransform(
    x,
    [-100, 0, 100],
    ['#c1a9c8', '#306a87', '#32b0de']
  )
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5])
  const borderRadius = useTransform(x, [-100, 0, 100], ['50%', '0%', '50%'])

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#131018]'>
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        style={{
          x,
          backgroundColor: bgColor,
          borderRadius,
          scale,
        }}
        className='w-32 h-32 bg-[#306a87] rounded-md flex items-center justify-center text-white'
      />
    </div>
  )
}

export default DragBasic
