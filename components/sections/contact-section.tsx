'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { clinicConfig, clinicAddress } from '@/lib/config'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function ContactSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out to us anytime.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Phone */}
          <motion.div
            variants={staggerItem}
            className="bg-background border border-border rounded-xl p-8 hover:border-accent transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <div className="space-y-1">
              {[
                clinicConfig.contact.phone.primary,
                clinicConfig.contact.phone.secondary,
              ].map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone}`}
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={staggerItem}
            className="bg-background border border-border rounded-xl p-8 hover:border-accent transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href={`mailto:${clinicConfig.contact.email}`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              {clinicConfig.contact.email}
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            variants={staggerItem}
            className="bg-background border border-border rounded-xl p-8 hover:border-accent transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
            <a
              href={`https://wa.me/${clinicConfig.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
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
      </div>
    </section>
  )
}
