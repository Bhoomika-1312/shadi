'use client'

import { Suspense } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import BlessingsSection from '@/components/BlessingsSection'
import FamilySection from '@/components/FamilySection'
import Link from 'next/link'
import SacredDecor from '@/components/SacredDecor'
import Footer from '@/components/Footer'
import { Home } from 'lucide-react'

function BlessingsContent() {
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

            <div className="pt-24 relative z-10">
                <h1 className="text-4xl md:text-6xl font-decorative text-center text-[#92400E] mb-8 drop-shadow-sm">
                    Blessings
                </h1>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-16"></div>
                <div className="mb-10">
                    <FamilySection />
                </div>
                <BlessingsSection />
            </div>

            <Footer />
        </main>
    )
}

export default function BlessingsPage() {
    return (
        <Suspense fallback={<LoadingScreen isLoading={true} />}>
            <BlessingsContent />
        </Suspense>
    )
}
