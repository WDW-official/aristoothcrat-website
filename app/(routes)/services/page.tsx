'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'
import PageTransition from '@/components/shared/page-transition'
import { AppointmentButton } from '@/components/layout/appointment-drawer'

const serviceHighlights: Record<string, string[]> = {
  'general-dentistry': ['Routine checkups', 'Professional cleaning', 'Digital examinations'],
  'cosmetic-dentistry': ['Smile design', 'Veneers and bonding', 'Natural-looking results'],
  preventive: ['Oral health screening', 'Fluoride and sealants', 'Personal care guidance'],
  restorative: ['Crowns and bridges', 'Tooth-colored fillings', 'Bite restoration'],
  whitening: ['In-clinic whitening', 'Stain removal', 'Brighter smile shade'],
  implants: ['Missing tooth replacement', 'Implant planning', 'Long-term restoration'],
  orthodontics: ['Braces and aligners', 'Bite correction', 'Smile alignment'],
  'root-canal': ['Infection treatment', 'Tooth preservation', 'Pain relief'],
}

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-card via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care for every need, from routine checkups to advanced cosmetic procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {SERVICES.map((service) => {
              const IconComponent = service.icon

              return (
                <motion.article
                  key={service.id}
                  variants={staggerItem}
                  className="group flex h-full flex-col border-b border-border py-8 first:pt-0 lg:first:pt-8"
                >
                  <div className="mb-6 flex items-start gap-4">
                    <motion.div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10"
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="h-7 w-7 text-accent" />
                    </motion.div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-accent">{service.category}</p>
                      <h2 className="font-serif text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {service.name}
                      </h2>
                    </div>
                  </div>

                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8 grid gap-3 sm:grid-cols-3">
                    {(serviceHighlights[service.id] ?? []).map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <AppointmentButton
                      service={service.id}
                      className="inline-flex items-center justify-center rounded-lg border border-accent px-5 py-3 text-sm font-semibold hover:text-accent transition-colors hover:bg-accent/10"
                    >
                      Book This Service
                    </AppointmentButton>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today for a free consultation and let&apos;s discuss which treatment is right for you.
            </p>
            <AppointmentButton
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Book Your Appointment
            </AppointmentButton>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
