'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const buttons = {
  idle: {
    label: 'Idle',
    dimensions: {
      width: 100,
      height: 28,
      radius: 28,
    },
  },
  call: {
    label: 'Call',
    dimensions: {
      width: 284,
      height: 56,
      radius: 99,
    },
  },
  faceId: {
    label: 'Face ID',
    dimensions: {
      width: 96,
      height: 96,
      radius: 28,
    },
  },
}

const FaceId = () => (
  <motion.svg
    initial={{ opacity: 0, filter: 'blur(4px)', y: -5 }}
    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    exit={{ opacity: 0, filter: 'blur(4px)', y: 5 }}
    width='50'
    height='50'
    viewBox='0 0 50 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.2222 2H7.11111C4.28832 2 2 4.28832 2 7.11111V12.2222'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M37.7778 2H42.8889C45.7117 2 48 4.28832 48 7.11111V12.2222'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M35.2222 14.7778V19.8889'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14.7778 14.7778V19.8889'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M17.3333 35.2222C17.3333 35.2222 19.8889 37.7777 25 37.7777C30.1111 37.7777 32.6666 35.2222 32.6666 35.2222'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M24.9999 14.7778V27.5556H22.4444'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12.2222 48H7.11111C4.28832 48 2 45.7118 2 42.8889V37.7778'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M37.7778 48H42.8889C45.7117 48 48 45.7118 48 42.8889V37.7778'
      stroke='#D9D9D9'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </motion.svg>
)

const Call = () => (
  <motion.div
    className='mx-3 flex w-full items-center justify-between'
    initial={{ opacity: 0, filter: 'blur(4px)', y: -5 }}
    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    exit={{ opacity: 0, filter: 'blur(4px)', y: 5 }}
  >
    <div className='flex items-center'>
      <Image
        src='/aujla.jpg'
        width={36}
        height={36}
        alt='Aujlaaa'
        className='rounded-full'
      />
      <div className='ml-2 flex w-20 flex-col'>
        <span className='text-xs text-neutral-500'>mobile</span>
        <span className='whitespace-nowrap text-xs text-neutral-100'>
          Karan Aujla
        </span>
      </div>
    </div>
    <div className='flex items-center gap-x-2'>
      <button className='rotate-[135deg] rounded-full bg-[#F35143] p-2'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 44 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M36.031 44C36.015 44 35.999 44 35.984 44C28.467 43.755 19.663 36.47 13.596 30.4C7.52397 24.329 0.238974 15.521 0.00197393 8.03804C-0.0820261 5.41304 6.36097 0.746036 6.42597 0.701036C8.09697 -0.464964 9.95297 -0.0519642 10.715 1.00304C11.23 1.71704 16.112 9.11904 16.643 9.95804C17.195 10.827 17.114 12.124 16.425 13.427C16.048 14.147 14.789 16.36 14.2 17.392C14.834 18.298 16.52 20.519 19.998 23.996C23.475 27.473 25.695 29.16 26.604 29.797C27.636 29.208 29.848 27.949 30.57 27.569C31.85 26.89 33.141 26.806 34.021 27.344C34.917 27.893 42.296 32.799 42.976 33.275C43.548 33.675 43.916 34.364 43.987 35.165C44.058 35.974 43.81 36.829 43.288 37.574C43.245 37.638 38.633 44 36.031 44Z'
            fill='white'
          />
        </svg>
      </button>
      <button className='rounded-full bg-[#57D76B] p-2'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 44 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M36.031 44C36.015 44 35.999 44 35.984 44C28.467 43.755 19.663 36.47 13.596 30.4C7.52397 24.329 0.238974 15.521 0.00197393 8.03804C-0.0820261 5.41304 6.36097 0.746036 6.42597 0.701036C8.09697 -0.464964 9.95297 -0.0519642 10.715 1.00304C11.23 1.71704 16.112 9.11904 16.643 9.95804C17.195 10.827 17.114 12.124 16.425 13.427C16.048 14.147 14.789 16.36 14.2 17.392C14.834 18.298 16.52 20.519 19.998 23.996C23.475 27.473 25.695 29.16 26.604 29.797C27.636 29.208 29.848 27.949 30.57 27.569C31.85 26.89 33.141 26.806 34.021 27.344C34.917 27.893 42.296 32.799 42.976 33.275C43.548 33.675 43.916 34.364 43.987 35.165C44.058 35.974 43.81 36.829 43.288 37.574C43.245 37.638 38.633 44 36.031 44Z'
            fill='white'
          />
        </svg>
      </button>
    </div>
  </motion.div>
)

function DynamicIslandsPage() {
  const [state, setState] = useState(buttons.idle)

  return (
    <div className='min-h-dvh flex flex-col items-center justify-between py-40'>
      <motion.div
        initial={{
          width: buttons.idle.dimensions.width,
          height: buttons.idle.dimensions.height,
          borderRadius: buttons.idle.dimensions.radius,
        }}
        animate={{
          width: state.dimensions.width,
          height: state.dimensions.height,
          borderRadius: state.dimensions.radius,
        }}
        transition={{
          type: 'spring',
          bounce: 0.45,
          ease: 'linear',
        }}
        className='overflow-hidden bg-black select-none flex items-center justify-center'
      >
        {state.label === 'Face ID' ? <FaceId /> : null}
        {state.label === 'Call' ? <Call /> : null}
      </motion.div>

      <div className='flex items-center gap-x-7'>
        {Object.entries(buttons).map(([key, option]) => {
          const { label, dimensions } = option

          return (
            <motion.button
              key={key}
              className='rounded-xl bg-[#303030] px-6 py-2 text-base text-white'
              onClick={() => setState(option)}
              whileTap={{ scale: 0.85 }}
            >
              {label}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default DynamicIslandsPage
