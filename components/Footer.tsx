'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { MessageSquare } from 'lucide-react'

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="relative py-24 px-4 overflow-hidden mt-20">
            {/* Highlighted Footer Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5E6DA]/40 to-[#F5E6DA]/60 -z-10"></div>
            <div className="absolute inset-0 bg-grain opacity-[0.02] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"></div>
                    <p className="text-[#B45309] font-serif text-2xl italic mb-6">
                        {t.withLove},
                    </p>
                    <h2 className="text-[#92400E] font-decorative text-5xl md:text-7xl mb-8 drop-shadow-sm">
                        {t.fromBhatias}
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="centre gap-10 border-y border-[#D4AF37]/20 py-12 mb-12 ">
                    <div className="space-y-3">
                        <p className="text-[#9CA3AF] font-serif uppercase tracking-[0.2em] text-xs">Auspicious Blessings</p>
                        <p className="text-[#92400E] font-serif text-lg md:text-xl font-medium">
                            {t.parents.groom}
                        </p>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <p className="text-[#B45309] font-serif tracking-widest text-lg font-light">
                        {t.parents.contact}
                    </p>

                    <div className="pt-8 space-y-3">
                        <p className="text-[10px] md:text-xs text-[#92400E]/40 font-serif tracking-[0.5em] uppercase">
                            © 2026 {t.weddingInvitation}
                        </p>
                        <p className="text-[10px] md:text-xs text-[#B45309]/30 font-serif tracking-widest italic">
                            {t.madeWithLove}
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
