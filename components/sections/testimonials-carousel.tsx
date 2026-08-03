'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setAutoPlay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-8 sm:py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-xs uppercase tracking-wider">
            What Our Patients Say
          </span>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mt-1">
            Testimonials
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Testimonial Card */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6 min-h-48 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif text-base sm:text-lg md:text-xl text-foreground italic">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">
                    {TESTIMONIALS[current].name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {TESTIMONIALS[current].treatment} • {TESTIMONIALS[current].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2">
              <motion.button
                onClick={prev}
                className="w-9 h-9 rounded-lg bg-card border border-border hover:border-accent flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-9 h-9 rounded-lg bg-card border border-border hover:border-accent flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === current
                      ? 'bg-accent w-8'
                      : 'bg-border w-2 hover:bg-accent/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="text-xs text-muted-foreground">
              {current + 1} / {TESTIMONIALS.length}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
