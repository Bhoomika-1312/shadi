'use client'
import { motion } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useParams } from 'next/navigation'
import AudioPlayer from '@/components/AudioPlayer'
import LoadingScreen from '@/components/LoadingScreen'
import HeroSection from '@/components/HeroSection'
import LoveStorySection from '@/components/LoveStorySection'
import EventDetailsSection from '@/components/EventDetailsSection'
import VenueMapsSection from '@/components/VenueMapsSection'
import FlowerAnimation from '@/components/FlowerAnimation'
import FamilySection from '@/components/FamilySection'
import CountdownTimer from '@/components/CountdownTimer'
import Link from 'next/link'
import { Home as HomeIcon } from 'lucide-react'
import SacredDecor from '@/components/SacredDecor'
import { useLanguage } from '@/context/LanguageContext'
import Footer from '@/components/Footer'

function HomeContent() {
    const { t } = useLanguage()
    const params = useParams()
    const [audioTime, setAudioTime] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Just simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 800)
        return () => clearTimeout(timer)
    }, [])

    // Removed fetchInvitee as we are now client-side only


    const handleAudioTimeUpdate = (currentTime: number, duration: number) => {
        setAudioTime(currentTime)
    }

    if (isLoading) {
        return <LoadingScreen isLoading={true} />
    }

    return (
        <main className="relative">
            <LoadingScreen isLoading={isLoading} />
            {/* <ScrollProgress /> */}

            {/* Sacred Royal Decor */}
            <SacredDecor />

            {/* Return to Home */}
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 p-3 glass-royal rounded-full hover:scale-110 transition-transform text-amber-600"
            >
                <HomeIcon className="w-6 h-6" />
            </Link>

            {/* Name Input Form Removed - now on main page or implied */}

            {/* Audio Player moved to layout */}

            {/* Main Content */}
            <div className="relative">
                <HeroSection audioTime={audioTime} />
                <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-20">
                    <CountdownTimer />
                </div>
            </div>
            <LoveStorySection audioTime={audioTime} />
            <EventDetailsSection />
            <VenueMapsSection />

            <Footer />
        </main>
    )
}

export default function Home() {
    return (
        <Suspense fallback={<LoadingScreen isLoading={true} />}>
            <HomeContent />
        </Suspense>
    )
}
