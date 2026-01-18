'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface HeroSectionProps {
  inviteeName?: string
  audioTime: number
}

export default function HeroSection({ inviteeName, audioTime }: HeroSectionProps) {
  const { t } = useLanguage()

  // Simple reveal animation state
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden py-10">
      {/* Background Decorative Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#F5E6DA]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white/40 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/10 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-2 px-4"
      >
        {/* Sacred Mantra Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            className="text-[#B45309] font-serif text-lg md:text-2xl tracking-[0.5em] uppercase"
          >
            || {t.omNamahShivay} ||
          </motion.div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto"
          />
        </div>

        {/* Center Focus: Lord Ganesha with Sacred Aura */}
        <div className="relative pt-2">
          {/* Radial Light Ring Animation (Center Glow) */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-amber-100/20 rounded-full blur-[80px] -z-10"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center"
          >
            {/* Elegant Golden Halo with Depth */}
            <div className="absolute inset-0 rounded-full border-[1px] border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]"></div>
            <div className="absolute inset-4 rounded-full border-[1.5px] border-[#D4AF37]/20"></div>

            <div className="relative w-full h-full p-8 flex items-center justify-center">
              <Image
                src="/images/ganesha.jpg"
                alt="Lord Ganesha"
                fill
                className="object-contain p-2 drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Sacred Titles */}
        <div className="space-y-2 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-8xl font-decorative text-[#B45309] drop-shadow-sm leading-none py-2">
              {t.shubhVivah}
            </h1>
            <div className="mt-2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg md:text-2xl font-serif text-gray-500 tracking-[0.2em] font-light italic"
          >
            Wedding Invitation
          </motion.p>
        </div>

        {/* Intimate Personal Greeting */}
        {inviteeName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="pt-2 flex flex-col items-center"
          >
            <p className="text-[#9CA3AF] font-serif italic text-base mb-1">Dear</p>
            <motion.h2
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ delay: 2.5, duration: 2 }}
              className="text-2xl md:text-3xl font-serif text-[#92400E] uppercase font-light"
            >
              {inviteeName}
            </motion.h2>
          </motion.div>
        )}

        {/* Refined Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="pt-4 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37]/40 to-transparent"></div>
          <div className="w-6 h-10 border border-[#D4AF37]/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-1 bg-[#D4AF37]/60 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
