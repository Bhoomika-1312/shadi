'use client'

import { motion } from 'framer-motion'
import { Heart, Calendar, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface LoveStorySectionProps {
  audioTime: number
}

// Icons mapping to indices
const eventIcons = [Heart, Sparkles, Heart, Calendar]

export default function LoveStorySection({ audioTime }: LoveStorySectionProps) {
  const { t } = useLanguage()

  const getAnimationDelay = (index: number) => {
    return index * 0.2 // Simple staggered delay
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-decorative text-amber-800 mb-4 drop-shadow-sm">
            {t.loveStory.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-serif italic">
            {t.loveStory.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-200 via-yellow-400 to-amber-200 transform md:-translate-x-1/2 rounded-full opacity-50" />

          {/* Timeline events */}
          <div className="space-y-12">
            {t.loveStory.events.map((event, index) => {
              const Icon = eventIcons[index] || Heart
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: getAnimationDelay(index), duration: 0.8 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-amber-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 ${isEven ? 'md:pr-1/2 md:pl-0 pl-16' : 'md:pl-1/2 md:pr-0 pl-16'
                      }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass-royal rounded-2xl p-6 relative group hover:border-amber-400 transition-all duration-500"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-amber-600 font-semibold tracking-wide text-sm uppercase">
                            {index === 0 || index === 1 ? '9th February 2026' : '10th February 2026'}
                          </span>
                          <h3 className="text-xl font-serif text-amber-800">{event.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-light">{event.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section >
  )
}

