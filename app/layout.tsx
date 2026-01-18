import type { Metadata } from 'next'
import { Inter, Playfair_Display, Great_Vibes, Cinzel } from 'next/font/google'
import './globals.css'
import AudioPlayer from '@/components/AudioPlayer'
import { audioConfig } from '@/lib/audioConfig'
import { LanguageProvider } from '@/context/LanguageContext'
import LanguageToggle from '@/components/LanguageToggle'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'Wedding Invitation',
  description: 'You are cordially invited to our wedding celebration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} ${cinzel.variable} font-sans antialiased`}>
        <LanguageProvider>
          <AudioPlayer src={audioConfig.src} songDetails={{ title: audioConfig.title, artist: audioConfig.artist }} />
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

