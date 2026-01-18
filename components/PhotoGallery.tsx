'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface PhotoGalleryProps {
  audioTime: number
  limit?: number // Optional limit for number of photos to show
  showTitle?: boolean // Optional flag to show/hide title section
}

// Photo gallery images - update paths to match your actual filenames
const photos = [
  // Engagement Photos
  { id: 1, src: '/images/engagement-1.JPG', alt: 'Engagement Photo 1', category: 'engagement' },
  { id: 2, src: '/images/couple-2.JPG', alt: 'Engagement Photo 2', category: 'engagement' },
  { id: 3, src: '/images/engagement-2.JPG', alt: 'Engagement Photo 3', category: 'engagement' },
  { id: 4, src: '/images/DSC04524.JPG', alt: 'Couple Photo 9', category: 'couple' },
  { id: 5, src: '/images/_B3A2306.JPG', alt: 'Couple Photo 10', category: 'couple' },
  { id: 6, src: '/images/DSC04487.JPG', alt: 'Couple Photo 11', category: 'couple' },
  { id: 7, src: '/images/_B3A2273.JPG', alt: 'Couple Photo 12', category: 'couple' },
  { id: 8, src: '/images/MEM3.JPEG', alt: 'Couple Photo 14', category: 'couple' },
  { id: 9, src: '/images/_B3A2249.JPG', alt: 'Couple Photo 15', category: 'couple' },
  { id: 10, src: '/images/DSC04729.JPG', alt: 'Couple Photo 16', category: 'couple' },
  { id: 11, src: '/images/_B3A2265.JPG', alt: 'Couple Photo 18', category: 'couple' },
  { id: 12, src: '/images/_B3A2245.JPG', alt: 'Couple Photo 19', category: 'couple' },
]

export default function PhotoGallery({ audioTime, limit, showTitle = true }: PhotoGalleryProps) {
  const { t } = useLanguage()
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Apply limit if specified (for RSVP page preview)
  const displayPhotos = limit ? photos.slice(0, limit) : photos

  const openLightbox = (index: number) => {
    setSelectedPhoto(index)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % displayPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + displayPhotos.length) % displayPhotos.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-6xl mx-auto">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              {t.memories.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto" />
            <p className="text-lg text-gray-600 mt-6">
              {t.memories.subtitle}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized={photo.src.endsWith('.JPG') || photo.src.endsWith('.jpg')}
              />
              {/* Fallback overlay - shown behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-rose-200 to-amber-300 flex items-center justify-center opacity-0 group-hover:opacity-0 pointer-events-none">
                <span className="text-4xl">📸</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative w-full h-[80vh]">
                  <Image
                    src={displayPhotos[currentIndex].src}
                    alt={displayPhotos[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    unoptimized={displayPhotos[currentIndex].src.endsWith('.JPG') || displayPhotos[currentIndex].src.endsWith('.jpg')}
                  />
                </div>

                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                  {currentIndex + 1} / {displayPhotos.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

