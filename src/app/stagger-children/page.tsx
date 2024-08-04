'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const HamburgerIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='4' x2='20' y1='12' y2='12' />
    <line x1='4' x2='20' y1='6' y2='6' />
    <line x1='4' x2='20' y1='18' y2='18' />
  </svg>
)

const menuItems = ['Home', 'Invoices', 'Usage', 'Profile', 'Settings']

function StaggerChildren() {
  const [navigationIsVisible, setNavigationIsVisible] = useState(false)
  return (
    <div className='bg-[#131018]'>
      {' '}
      <motion.div
        initial='hidden'
        animate={navigationIsVisible ? 'visible' : 'hidden'}
        variants={{
          hidden: {
            width: 74,
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
              when: 'afterChildren',
            },
          },
          visible: { width: 200, transition: { staggerChildren: 0.1 } },
        }}
        className='bg-[rgba(10,10,10,.8)] h-screen p-3 text-white'
      >
        <button
          className='bg-white/5 border border-black rounded-md p-3 mb-4'
          onClick={() => setNavigationIsVisible((visible) => !visible)}
        >
          <span className='sr-only'>Toggle navigation</span>
          <HamburgerIcon />
        </button>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -100,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                className='py-3 hover:bg-white/5 px-3 rounded-md transition-colors'
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  )
}

export default StaggerChildren
