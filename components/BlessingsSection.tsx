'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface Blessing {
  name: string
  relationship: string
  message: string
}

export default function BlessingsSection() {
  const { t } = useLanguage()

  return (
    <section id="blessings-section" className="py-20 px-4 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Floating Hearts Animation */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-200 pointer-events-none select-none"
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 500 + 500,
            opacity: 0
          }}
          animate={{
            y: -100,
            opacity: [0, 0.5, 0],
            rotate: [0, 45, -45, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 20}px`
          }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-4xl animate-bounce inline-block mb-2">🕊️</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-4 tracking-wider uppercase">
            {t.blessings.parentsTitle}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px bg-amber-200 w-12"></div>
            <span className="text-amber-400 text-xl">❦</span>
            <div className="h-px bg-amber-200 w-12"></div>
          </div>
          <p className="text-lg text-gray-600 mt-2">
            {t.blessings.parentsSubtitle}
          </p>
        </motion.div>

        {/* Blessings Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.blessings.list.map((blessing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100 relative group h-fit"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-3xl opacity-0 group-hover:opacity-30 transition duration-500 blur"></div>
              <Quote className="w-10 h-10 text-amber-200 absolute top-6 right-6 opacity-30" />

              <div className="relative z-10">
                <div className="mb-6 border-b border-amber-50 pb-4">
                  <h3 className="text-2xl font-cinzel text-gray-800 mb-1 tracking-wide">{blessing.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <p className="text-sm font-medium text-amber-600 tracking-wide uppercase">{blessing.relationship}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed italic text-lg relative">
                  <span className="text-amber-400 mr-1">"</span>
                  {blessing.message}
                  <span className="text-amber-400 ml-1">"</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
