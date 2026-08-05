'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TEAM_MEMBERS } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function TeamSection() {
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
            Our Team
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Meet Our Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our experienced team of dental professionals is dedicated to providing you with exceptional care.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 sm:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={staggerItem}
              className="group w-full max-w-sm md:w-[calc(50%-1rem)]"
            >
              {/* <Link href={`/team/${member.id}`}> */}
                <motion.div
                  className="relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-emerald/20 border border-border mb-4 flex items-center justify-center">
                    {member.image.startsWith('https://') ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="text-6xl">👨‍⚕️</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-accent font-medium">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>

                    {/* Qualifications */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {member.qualifications.slice(0, 2).map((qual, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>

                    {/* View Profile */}
                    <motion.div
                      className="pt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-sm font-medium">View Profile</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              {/* </Link> */}
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/team" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all">
            View Full Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
