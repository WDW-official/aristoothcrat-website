'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { clinicConfig, clinicAddress, clinicMapEmbedUrl, clinicMapSearchUrl } from '@/lib/config'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function ContactSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-card">
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
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out to us anytime.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Phone */}
          <motion.div
            variants={staggerItem}
            className="bg-background border border-border rounded-xl p-4 sm:p-8 hover:border-accent transition-colors"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">Call Us</h3>
            <div className="space-y-1">
              {[
                clinicConfig.contact.phone.primary,
                clinicConfig.contact.phone.secondary,
              ].map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone}`}
                  className="block text-xs sm:text-base text-muted-foreground hover:text-accent transition-colors break-words"
                >
                  {phone}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={staggerItem}
            className="bg-background border border-border rounded-xl p-4 sm:p-8 hover:border-accent transition-colors"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">Email</h3>
            <a
              href={`mailto:${clinicConfig.contact.email}`}
              className="text-xs sm:text-base text-muted-foreground hover:text-accent transition-colors break-words"
            >
              {clinicConfig.contact.email}
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            variants={staggerItem}
            className="bg-background border border-border rounded-xl p-4 sm:p-8 hover:border-accent transition-colors"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">WhatsApp</h3>
            <a
              href={`https://wa.me/${clinicConfig.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-base text-muted-foreground hover:text-accent transition-colors"
            >
              Chat Now
            </a>
          </motion.div>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Address */}
          <motion.div
            variants={staggerItem}
            className="space-y-4"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">{clinicAddress}</p>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={staggerItem}
            className="space-y-4"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <div className="space-y-1 text-muted-foreground text-sm">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 overflow-hidden rounded-xl border border-border bg-background"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Map to Aristoothcrat Dental Center"
            src={clinicMapEmbedUrl}
            className="h-64 w-full sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-3 text-sm">
            <span className="text-muted-foreground">{clinicAddress}</span>
            <a
              href={clinicMapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-semibold text-accent hover:text-accent/80"
            >
              Open Map
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
