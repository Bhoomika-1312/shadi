'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import LoadingScreen from '@/components/LoadingScreen'
import PhotoGallery from '@/components/PhotoGallery'
import RSVPSection from '@/components/RSVPSection'
import FlowerAnimation from '@/components/FlowerAnimation'
import Link from 'next/link'
import SacredDecor from '@/components/SacredDecor'
import Footer from '@/components/Footer'
import { Home } from 'lucide-react'

function RSVPContent() {
    const { t } = useLanguage()
    const [inviteeName, setInviteeName] = useState<string>('')
    const [inviteeId, setInviteeId] = useState<string>('')
    const [audioTime, setAudioTime] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const savedName = localStorage.getItem('inviteeName')
        const savedId = localStorage.getItem('inviteeId')

        if (savedName && savedId) {
            setInviteeName(savedName)
            setInviteeId(savedId)
        }
        setIsLoading(false)
    }, [])

    const handleAudioTimeUpdate = (currentTime: number, duration: number) => {
        setAudioTime(currentTime)
    }

    if (isLoading) return <LoadingScreen isLoading={true} />

    return (
        <main className="relative min-h-screen">
            <SacredDecor />

            {/* Return to Home */}
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 p-3 glass-royal rounded-full hover:scale-110 transition-transform text-amber-600"
            >
                <Home className="w-6 h-6" />
            </Link>

            {/* Audio Player moved to layout */}

            <div className="pt-24 relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-decorative text-center text-[#92400E] mb-12 drop-shadow-sm">
                    {t.memories.title} & {t.rsvp.title}
                </h1>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-16"></div>

                <PhotoGallery audioTime={audioTime} limit={3} />

                {inviteeId ? (
                    <RSVPSection inviteeId={inviteeId} inviteeName={inviteeName} />
                ) : (
                    <div className="max-w-md mx-auto p-8 text-center bg-white/50 backdrop-blur-sm rounded-3xl m-4">
                        <h2 className="text-2xl font-serif text-gray-800 mb-4">{t.rsvp.loginTitle}</h2>
                        <p className="text-gray-600 mb-6">{t.rsvp.loginMsg}</p>
                        <Link href="/invitation" className="px-6 py-3 bg-rose-500 text-white rounded-xl font-semibold">
                            {t.rsvp.goToInvitation}
                        </Link>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    )
}

export default function RSVPPage() {
    return (
        <Suspense fallback={<LoadingScreen isLoading={true} />}>
            <RSVPContent />
        </Suspense>
    )
}
