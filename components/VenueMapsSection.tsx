'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const venues = [
  {
    lat: 27.497806469330637,
    lng: 77.65302359537318,
  },
  {
    lat: 27.497806469330637,
    lng: 77.65302359537318,
  },
]

export default function VenueMapsSection() {
  const { t } = useLanguage()
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    // Get API key from environment variable (client-side)
    setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || null)
  }, [])

  const openInGoogleMaps = (lat: number, lng: number, address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    window.open(url, '_blank')
  }

  const getStaticMapUrl = (lat: number, lng: number) => {
    // Static map image that doesn't require API key (but has watermark)
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=600x300&markers=color:red%7C${lat},${lng}&key=${apiKey || ''}`
  }

  const getEmbedUrl = (lat: number, lng: number) => {
    if (apiKey) {
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}`
    }
    // Fallback: Use iframe without API key (will show basic map)
    return `https://www.google.com/maps?q=${lat},${lng}&output=embed`
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50/30 to-white relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-decorative text-amber-800 mb-4 drop-shadow-sm tracking-wide">
            {t.venueMaps.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 font-serif italic tracking-wider">
            {t.venueMaps.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.venueMaps.venues.map((venueInfo, index) => {
            const venue = { ...venues[index], ...venueInfo }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="glass-royal rounded-2xl shadow-xl overflow-hidden hover:border-amber-400 transition-all duration-500"
              >
                <div className="relative h-64 bg-gradient-to-br from-amber-100 to-amber-50">
                  {apiKey ? (
                    <>
                      {/* Google Maps Embed with API Key */}
                      <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={getEmbedUrl(venue.lat, venue.lng)}
                        onError={() => setMapError(true)}
                      />
                      {mapError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-amber-100 p-4">
                          <div className="text-center">
                            <AlertCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                            <p className="text-sm text-gray-700">{t.venueMaps.mapUnavailable}</p>
                            <p className="text-xs text-gray-500 mt-1">{t.venueMaps.clickForDirections}</p>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    /* Fallback: Static map or placeholder */
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50">
                        <div className="text-center p-4">
                          <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                          <p className="text-sm font-semibold text-gray-700 mb-1">{venue.name}</p>
                          <p className="text-xs text-gray-600">{venue.address}</p>
                          <p className="text-xs text-gray-500 mt-2">{t.venueMaps.clickForDirections}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center gap-3 mb-6">
                    <MapPin className="w-8 h-8 text-rose-600 mb-2" />
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-2xl font-serif text-rose-800 mb-2">{venue.name}</h3>
                      <p className="text-gray-600 text-base font-light italic max-w-[250px]">{venue.address}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => openInGoogleMaps(venue.lat, venue.lng, venue.address)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-amber-400 to-yellow-600 text-white rounded-lg font-semibold hover:from-amber-500 hover:to-yellow-700 transition-all shadow-lg flex items-center justify-center gap-2 font-serif tracking-wide"
                  >
                    <span>{t.venueMaps.openMapsBtn}</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

