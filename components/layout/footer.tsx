'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronUp,
  Share2,
} from 'lucide-react'
import { clinicConfig, clinicAddress } from '@/lib/config'
import { BrandLogo } from '@/components/shared/brand-logo'

const FOOTER_SECTIONS = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Team', href: '/team' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'General Dentistry', href: '/services/general-dentistry' },
      { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
      { label: 'Dental Implants', href: '/services/dental-implants' },
      { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
      { label: 'Root Canal', href: '/services/root-canal-treatment' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#2b3a5e] border-t border-white/10 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BrandLogo className="mb-3 h-16 max-w-[260px]" />
              <p className="text-sm text-white/75">{clinicConfig.tagline}</p>
              <div className="flex gap-4 mt-6">
                <a
                  href={clinicConfig.social.facebook}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Share2 className="w-5 h-5" />
                </a>
                <a
                  href={clinicConfig.social.instagram}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Share2 className="w-5 h-5" />
                </a>
                <a
                  href={clinicConfig.social.twitter}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href={`mailto:${clinicConfig.contact.email}`}
                className="flex items-start gap-3 text-sm text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{clinicConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${clinicConfig.contact.phone.primary}`}
                className="flex items-start gap-3 text-sm text-white/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{clinicConfig.contact.phone.primary}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{clinicAddress}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/65">
            © 2024 {clinicConfig.name}. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-5 h-5 text-accent" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
