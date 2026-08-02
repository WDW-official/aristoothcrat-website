'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Share2, ArrowRight } from 'lucide-react'
import { TEAM_MEMBERS } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'
import SectionHeading from '@/components/shared/section-heading'
import PageTransition from '@/components/shared/page-transition'
import { AppointmentButton } from '@/components/layout/appointment-drawer'

export default function TeamPage() {
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
              Our Expert Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals dedicated to your dental health and beautiful smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                variants={staggerItem}
                className="group"
              >
                <motion.div
                  className="relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-emerald/20 border border-border mb-6 flex items-center justify-center shadow-lg">
                    <div className="text-7xl">👨‍⚕️</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-accent font-semibold">{member.role}</p>
                    </div>

                    <p className="text-sm text-accent/80 font-medium">{member.specialization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                    {/* Qualifications */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Qualifications
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.qualifications.map((qual, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full"
                          >
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Share2 className="w-5 h-5 text-accent" />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@aristoothcrat.com`}
                        className="w-10 h-10 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-accent" />
                      </a>
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="inline-flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm pt-4"
                      whileHover={{ x: 4 }}
                    >
                      <AppointmentButton
                        dentist={member.id}
                        className="gap-2 bg-transparent p-0 text-sm text-accent hover:bg-transparent"
                      >
                        <span>Book with {member.name.split(' ')[0]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </AppointmentButton>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Collaboration & Excellence"
            description="Our team believes in continuous learning and collaboration to provide you with the best possible care."
          />

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="font-semibold text-foreground mb-3">Continuous Education</h3>
              <p className="text-muted-foreground">
                Our team regularly attends seminars, workshops, and training programs to stay updated with
                the latest developments in dentistry.
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="font-semibold text-foreground mb-3">Patient-Focused Approach</h3>
              <p className="text-muted-foreground">
                Every member of our team is committed to understanding your unique needs and delivering
                personalized solutions.
              </p>
            </div>

            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="font-semibold text-foreground mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We maintain rigorous standards of hygiene, sterilization, and clinical excellence across
                all procedures.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Meet Our Team in Person
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule your appointment and experience professional dental care from our expert team.
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
