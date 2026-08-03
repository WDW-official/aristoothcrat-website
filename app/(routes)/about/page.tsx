'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Heart, Zap, Shield } from 'lucide-react'
import { clinicConfig } from '@/lib/config'
import { staggerContainer, staggerItem } from '@/lib/animations'
import SectionHeading from '@/components/shared/section-heading'
import PageTransition from '@/components/shared/page-transition'
import { AppointmentButton } from '@/components/layout/appointment-drawer'
import AboutHomeSection from '@/components/sections/about-home-section'
import StatsSection from '@/components/sections/stats-section'
import PageHero from '@/components/shared/page-hero'
import { pageHeroImages } from '@/lib/page-hero-images'

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <PageHero
        title="About Aristoothcrat"
        description="Exceptional dentistry designed around you"
        image={pageHeroImages.about}
      />

      <AboutHomeSection />

      {/* Values Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every interaction we have with our patients."
          />

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Heart,
                title: 'Patient Care',
                description: 'Your comfort and wellbeing is our highest priority.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We pursue perfection in every treatment and detail.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We embrace cutting-edge technology and techniques.',
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Honesty and transparency in all our dealings.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-background border border-border rounded-xl p-4 sm:p-8 text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">{value.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Lead Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image */}
            <motion.div
              className="h-64 sm:h-96 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/20 to-emerald/20 border border-accent/20 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl">👨‍⚕️</div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Meet Our Founder
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2">
                  {clinicConfig.leadDentist.name}
                </h2>
                <p className="text-lg text-accent font-medium mt-2">
                  {clinicConfig.leadDentist.title}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {clinicConfig.leadDentist.bio}
              </p>

              <div className="space-y-2">
                <p className="font-semibold text-foreground">Qualifications:</p>
                <ul className="space-y-1">
                  {['DDS', 'Advanced Cosmetic Certification', 'Implant Specialist', '15+ Years Experience'].map(
                    (qual, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center gap-2">
                        <span className="text-accent">✓</span> {qual}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Experience Our Excellence
            </h2>
            <p className="text-muted-foreground mb-8">
              Book your consultation today and discover why patients trust Aristoothcrat.
            </p>
            <AppointmentButton
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Schedule Your Visit
            </AppointmentButton>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
