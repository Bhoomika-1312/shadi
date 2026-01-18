'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Heart } from 'lucide-react'

import { useLanguage } from '@/context/LanguageContext'

export default function EventDetailsSection() {
  // const { t } = useLanguage()
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50/30 via-white to-amber-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-decorative text-amber-800 mb-4 drop-shadow-sm">
            {t.eventDetails.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 font-serif italic">
            {t.eventDetails.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.eventDetails.events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="glass-royal rounded-2xl p-8 hover:border-amber-400 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-amber-800">{event.title}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-800 font-serif tracking-wide">{t.eventDetails.dateLabel}</p>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-800 font-serif tracking-wide">{t.eventDetails.timeLabel}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-800 font-serif tracking-wide">{t.eventDetails.venueLabel}</p>
                    <p className="text-gray-600">{event.venue}</p>
                    <p className="text-sm text-gray-500 mt-1 italic">{event.address}</p>
                  </div>
                </div>

                <p className="text-gray-600 pt-4 border-t border-gold-100 italic">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

