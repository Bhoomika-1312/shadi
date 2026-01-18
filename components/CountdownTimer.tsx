'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function CountdownTimer() {
    const { t } = useLanguage()
    const targetDate = new Date('2026-02-10T00:00:00')

    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date()
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="w-full py-20 px-4 relative overflow-hidden">
            {/* Atmosphere Decor is now handled by SacredDecor in the parent layout */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-5xl mx-auto flex flex-col items-center relative z-10"
            >
                {/* Heading with Flourishes */}
                <div className="flex items-center justify-center gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-amber-400 text-3xl md:text-4xl select-none"
                    >
                        ❧
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-decorative text-[#B45309] tracking-tight px-4">
                        Countdown to Forever
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-amber-400 text-3xl md:text-4xl select-none transform scale-x-[-1]"
                    >
                        ❧
                    </motion.div>
                </div>

                {/* Luxury Countdown Card (Pill Shape) */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-14 text-center glass-royal p-10 md:p-20 rounded-[4rem] shadow-luxury-gold relative group border-[#D4AF37]/10"
                >
                    {/* Subtle Pulse Glow */}
                    <div className="absolute inset-0 rounded-[4rem] bg-[#F5E6DA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl -z-10 animate-pulse"></div>

                    <TimeUnit value={timeLeft.days} label="Days" />
                    <div className="hidden md:block h-24 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent self-center"></div>
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <div className="hidden md:block h-24 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent self-center"></div>
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <div className="hidden md:block h-24 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent self-center"></div>
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </motion.div>

                {/* Date Display Section */}
                <div className="mt-16 flex flex-col items-center">
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-6"></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-[#B45309] font-serif italic text-lg md:text-2xl tracking-[0.4em] uppercase"
                    >
                        February 10, 2026
                    </motion.div>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mt-6 opacity-40"></div>
                </div>
            </motion.div>
        </section>
    )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center group min-w-[100px]">
            <div className="relative overflow-hidden h-20 md:h-24 flex items-center justify-center">
                <motion.div
                    key={value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <span className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#B45309] via-[#D4AF37] to-[#B45309] font-bold">
                        {value < 10 ? `0${value}` : value}
                    </span>
                </motion.div>
            </div>

            <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-[#92400E]/60 font-medium mt-6 font-serif">
                {label}
            </span>
        </div>
    )
}
