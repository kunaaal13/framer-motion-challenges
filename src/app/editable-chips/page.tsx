'use client'

import { cn } from '@/lib/utils'
import { LayoutGroup, MotionConfig, motion } from 'framer-motion'
import { CheckCheck, Pencil } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'

// Edit ->
// Not Edit ->

function EditableChipsPage() {
  const [value, setValue] = useState('Four You')
  const [isEditing, setIsEditing] = useState(false)

  const [ref, { width }] = useMeasure()

  return (
    <div className='flex h-dvh w-full items-center justify-center bg-black px-4 text-white'>
      <div className='w-full max-w-4xl flex items-center justify-end'>
        <MotionConfig
          transition={{
            duration: 0.7,
            type: 'spring',
            bounce: isEditing ? 0 : undefined,
          }}
        >
          <motion.div
            className={cn('border rounded-full')}
            initial={{
              width: 'auto',
            }}
            animate={{
              width: width > 0 ? width : undefined,
              backgroundColor: isEditing ? 'white' : 'black',
              borderColor: isEditing ? 'black' : 'white',
            }}
          >
            <LayoutGroup>
              <motion.div
                ref={ref}
                layout='size'
                className='px-2 py-2 flex items-center gap-2'
              >
                <motion.div
                  layout
                  className='flex items-center gap-3 overflow-hidden'
                >
                  {!isEditing ? (
                    <motion.span layout className='text-red-300'>
                      {value}
                    </motion.span>
                  ) : (
                    <motion.input
                      layout
                      className={cn(
                        'bg-transparent outline-none w-40',
                        'text-black'
                      )}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  )}

                  <motion.button
                    layout
                    onClick={() => setIsEditing(!isEditing)}
                    className={cn(
                      'size-8 rounded-full flex items-center justify-center',
                      isEditing
                        ? 'bg-black text-white'
                        : 'bg-white text-black border border-white'
                    )}
                  >
                    {isEditing ? (
                      <CheckCheck className='size-5' />
                    ) : (
                      <Pencil className='size-5' />
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </motion.div>
        </MotionConfig>
      </div>
    </div>
  )
}

export default EditableChipsPage
