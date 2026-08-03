'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'

const aboutImages = [
  {
    src: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_2/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    alt: 'Aristoothcrat dental clinic interior',
  },
  {
    src: 'https://res.cloudinary.com/dzn1k1z8r/image/upload/v1785728591/bright_empty_dental_room_16x10_mkrrne.svg',
    alt: 'Bright empty dental room at Aristoothcrat',
  },
  {
    src: 'https://res.cloudinary.com/dzn1k1z8r/image/upload/v1785728803/bright_dental_scene_10x16_u3mk0w.svg',
    alt: 'Bright dental care scene at Aristoothcrat',
  },
]

export default function AboutHomeSection() {
  const [currentImage, setCurrentImage] = React.useState(0)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((current) => (current + 1) % aboutImages.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const showPrevious = () => {
    setCurrentImage((current) => (current - 1 + aboutImages.length) % aboutImages.length)
  }

  const showNext = () => {
    setCurrentImage((current) => (current + 1) % aboutImages.length)
  }

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={staggerItem}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              About Us
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Welcome to Aristoothcrat Dental Care!
            </h2>
            <div className="space-y-3 sm:space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Aristoothcrat Dental Clinic first opened in Ikeja Lagos on September 12, 2009,
                under the Managing Dentist, Dr. Leo Osowa, with over 19 years experience in dentistry.
              </p>
              <p>
                Aristoothcrat Dental Clinic is dedicated to comprehensive dental care that focuses on
                promoting dental health, preventive dentistry, and restorative dentistry.
              </p>
              <p>
                Our staff is highly trained and attends update courses. We are a friendly, warm, and
                calming practice with our patients as our main focus.
              </p>
              <p>
                Our partnership with Hygeia HMO has been extremely cordial and rewarding. We shall do
                everything possible to continue the relationship.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-lg"
          >
            {aboutImages.map((image, index) => (
              <motion.img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                initial={false}
                animate={{
                  opacity: index === currentImage ? 1 : 0,
                  scale: index === currentImage ? 1 : 1.04,
                }}
                transition={{ duration: 0.6 }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex gap-2">
                {aboutImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentImage ? 'w-8 bg-accent' : 'w-2.5 bg-background/70'
                    }`}
                    aria-label={`Show clinic image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
