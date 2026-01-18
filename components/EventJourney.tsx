'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

// Simplified events list for the main page journey
const journeyEvents = [
    {
        title: "The Engagement",
        date: "9th Feb 2026",
        icon: "💍",
        desc: "A promise of forever."
    },
    {
        title: "Haldi Ceremony",
        date: "10th Feb 2026",
        icon: "✨",
        desc: "Colors of joy and blessings."
    },
    {
        title: "The Wedding",
        date: "10th Feb 2026",
        icon: "💒",
        desc: "Two souls united in love."
    }
]

export default function EventJourney() {
    const { t } = useLanguage()

    return (
        <section className="py-20 px-4 relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-amber-300 to-transparent hidden md:block"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-decorative text-amber-700 mb-2">Our Celebration Journey</h2>
                    <p className="text-gray-500 font-serif italic">Mark your calendars for these special moments</p>
                </motion.div>

                <div className="space-y-12">
                    {journeyEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Date/Icon Side */}
                            <div className="flex-1 text-center md:text-right">
                                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-start' : 'md:items-end'} items-center`}>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-3xl shadow-lg border-4 border-white z-10 mb-2"
                                    >
                                        {event.icon}
                                    </motion.div>
                                    <span className="text-amber-600 font-serif font-bold text-lg bg-amber-50 px-4 py-1 rounded-full border border-amber-100">
                                        {event.date}
                                    </span>
                                </div>
                            </div>

                            {/* Content Component */}
                            <div className="flex-1">
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-amber-100 text-center md:text-left relative group hover:-translate-y-1 transition-transform duration-300">
                                    {/* Arrow */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45 ${index % 2 === 0 ? '-left-2 border-l border-b border-amber-100' : '-right-2 border-r border-t border-amber-100'} hidden md:block`}></div>

                                    <h3 className="text-2xl font-serif text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">{event.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
