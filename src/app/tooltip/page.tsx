'use client'

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import React, { useState } from 'react'

const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
]

function AnimatedTooltipPage() {
  const [activePerson, setActivePerson] = useState<number | null>(null)
  const x = useMotionValue(0)

  const transformX = useTransform(x, [-100, 100], [-50, 50])
  const translateX = useSpring(transformX, { stiffness: 100, damping: 20 })

  const rotateTransform = useTransform(x, [-100, 100], [-40, 40])
  const rotate = useSpring(rotateTransform, { stiffness: 100, damping: 20 })

  function handleMouseMove(event: React.MouseEvent<HTMLImageElement>) {
    const halfWidth = event.currentTarget.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#131018]'>
      {people.map((person) => (
        <div
          key={person.id}
          className='-mr-4 relative'
          onMouseEnter={() => setActivePerson(person.id)}
          onMouseLeave={() => setActivePerson(null)}
        >
          <AnimatePresence initial={false} mode='popLayout'>
            {activePerson === person.id ? (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 240,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                }}
                className='absolute whitespace-nowrap -top-20 -left-1/2 translate-x-1/2 bg-white rounded-xl z-50 shadow-xl px-4 py-2 flex flex-col gap-2 justify-center items-center'
              >
                <h1 className='text-lg font-bold'>{person.name}</h1>
                <p className='text-sm'>{person.designation}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <img
            src={person.image}
            alt={person.name}
            className='w-16 h-16 rounded-full object-cover'
            onMouseMove={handleMouseMove}
          />
        </div>
      ))}
    </div>
  )
}

export default AnimatedTooltipPage
