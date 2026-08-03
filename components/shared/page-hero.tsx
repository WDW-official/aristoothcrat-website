'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  title: string
  description?: string
  eyebrow?: string
  image: string
  children?: React.ReactNode
  className?: string
  contentClassName?: string
}

export default function PageHero({
  title,
  description,
  eyebrow,
  image,
  children,
  className,
  contentClassName,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate flex min-h-[19rem] items-center overflow-hidden pt-24 pb-10 text-white sm:min-h-[22rem] sm:pt-32 sm:pb-16',
        className
      )}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-black/38" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/52 via-black/22 to-black/48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className={cn('mx-auto max-w-3xl text-center', contentClassName)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 sm:mt-5 text-base sm:text-xl text-white/80 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
