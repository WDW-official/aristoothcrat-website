'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  {
    src: 'https://res.cloudinary.com/dzn1k1z8r/image/upload/v1785799289/bright_dental_treatment_1x1_mpydrk.svg',
    alt: 'Bright dental treatment at Aristoothcrat',
  },
  {
    src: 'https://res.cloudinary.com/dzn1k1z8r/image/upload/v1785799340/dental_clinic_bright_1x1_bvq4w2.svg',
    alt: 'Bright dental clinic at Aristoothcrat',
  },
]

const imageSlideVariants = {
  enter: (direction: number) => ({ x: `${direction * 100}%`, opacity: 0.85 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: `${direction * -100}%`, opacity: 0.85 }),
}

export default function AboutHomeSection() {
  const [currentImage, setCurrentImage] = React.useState(0)
  const [slideDirection, setSlideDirection] = React.useState(1)
  const activeImage = aboutImages[currentImage]

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideDirection(1)
      setCurrentImage((current) => (current + 1) % aboutImages.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const showPrevious = () => {
    setSlideDirection(-1)
    setCurrentImage((current) => (current - 1 + aboutImages.length) % aboutImages.length)
  }

  const showNext = () => {
    setSlideDirection(1)
    setCurrentImage((current) => (current + 1) % aboutImages.length)
  }

  const showImage = (nextImage: number) => {
    if (nextImage === currentImage) return

    setSlideDirection(nextImage > currentImage ? 1 : -1)
    setCurrentImage(nextImage)
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
                under the Managing Dentist, Dr. Leo Osowa, with 25 years of excellence in dentistry.
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
            className="relative overflow-hidden rounded-2xl border border-border"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <AnimatePresence initial={false} custom={slideDirection} mode="popLayout">
                <motion.img
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  custom={slideDirection}
                  variants={imageSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />

              {/* <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur-md sm:left-4 sm:top-4 sm:text-xs">
                {currentImage + 1} / {aboutImages.length}
              </div> */}

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-accent sm:h-10 sm:w-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-accent sm:h-10 sm:w-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 sm:bottom-4 sm:left-4 sm:right-4">
                <div className="flex flex-1 gap-1.5 sm:gap-2">
                  {aboutImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => showImage(index)}
                      className={`h-1.5 rounded-full transition-all sm:h-2 ${
                        index === currentImage ? 'w-5 bg-accent sm:w-8' : 'w-1.5 bg-white/55 hover:bg-accent/70 sm:w-2'
                      }`}
                      aria-label={`Show clinic image ${index + 1}`}
                    />
                  ))}
                </div>

                <p className="hidden rounded-full bg-black/25 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md sm:block">
                  Clinic Gallery
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
