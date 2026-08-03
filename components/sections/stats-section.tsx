'use client'

import React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { clinicConfig } from '@/lib/config'
import { staggerContainer, staggerItem } from '@/lib/animations'

const stats = [
  { value: clinicConfig.stats.yearsExperience, suffix: '', label: 'Years Experience' },
  { value: clinicConfig.stats.patientsServed, suffix: '+', label: 'Happy Patients' },
  { value: clinicConfig.stats.teamMembers, suffix: '', label: 'Team Members' },
  { value: clinicConfig.stats.treatments, suffix: '+', label: 'Treatment Types' },
]

function AnimatedStatNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const shouldReduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = React.useState(shouldReduceMotion ? value : 0)

  React.useEffect(() => {
    if (!isInView) return

    if (shouldReduceMotion) {
      setDisplayValue(value)
      return
    }

    const duration = 1600
    const start = performance.now()

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(Math.round(value * easedProgress))

      if (progress < 1) {
        window.requestAnimationFrame(animate)
      }
    }

    const frame = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(frame)
  }, [isInView, shouldReduceMotion, value])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
        >
          {stats.map((item) => (
            <motion.div key={item.label} variants={staggerItem} className="text-center">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-accent mb-2">
                <AnimatedStatNumber value={item.value} suffix={item.suffix} />
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
