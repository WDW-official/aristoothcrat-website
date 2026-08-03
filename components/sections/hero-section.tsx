'use client'

import React from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { AppointmentButton } from '@/components/layout/appointment-drawer'

const heroSlides = [
  {
    eyebrow: 'Welcome to Excellence',
    title: 'Your Smile, Perfected',
    description:
      'Experience premium dental care with cutting-edge technology and a team dedicated to your comfort and confidence.',
  },
  {
    eyebrow: 'Comprehensive Dental Care',
    title: 'Healthy Teeth, Confident Living',
    description:
      'From preventive checkups to restorative treatments, we help you protect your oral health with calm, expert care.',
  },
  {
    eyebrow: 'Cosmetic and Implant Dentistry',
    title: 'Designed Around Your Smile',
    description:
      'Transform your smile with personalized cosmetic dentistry, whitening, implants, and treatment plans made for you.',
  },
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const [heroVideoUrl, setHeroVideoUrl] = React.useState<string | null>(null)
  const heroDesktopVideoUrl=
    'https://res.cloudinary.com/dzn1k1z8r/video/upload/v1785631602/Aristoothcrat_Clinic_9x16_hbhwmd.mp4'
  const heroMobileVideoUrl=
    'https://res.cloudinary.com/dzn1k1z8r/video/upload/v1785631402/Aristoothcrat_Clinic_16x9_1_t7w3dg.mp4'
  const heroPosterUrl =
    'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_0/v1785631402/Aristoothcrat_Clinic_16x9_1_t7w3dg.jpg'
  const currentSlide = heroSlides[activeSlide]

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const updateHeroVideo = () => {
      setHeroVideoUrl(mediaQuery.matches ? heroDesktopVideoUrl : heroMobileVideoUrl)
    }

    updateHeroVideo()
    mediaQuery.addEventListener('change', updateHeroVideo)

    return () => mediaQuery.removeEventListener('change', updateHeroVideo)
  }, [heroDesktopVideoUrl, heroMobileVideoUrl])

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' })
  }

  return (
    <section className="relative md:mt-20 mt-10 min-h-[calc(100vh-10rem)] overflow-hidden flex items-center">
      <img
        src={heroPosterUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      {heroVideoUrl && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideoUrl}
          poster={heroPosterUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-black/35 dark:bg-background/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 dark:from-background/40 dark:to-background/75" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="grid min-h-[18rem] place-items-center sm:min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.title}
                className="flex flex-col items-center space-y-6"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
              >
                <span className="inline-block border-accent rounded-lg bg-background/45 px-2 backdrop-blur-sm text-accent font-semibold text-sm uppercase tracking-wider">
                  {currentSlide.eyebrow}
                </span>

                <h1 className="font-serif text-3xl lg:text-7xl font-bold text-white leading-tight">
                  {currentSlide.title}
                </h1>

                <p className="text-lg text-white  max-w-2xl leading-relaxed">
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div className="flex items-center justify-center gap-2" variants={fadeInUp}>
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide ? 'w-8 bg-accent' : 'w-2.5 bg-foreground/35 hover:bg-accent/60'
                }`}
                aria-label={`Show hero message ${index + 1}`}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            variants={fadeInUp}
          >
            <AppointmentButton
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Book Appointment
            </AppointmentButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent rounded-lg font-semibold bg-background/45 backdrop-blur-sm hover:bg-accent/10 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToNext}
            className="w-12 h-12 rounded-full border border-accent/40 bg-background/45 backdrop-blur-sm flex items-center justify-center hover:border-accent transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6 text-accent" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
