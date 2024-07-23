'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { XIcon } from 'lucide-react'
import { useState } from 'react'

interface Toast {
  id: string
  title: string
  message: string
}

function SonnerPage() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [hovered, setHovered] = useState(false)

  function addToast({ title, message }: { title: string; message: string }) {
    const id = (Math.random() * 1000005).toString()

    setToasts([
      ...toasts,
      {
        id,
        title,
        message,
      },
    ])
  }

  function removeToast(id: string) {
    setToasts(toasts.filter((toast) => toast.id !== id))
  }

  function getLast3Toasts() {
    return toasts.slice(-3)
  }

  return (
    <div className='w-full h-dvh flex items-center justify-center'>
      <Button
        onClick={() =>
          addToast({
            title: 'Hello',
            message: 'This is a toast inspired by Sonner',
          })
        }
      >
        Add Toast
      </Button>

      <MotionConfig transition={{ duration: 0.6, type: 'spring', bounce: 0 }}>
        {toasts.length > 0 ? (
          <ul
            className='fixed bottom-6 right-4 w-[350px] flex flex-col gap-2'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <AnimatePresence mode='popLayout'>
              {toasts.map((toast, index) => (
                <motion.li
                  layout
                  key={toast.id}
                  className={cn(
                    'relative w-full flex flex-col justify-center rounded-lg border border-[hsl(0,0%,93%)] bg-white p-3 shadow-[0_4px_12px_#0000001a] gap-1'
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: toasts.length - 1 - index > 2 ? 0 : 1,
                    y: 0,
                    scale: hovered ? 1 : 1 - (toasts.length - 1 - index) * 0.1,
                    marginBottom: hovered
                      ? '0'
                      : index !== toasts.length - 1
                      ? '-60px'
                      : '0',
                  }}
                  exit={{ opacity: 0, y: 40 }}
                >
                  <div className='flex items-center justify-between'>
                    <p className='text-sm'>{toast.title}</p>

                    <XIcon
                      size={16}
                      className='cursor-pointer'
                      onClick={() => removeToast(toast.id)}
                    />
                  </div>

                  <p className='text-xs text-gray-600'>{toast.message}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        ) : null}
      </MotionConfig>
    </div>
  )
}

export default SonnerPage
