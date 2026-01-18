'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SongDetails {
  title?: string
  artist?: string
}

interface AudioPlayerProps {
  src: string
  songDetails?: SongDetails
  onTimeUpdate?: (currentTime: number, duration: number) => void
  onPlay?: () => void
  onPause?: () => void
  onEnded?: () => void
}

export default function AudioPlayer({
  src,
  songDetails,
  onTimeUpdate,
  onPlay,
  onPause,
  onEnded,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
      onTimeUpdate?.(audio.currentTime, audio.duration || 0)
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration || 0)
    })
    audio.addEventListener('ended', () => {
      setIsPlaying(false)
      onEnded?.()
    })

    // Aggressive auto-play: try unmuted first, then muted if blocked
    const attemptAutoPlay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
        onPlay?.()
      } catch (error) {
        // If unmuted autoplay fails, try muted
        try {
          audio.muted = true
          setIsMuted(true)
          await audio.play()
          setIsPlaying(true)
          onPlay?.()
        } catch (mutedError) {
          // Both failed, user will need to click play
          setIsPlaying(false)
        }
      }
    }

    attemptAutoPlay()

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', () => { })
      audio.removeEventListener('ended', () => { })
    }
  }, [onTimeUpdate, onEnded, onPlay])

  const handlePlay = useCallback(() => {
    audioRef.current?.play()
    setIsPlaying(true)
    onPlay?.()
  }, [onPlay])

  const handlePause = useCallback(() => {
    audioRef.current?.pause()
    setIsPlaying(false)
    onPause?.()
  }, [onPause])

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Audio Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex items-center gap-4 max-w-sm"
      >
        <button
          onClick={isPlaying ? handlePause : handlePlay}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg flex-shrink-0"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-1" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-all flex-shrink-0"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </motion.div>
    </>
  )
}

