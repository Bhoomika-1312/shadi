'use client'

import { motion } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LoadingScreen from '@/components/LoadingScreen'
import PhotoGallery from '@/components/PhotoGallery'
import Link from 'next/link'
import { Home as HomeIcon, Heart } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Footer from '@/components/Footer'

function MemoriesContent() {
    const { t } = useLanguage()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [hasRSVP, setHasRSVP] = useState(false)

    useEffect(() => {
        // Check if user has submitted RSVP
        const rsvpSubmitted = localStorage.getItem('rsvpSubmitted')
        setHasRSVP(rsvpSubmitted === 'true')
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <LoadingScreen isLoading={true} />
    }

    // If no RSVP, show unlock prompt
    if (!hasRSVP) {
        return (
            <main className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white flex items-center justify-center p-4">
                <Link
                    href="/"
                    className="fixed top-6 left-6 z-50 p-3 glass-royal rounded-full hover:scale-110 transition-transform text-amber-600"
                >
                    <HomeIcon className="w-6 h-6" />
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-royal rounded-3xl p-12 max-w-md text-center shadow-2xl"
                >
                    <div className="w-20 h-20 bg-gradient-to-tr from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-10 h-10 text-white fill-current" />
                    </div>
                    <h2 className="text-3xl font-decorative text-amber-800 mb-4">
                        {t.memories.title}
                    </h2>
                    <p className="text-gray-600 mb-8 font-serif">
                        {t.memories.unlockPrompt}
                    </p>
                    <Link
                        href="/rsvp"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        Go to RSVP
                    </Link>
                </motion.div>
            </main>
        )
    }

    return (
        <main className="relative min-h-screen bg-gradient-to-b from-amber-50/30 to-white overflow-hidden">
            <LoadingScreen isLoading={isLoading} />

            {/* Floating Love Animations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                {/* Floating Hearts */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`heart-${i}`}
                        className="absolute text-4xl"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 50,
                            opacity: 0.6,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            y: -100,
                            x: Math.random() * window.innerWidth,
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        {i % 3 === 0 ? '💕' : i % 3 === 1 ? '💖' : '❤️'}
                    </motion.div>
                ))}

                {/* Floating Sparkles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`sparkle-${i}`}
                        className="absolute text-2xl"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0.5],
                            rotate: 360
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        ✨
                    </motion.div>
                ))}

                {/* Floating Roses */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`rose-${i}`}
                        className="absolute text-3xl"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: -50,
                            opacity: 0.7,
                            rotate: 0
                        }}
                        animate={{
                            y: window.innerHeight + 50,
                            rotate: 360,
                            x: Math.random() * window.innerWidth
                        }}
                        transition={{
                            duration: Math.random() * 15 + 20,
                            repeat: Infinity,
                            delay: Math.random() * 8,
                            ease: "linear"
                        }}
                    >
                        🌹
                    </motion.div>
                ))}
            </div>

            {/* Return to Home */}
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 p-3 glass-royal rounded-full hover:scale-110 transition-transform text-amber-600"
            >
                <HomeIcon className="w-6 h-6" />
            </Link>

            {/* Header */}
            <div className="pt-20 pb-10 px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-decorative text-amber-800 mb-4 drop-shadow-sm">
                        {t.memories.title}
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-gray-600 font-serif italic">
                        {t.memories.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Photo Gallery */}
            <div className="relative z-10">
                <PhotoGallery audioTime={0} showTitle={false} />
            </div>

            <Footer />
        </main>
    )
}

export default function MemoriesPage() {
    return (
        <Suspense fallback={<LoadingScreen isLoading={true} />}>
            <MemoriesContent />
        </Suspense>
    )
}
