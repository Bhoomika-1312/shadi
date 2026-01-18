'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="fixed top-6 right-6 z-50">
            <motion.div
                className="bg-white/80 backdrop-blur-md rounded-full p-1 shadow-lg border border-amber-100 flex items-center relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-1.5 rounded-full text-sm font-serif font-medium transition-all duration-300 ${language === 'en'
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                            : 'text-gray-600 hover:bg-amber-50'
                        }`}
                >
                    ENG
                </button>
                <button
                    onClick={() => setLanguage('hi')}
                    className={`px-4 py-1.5 rounded-full text-sm font-serif font-medium transition-all duration-300 ${language === 'hi'
                            ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md'
                            : 'text-gray-600 hover:bg-rose-50'
                        }`}
                >
                    हिंदी
                </button>
            </motion.div>
        </div>
    )
}
