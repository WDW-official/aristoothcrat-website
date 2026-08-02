'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align]

  return (
    <motion.div
      className={cn('space-y-4 mb-12', alignClass, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {eyebrow && (
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}
