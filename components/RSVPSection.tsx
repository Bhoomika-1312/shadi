'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, XCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface RSVPSectionProps {
  inviteeId: string
  inviteeName: string
}

export default function RSVPSection({ inviteeId, inviteeName }: RSVPSectionProps) {
  const { t } = useLanguage()
  const [attending, setAttending] = useState<boolean | null>(null)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (attending === null) {
      alert('Please select whether you will be attending')
      return
    }

    setIsSubmitting(true)

    try {
      const form = e.target;

      await fetch("https://script.google.com/macros/s/AKfycbwpWp4QXYgOdQj9_aVuMEEqXUIKHfbhhRAO24OTQCnzPiD5lkT98Fgp0P58QQI_EX_9_w/exec", {
        method: "POST",
        body: JSON.stringify({
          name: inviteeName,
          attending: attending,
          message: message.trim() || undefined,
        })
      });
      localStorage.setItem('rsvpSubmitted', 'true')
      setIsSubmitted(true)
      setMessage('')
      setIsSubmitting(false)
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      alert('Failed to submit RSVP. Please try again.')
    }
  }

  if (isSubmitted) {
    // Instead of redirecting immediately, show success message with button
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              {t.rsvp.thankYouTitle}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.rsvp.thankYouMsg}
            </p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-6 bg-white rounded-xl shadow-lg border border-amber-100 mb-8 max-w-sm mx-auto">
                <img
                  src="/stickers.jpg"
                  alt="Cute couple stickers"
                  className="w-full h-auto rounded-lg mb-4 object-cover"
                />
                <h3 className="text-xl font-serif text-amber-600 mb-2">{t.memories.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{t.rsvp.memoriesUnlocked}</p>
                <a
                  href="/memories"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-md"
                >
                  {t.rsvp.viewMemoriesBtn}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp-section" className="py-20 px-4 bg-gradient-to-b from-white to-amber-50/30 overflow-hidden relative">
      {/* Search for 'romantic animations' */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none animate-bounce duration-3000">
        <img src="/stickers.jpg" className="w-24 h-24 rounded-full object-cover" alt="decoration" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none animate-pulse duration-2000">
        <img src="/stickers.jpg" className="w-32 h-32 rounded-full object-cover" alt="decoration" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-4 tracking-wider uppercase">
            {t.rsvp.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto" />
          <p className="text-lg text-gray-600 mt-6">
            {t.rsvp.desc}
          </p>
          <div className="mt-4 text-amber-600 text-sm font-medium animate-pulse">
            {t.rsvp.unlockMsg}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-100 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50" />

          <div className="mb-6 relative z-10">
            <p className="text-gray-700 mb-4 font-semibold">{t.rsvp.attendingQuestion}</p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 transform active:scale-95 ${attending === true
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg ring-2 ring-green-200'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                <motion.div
                  initial={false}
                  animate={attending === true ? { scale: [1, 1.2, 1] } : {}}
                >
                  <CheckCircle className="w-5 h-5" />
                </motion.div>
                {t.rsvp.yes}
              </button>
              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 transform active:scale-95 ${attending === false
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg ring-2 ring-red-200'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                <motion.div
                  initial={false}
                  animate={attending === false ? { scale: [1, 1.2, 1] } : {}}
                >
                  <XCircle className="w-5 h-5" />
                </motion.div>
                {t.rsvp.no}
              </button>
            </div>
          </div>

          <div className="mb-6 relative z-10">
            <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">
              {t.rsvp.messageLabel}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              maxLength={500}
              className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none bg-white/50"
              placeholder={t.rsvp.messagePlaceholder}
            />
            <p className="text-sm text-gray-500 mt-1 text-right">
              {message.length}/500
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || attending === null}
            className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                {t.rsvp.submitting}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t.rsvp.submitBtn}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

