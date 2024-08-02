'use client'

import { cn } from '@/lib/utils'
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import React, { useMemo, useState } from 'react'
import useMeasure from 'react-use-measure'

const sportsArray = [
  'Soccer',
  'Basketball',
  'Baseball',
  'Tennis',
  'Golf',
  'Cricket',
  'Rugby',
  'Hockey',
  'Table Tennis',
  'Badminton',
  'Volleyball',
  'American Football',
  'Boxing',
  'MMA',
  'Wrestling',
  'Swimming',
  'Athletics',
  'Cycling',
  'Gymnastics',
  'Skiing',
  'Snowboarding',
  'Skateboarding',
  'Surfing',
  'Rowing',
  'Sailing',
  'Fencing',
  'Judo',
  'Karate',
  'Taekwondo',
  'Archery',
  'Equestrian',
  'Lacrosse',
  'Handball',
  'Softball',
  'Squash',
  'Racquetball',
  'Bobsleigh',
  'Curling',
  'Figure Skating',
  'Diving',
]

type ChipProps = {
  name: string
  isSelected: boolean
  clickHandler: (name: string) => void
}

function Chip({ name, isSelected, clickHandler }: ChipProps) {
  return (
    <motion.li
      layout='position'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <motion.button
        layout
        className={cn(
          'flex h-10 items-center gap-2 border border-[#373538] bg-[#161417] px-4 text-[#A3A1A3]',
          isSelected && 'border-[#452C28] bg-[#1C1210] text-[#EA885A]'
        )}
        style={{ borderRadius: 9999 }}
        onClick={() => clickHandler(name)}
      >
        <motion.span layout className='inline-block'>
          {name}
        </motion.span>

        {isSelected && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <CheckCircle className='h-4 w-4' />
          </motion.span>
        )}
      </motion.button>
    </motion.li>
  )
}

function ChipsPage() {
  const [showFiltered, setShowFiltered] = useState(false)
  const [selectedSports, setSelectedSports] = useState<string[]>([])

  const [ref, { height }] = useMeasure()

  const chips = useMemo(() => {
    const list = sportsArray.map((sport) => {
      return {
        name: sport,
        isSelected: selectedSports.includes(sport),
      }
    })

    return showFiltered ? list.filter((item) => item.isSelected) : list
  }, [selectedSports, showFiltered])

  return (
    <div className='flex h-dvh w-full items-center justify-center bg-[#0E0C0E] px-4 text-white'>
      <div className='w-full max-w-4xl'>
        <h1 className='text-xl font-bold'>What are your favorite sports?</h1>

        <MotionConfig
          transition={{
            duration: 0.7,
            type: 'spring',
            bounce: showFiltered ? 0 : undefined,
          }}
        >
          <motion.div
            initial={{
              height: 'auto',
            }}
            animate={{
              height: height > 0 ? height : undefined,
            }}
          >
            <motion.ul ref={ref} className='mt-4 flex w-full flex-wrap gap-2'>
              <LayoutGroup>
                <AnimatePresence initial={false} mode='popLayout'>
                  {chips.map((chip) => (
                    <Chip
                      key={chip.name}
                      name={chip.name}
                      isSelected={chip.isSelected}
                      clickHandler={() => {
                        if (chip.isSelected) {
                          setSelectedSports(
                            selectedSports.filter((item) => item !== chip.name)
                          )
                        } else {
                          setSelectedSports([...selectedSports, chip.name])
                        }
                      }}
                    />
                  ))}
                </AnimatePresence>
              </LayoutGroup>
            </motion.ul>
          </motion.div>
        </MotionConfig>

        <div className='flex justify-center py-8'>
          <button
            className='border rounded-full border-[#452C28] bg-[#1C1210] py-2 px-4 text-[#EA885A] duration-200 active:scale-95'
            onClick={() => setShowFiltered(!showFiltered)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChipsPage
