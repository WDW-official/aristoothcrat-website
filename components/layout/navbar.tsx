'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { cn } from '@/lib/utils'
import { AppointmentButton } from '@/components/layout/appointment-drawer'
import { BrandLogo } from '@/components/shared/brand-logo'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <motion.nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Aristoothcrat Dental Clinic home">
            <motion.span
              className="block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BrandLogo className="h-16 max-w-[260px]" />
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = isActiveLink(link.href)

              return (
                <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium',
                      isActive
                        ? 'bg-accent/15 text-accent'
                        : 'hover:bg-accent/10 hover:text-accent text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.div
              className="hidden sm:inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AppointmentButton className="bg-transparent p-0 text-sm text-inherit hover:bg-transparent">
                Book Now
              </AppointmentButton>
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-2 pb-4">
            {NAV_LINKS.map((link) => {
              const isActive = isActiveLink(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'px-4 py-2 rounded-lg transition-colors text-sm font-medium',
                    isActive
                      ? 'bg-accent/15 text-accent'
                      : 'hover:bg-accent/10 hover:text-accent'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <AppointmentButton
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </AppointmentButton>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
