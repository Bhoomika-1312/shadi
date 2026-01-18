'use client'

import { motion } from 'framer-motion'

export default function SacredDecor() {
    const petals = ['🌸', '🌹', '✨']

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Serene Atmosphere Decor */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5E6DA]/30 via-[#FCF8F5] to-[#FFFFFF] -z-20"></div>

            {/* Subtle Aura Glow (Slow Pulses) */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#F5E6DA]/20 rounded-full blur-[140px]"
            />
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#E8D5C4]/15 rounded-full blur-[140px]"
            />

            {/* Very Subtle Floating Petals (Sacred Focus) */}
            {[...Array(6)].map((_, i) => {
                const char = petals[i % petals.length]
                const left = `${15 + Math.random() * 70}%`
                const delay = Math.random() * 20
                const duration = 25 + Math.random() * 20
                const size = 12 + Math.random() * 10

                return (
                    <motion.div
                        key={i}
                        className="absolute select-none opacity-20"
                        style={{
                            left,
                            fontSize: `${size}px`,
                            bottom: "-10%"
                        }}
                        animate={{
                            y: ["0vh", "-110vh"],
                            x: [0, Math.random() * 30 - 15, 0],
                            rotate: [0, 180],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {char}
                    </motion.div>
                )
            })}

            {/* Elegant Silk Paper Texture */}
            <div className="absolute inset-x-0 inset-y-0 silk-texture opacity-[0.4] mix-blend-soft-light"></div>
            <div className="absolute inset-0 bg-grain opacity-[0.015] pointer-events-none"></div>
        </div>
    )
}
