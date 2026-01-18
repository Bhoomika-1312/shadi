'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowRight, Heart, Calendar, MessageCircle, Sparkles, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Footer from '@/components/Footer'

export default function LandingPage() {
    const { t } = useLanguage()
    const params = useParams()
    const [inviteeName, setInviteeName] = useState<string>('')

    useEffect(() => {
        // Check for name in URL params [[...invitee]]
        const urlName = params?.invitee?.[0]
        if (urlName) {
            const decodedName = decodeURIComponent(urlName)
            setInviteeName(decodedName)
            localStorage.setItem('inviteeName', decodedName)
        } else {
            // Fallback to local storage
            const savedName = localStorage.getItem('inviteeName')
            if (savedName) {
                setInviteeName(savedName)
            }
        }
    }, [params])

    // Helper function to capitalize first letter of each word
    const capitalizeWords = (str: string) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    const headingVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    }

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <main className="min-h-screen bg-[#FFFFF0] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50/50 via-[#FFF8F0] to-[#FDF5E6] flex flex-col items-center p-4 relative overflow-hidden">
            {/* Subtle Background Motifs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-radial from-amber-100/40 to-transparent rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-radial from-rose-100/40 to-transparent rounded-full blur-[80px]"></div>

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 opacity-[0.03] w-96 h-96"
                >
                    <Image src="/images/ganesha.jpg" alt="motif" width={400} height={400} className="w-full h-full object-contain grayscale" />
                </motion.div>
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 opacity-[0.03] w-64 h-64"
                >
                    <Image src="/images/ganesha.jpg" alt="motif" width={300} height={300} className="w-full h-full object-contain grayscale" />
                </motion.div>
            </div>

            <div className="max-w-6xl w-full relative z-10 flex flex-col justify-center py-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Hero Section */}
                    <div className="text-center mb-12 relative w-full"> {/* Reduced mb-20 to mb-12 */}

                        {/* Ganesh Image with Divine Glow */}
                        <motion.div
                            className="w-56 h-56 md:w-72 md:h-72 mx-auto mb-6 relative" // Reduced size and margin
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="absolute inset-0 bg-gradient-radial from-amber-200/60 via-amber-100/20 to-transparent rounded-full blur-3xl transform scale-125 animate-pulse-slow"></div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-full h-full"
                            >
                                <Image
                                    src="/images/ganesha.jpg"
                                    alt="Lord Ganesha"
                                    fill
                                    className="object-contain drop-shadow-[0_10px_30px_rgba(251,191,36,0.2)] rounded-full"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={headingVariants} className="space-y-4"> {/* Reduced space-y-8 to space-y-4 */}
                            <h2 className="text-amber-700/70 font-serif text-sm md:text-base tracking-[0.3em] uppercase flex items-center justify-center gap-4">
                                <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-300"></span>
                                {t.omGaneshayNamah}
                                <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-300"></span>
                            </h2>

                            <h3 className="text-2xl md:text-3xl font-decorative text-rose-600 mb-1 drop-shadow-sm font-medium">
                                {t.shubhVivah}
                            </h3>

                            <h1 className="text-5xl md:text-7xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-rose-800 via-red-600 to-rose-800 drop-shadow-sm pb-2 tracking-widest leading-none p-2 uppercase">
                                Shubham
                                <br />
                                <span className="text-amber-500 mx-4 font-serif text-4xl md:text-5xl align-middle italic normal-case">&</span>
                                <br />
                                Nandini
                            </h1>

                            {/* Personal Greeting on Main Page */}
                            {inviteeName && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="pt-6 pb-2"
                                >
                                    <p className="text-gray-400 font-serif italic text-base md:text-lg mb-2 tracking-widest">Dear</p>
                                    <h4 className="text-2xl md:text-4xl font-serif text-amber-800 tracking-wide font-semibold mb-1">
                                        {inviteeName}
                                    </h4>
                                    <p className="text-amber-600/80 font-serif italic text-sm md:text-base tracking-wide">
                                        Ji & Family
                                    </p>
                                </motion.div>
                            )}

                            <p className="text-gray-500 font-serif text-lg md:text-xl tracking-widest max-w-2xl mx-auto font-light pt-4">
                                {t.requestHonor}
                            </p>
                        </motion.div>
                    </div>

                    {/* Navigation Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6 w-full items-center px-4 md:px-0"> {/* Reduced gap */}

                        {/* Card 1: Open Invitation */}
                        <Link href="/invitation" className="group w-full h-full">
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="h-full bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-amber-100/50 hover:border-amber-300/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(251,191,36,0.15)] transition-all duration-300 text-center flex flex-col items-center justify-between min-h-[280px]"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Calendar className="w-6 h-6 stroke-[1.5]" />
                                    </div>
                                    <h3 className="text-xl font-serif text-gray-800 mb-2">{t.landing.invitationTitle}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-4 px-4">
                                        {t.landing.invitationDesc}
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-amber-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors">
                                    <ArrowRight className="w-3 h-3 text-amber-500 group-hover:text-white" />
                                </div>
                            </motion.div>
                        </Link>

                        {/* Card 2: Blessings - Highlighted Center */}
                        <Link href="/blessings" className="group w-full relative z-10 transform md:-translate-y-2">
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                                className="h-full bg-gradient-to-b from-amber-50 to-white p-8 rounded-[2rem] border border-amber-100 shadow-[0_20px_50px_-10px_rgba(251,191,36,0.15)] hover:shadow-[0_30px_60px_-5px_rgba(251,191,36,0.25)] transition-all duration-300 text-center flex flex-col items-center justify-between min-h-[320px] relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>

                                <div className="flex flex-col items-center relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-amber-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-amber-200 group-hover:rotate-3 transition-transform duration-300">
                                        <MessageCircle className="w-8 h-8 fill-current animate-pulse-slow" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-gray-900 mb-2">{t.landing.blessingsTitle}</h3>
                                    <p className="text-amber-900/60 text-sm leading-relaxed mb-6 px-2 font-medium">
                                        {t.landing.blessingsDesc}
                                    </p>
                                </div>

                                <div className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold text-base shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all flex items-center justify-center gap-2">
                                    {t.landing.blessingsBtn} <Sparkles className="w-4 h-4 animate-pulse" />
                                </div>
                            </motion.div>
                        </Link>

                        {/* Card 3: Memories & RSVP */}
                        <Link href="/rsvp" className="group w-full h-full">
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="h-full bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-rose-100/50 hover:border-rose-300/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(225,29,72,0.15)] transition-all duration-300 text-center flex flex-col items-center justify-between min-h-[280px]"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Heart className="w-6 h-6 stroke-[1.5]" />
                                    </div>
                                    <h3 className="text-xl font-serif text-gray-800 mb-2">{t.landing.memoriesTitle}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-4 px-4">
                                        {t.landing.memoriesDesc}
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-rose-200 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-colors">
                                    <ArrowRight className="w-3 h-3 text-rose-500 group-hover:text-white" />
                                </div>
                            </motion.div>
                        </Link>
                    </div>

                    {/* Event Summary Section - New */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mx-auto mt-20 px-4"
                    >
                        <div className="text-center mb-10">
                            <p className="text-[#B45309] font-serif tracking-[0.3em] uppercase text-sm mb-4">{t.eventSummary}</p>
                            <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {t.eventDetails.events.map((event, index) => (
                                <div key={index} className="glass-royal p-8 rounded-[2rem] border border-[#D4AF37]/10 flex flex-col items-center text-center">
                                    <h4 className="text-[#92400E] font-serif text-xl mb-4">{event.title}</h4>
                                    <div className="space-y-2 text-gray-600 font-light italic">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Calendar className="w-4 h-4 text-[#D4AF37]" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 justify-center">
                                            <Clock className="w-4 h-4 text-[#D4AF37]" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 justify-center">
                                            <MapPin className="w-4 h-4 text-[#D4AF37]" />
                                            <span>{event.venue}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>



            <div className="w-full relative z-10">
                <Footer />
            </div>
        </main>
    )
}
