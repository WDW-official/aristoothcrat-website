'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function ServicesGrid() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From preventive care to advanced cosmetic procedures, we offer a complete range of dental
            services to meet your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="group"
              >
                <Link href={`/services/${service.slug}`}>
                  <motion.div
                    className="relative h-full bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-accent transition-colors"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>

                    {/* Category Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {service.category}
                      </span>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </motion.div>
                    </div>

                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
