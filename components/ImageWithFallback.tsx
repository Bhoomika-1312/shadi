'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fallback?: React.ReactNode
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
  fallback,
}: ImageWithFallbackProps) {
  const [imgError, setImgError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    // Try lowercase extension if uppercase fails
    if (imgSrc.endsWith('.JPG')) {
      setImgSrc(imgSrc.replace('.JPG', '.jpg'))
    } else if (imgSrc.endsWith('.jpg')) {
      setImgSrc(imgSrc.replace('.jpg', '.JPG'))
    } else {
      setImgError(true)
    }
  }

  if (imgError && fallback) {
    return <>{fallback}</>
  }

  return (
    <>
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
        priority={priority}
        sizes={sizes}
        onError={handleError}
        unoptimized={imgSrc.endsWith('.JPG') || imgSrc.endsWith('.jpg')}
      />
      {fallback && (
        <div className="absolute inset-0 pointer-events-none opacity-0">
          {fallback}
        </div>
      )}
    </>
  )
}

