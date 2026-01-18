'use client'

import { motion } from 'framer-motion'

interface FlowerAnimationProps {
  className?: string
}

export default function FlowerAnimation({ className = '' }: FlowerAnimationProps) {
  const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼']

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: 6 }).map((_, i) => {
        const flower = flowers[i % flowers.length]
        const left = `${10 + i * 15}%`
        const delay = i * 0.5
        const duration = 8 + Math.random() * 4

        return (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{ left }}
            animate={{
              y: [0, -100, -200],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8],
              opacity: [0.2, 0.3, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          >
            {flower}
          </motion.div>
        )
      })}
    </div>
  )
}

