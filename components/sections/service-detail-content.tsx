'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Award, CheckCircle, Clock } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import PageTransition from '@/components/shared/page-transition'
import { AppointmentButton } from '@/components/layout/appointment-drawer'
import PageHero from '@/components/shared/page-hero'
import { pageHeroImages } from '@/lib/page-hero-images'

const serviceDetails: Record<
  string,
  {
    overview: string
    whoFor: string[]
    benefits: string[]
    duration: string
    recovery: string
    results: string
  }
> = {
  'general-dentistry': {
    overview:
      'General dentistry keeps your teeth, gums, and mouth healthy through routine exams, professional cleaning, early diagnosis, and practical treatment planning.',
    whoFor: ['Patients due for a dental checkup', 'People with tooth sensitivity or gum bleeding', 'Families looking for routine oral care', 'Anyone who wants to prevent future dental issues'],
    benefits: ['Early detection of dental problems', 'Cleaner teeth and fresher breath', 'Reduced risk of gum disease', 'Personalized oral hygiene advice', 'Stronger long-term oral health', 'Confidence between visits'],
    duration: '30-60 mins',
    recovery: 'None',
    results: 'Same-day clarity',
  },
  'cosmetic-dentistry': {
    overview:
      'Cosmetic dentistry focuses on improving the shape, color, balance, and overall appearance of your smile while keeping results natural and healthy-looking.',
    whoFor: ['Patients unhappy with their smile appearance', 'People with chipped, uneven, or stained teeth', 'Anyone preparing for a major event', 'Patients interested in veneers, bonding, or smile design'],
    benefits: ['Brighter smile appearance', 'Improved tooth shape and symmetry', 'More confident expression', 'Natural-looking treatment options', 'Customized smile planning', 'A polished, refreshed look'],
    duration: '45-90 mins',
    recovery: 'Minimal',
    results: 'Immediate to staged',
  },
  preventive: {
    overview:
      'Preventive dentistry helps stop small dental concerns from becoming painful or expensive problems through screenings, cleanings, sealants, and education.',
    whoFor: ['Children and adults maintaining healthy teeth', 'Patients prone to cavities', 'People with gum health concerns', 'Anyone who wants fewer emergency visits'],
    benefits: ['Lower cavity risk', 'Healthier gums', 'Better daily care habits', 'Early problem detection', 'Long-term treatment savings', 'Peace of mind'],
    duration: '30-45 mins',
    recovery: 'None',
    results: 'Ongoing protection',
  },
  restorative: {
    overview:
      'Restorative dentistry repairs damaged, worn, decayed, or missing teeth so your smile can function comfortably and look natural again.',
    whoFor: ['Patients with broken or decayed teeth', 'People needing crowns, bridges, or fillings', 'Anyone struggling to chew comfortably', 'Patients replacing old restorations'],
    benefits: ['Restored bite function', 'Stronger damaged teeth', 'Natural-looking repairs', 'Reduced discomfort', 'Protected tooth structure', 'Improved everyday chewing'],
    duration: '45-120 mins',
    recovery: 'Usually minimal',
    results: 'Same-day to staged',
  },
  whitening: {
    overview:
      'Professional teeth whitening lifts stubborn stains safely and efficiently for a noticeably brighter smile than most at-home products can provide.',
    whoFor: ['Patients with coffee, tea, or wine stains', 'People wanting a brighter smile', 'Anyone preparing for photos or events', 'Patients seeking supervised whitening care'],
    benefits: ['Brighter tooth shade', 'Fast visible improvement', 'Supervised treatment safety', 'Reduced surface staining', 'More confident smile', 'Simple maintenance guidance'],
    duration: '45-75 mins',
    recovery: 'Possible short sensitivity',
    results: 'Same-day brightness',
  },
  implants: {
    overview:
      'Dental implants replace missing teeth with stable, long-lasting restorations designed to look, feel, and function close to natural teeth.',
    whoFor: ['Patients missing one or more teeth', 'People unhappy with loose dentures', 'Anyone seeking a fixed tooth replacement', 'Patients with healthy bone or implant treatment plans'],
    benefits: ['Stable tooth replacement', 'Improved chewing comfort', 'Natural-looking restoration', 'Jawbone support', 'Long-term durability', 'Better smile confidence'],
    duration: 'Consultation to staged care',
    recovery: 'Several days after placement',
    results: 'Long-term restoration',
  },
  orthodontics: {
    overview:
      'Orthodontic treatment straightens teeth and improves bite alignment using braces or aligners planned around your smile, comfort, and lifestyle.',
    whoFor: ['Patients with crowded or spaced teeth', 'People with bite alignment concerns', 'Teens or adults considering braces', 'Anyone interested in clear aligners'],
    benefits: ['Straighter teeth', 'Improved bite alignment', 'Easier cleaning', 'Better smile balance', 'Long-term oral health support', 'More confident appearance'],
    duration: 'Months to staged care',
    recovery: 'Adjustment sensitivity',
    results: 'Gradual alignment',
  },
  'root-canal': {
    overview:
      'Root canal treatment removes infection from inside a tooth, relieves pain, and helps preserve your natural tooth instead of removing it.',
    whoFor: ['Patients with severe toothache', 'People with infected or damaged tooth pulp', 'Anyone with lingering hot or cold sensitivity', 'Patients trying to save a natural tooth'],
    benefits: ['Pain relief', 'Tooth preservation', 'Infection control', 'Restored chewing comfort', 'Avoided extraction when possible', 'Protected natural smile'],
    duration: '60-90 mins',
    recovery: 'Mild short tenderness',
    results: 'Relief and restoration',
  },
}

interface ServiceDetailContentProps {
  slug: string
}

export default function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    return null
  }

  const details = serviceDetails[service.id]
  const IconComponent = service.icon
  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3)

  return (
    <PageTransition>
      <section className="pt-24 pb-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </section>

      <PageHero
        title={service.name}
        description={service.description}
        eyebrow={service.category}
        image={pageHeroImages.serviceDetail}
        className="py-20"
        contentClassName="flex max-w-4xl flex-col items-center"
      >
            {/* <motion.div
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 shadow-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <IconComponent className="w-10 h-10 text-accent" />
            </motion.div> */}

            <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:flex-row">
              <AppointmentButton
                service={service.id}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Book This Service
              </AppointmentButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/10"
              >
                Ask a Question
              </Link>
            </div>
      </PageHero>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {details.overview}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Aristoothcrat Dental Clinic, your treatment starts with a careful consultation so the
                plan fits your health, comfort, timeline, and smile goals.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Who Is This For?
              </h2>
              <ul className="space-y-3">
                {details.whoFor.map((item) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.benefits.map((benefit) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Clock, label: 'Duration', value: details.duration },
                { icon: Award, label: 'Recovery', value: details.recovery },
                { icon: CheckCircle, label: 'Results', value: details.results },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.label}
                    className="bg-gradient-to-br from-accent/10 to-secondary/20 border border-border rounded-xl p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => {
                const RelIcon = relatedService.icon

                return (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/services/${relatedService.slug}`}>
                      <motion.div
                        className="bg-background border border-border rounded-xl p-6 hover:border-accent transition-colors"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <RelIcon className="w-8 h-8 text-accent mb-3" />
                        <h3 className="font-semibold text-foreground mb-2">
                          {relatedService.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {relatedService.description}
                        </p>
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule your consultation with our expert team to discuss your treatment options.
            </p>
            <AppointmentButton
              service={service.id}
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Book an Appointment
            </AppointmentButton>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
