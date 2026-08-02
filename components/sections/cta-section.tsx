'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar } from 'lucide-react'
import { clinicConfig } from '@/lib/config'
import { AppointmentButton } from '@/components/layout/appointment-drawer'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-card via-card to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.h2
              className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready for Your Smile Makeover?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Get started with a free consultation. Our team is ready to help you achieve your smile goals.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AppointmentButton
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </AppointmentButton>
            <a
              href={`tel:${clinicConfig.contact.phone.primary}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Clinic
            </a>
          </motion.div>

          {/* Hours Info */}
          <motion.div
            className="bg-background/50 border border-border rounded-xl p-6 inline-block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground mb-2">We&apos;re available:</p>
            <p className="font-semibold text-foreground">
              Mon-Fri 9:00 AM - 6:00 PM • Sat 10:00 AM - 4:00 PM
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
