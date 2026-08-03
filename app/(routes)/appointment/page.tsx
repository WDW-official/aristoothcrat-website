'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft, CheckCircle, Calendar, User, Phone, MessageSquare } from 'lucide-react'
import { SERVICES, TEAM_MEMBERS } from '@/lib/constants'
import { staggerItem } from '@/lib/animations'
import PageTransition from '@/components/shared/page-transition'
import PageHero from '@/components/shared/page-hero'
import { pageHeroImages } from '@/lib/page-hero-images'

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    dentist: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId })
  }

  const handleDentistSelect = (dentistId: string) => {
    setFormData({ ...formData, dentist: dentistId })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      date: e.target.value,
    })
  }

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate booking submission
    setStep(6)
  }

  const steps = ['Service', 'Dentist', 'Date & Time', 'Your Info', 'Review', 'Confirmation']

  return (
    <PageTransition>
      {/* Hero Section */}
      <PageHero
        title="Book Your Appointment"
        description="Easy scheduling in just a few steps. Your appointment will be pending confirmation by our clinic."
        image={pageHeroImages.appointment}
      />

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <motion.div
            className="flex items-center justify-between mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {steps.map((stepName, idx) => (
              <div key={idx} className="flex items-center flex-1">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                    step > idx + 1
                      ? 'bg-accent text-accent-foreground'
                      : step === idx + 1
                        ? 'bg-accent text-accent-foreground ring-4 ring-accent/30'
                        : 'bg-card border border-border text-muted-foreground'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step > idx + 1 ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                </motion.div>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded-full transition-all ${
                      step > idx + 1 ? 'bg-accent' : 'bg-border'
                    }`}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Form Steps */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div variants={staggerItem} className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  What service do you need?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <motion.button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.id)}
                        className={`relative text-left p-6 rounded-xl border-2 transition-all ${
                          formData.service === service.id
                            ? 'border-accent bg-accent/10'
                            : 'border-border hover:border-accent/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className="w-6 h-6 text-accent mb-3" />
                        <p className="font-semibold text-foreground">{service.name}</p>
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Dentist Selection */}
            {step === 2 && (
              <motion.div variants={staggerItem} className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Who would you prefer?
                </h2>
                <div className="space-y-4">
                  <motion.button
                    type="button"
                    onClick={() => handleDentistSelect('')}
                    className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                      formData.dentist === ''
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-accent/50'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="font-semibold text-foreground">No Preference</p>
                    <p className="text-sm text-muted-foreground mt-1">Our team will assign the best dentist for your appointment</p>
                  </motion.button>

                  {TEAM_MEMBERS.map((member) => (
                    <motion.button
                      key={member.id}
                      type="button"
                      onClick={() => handleDentistSelect(member.id)}
                      className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                        formData.dentist === member.id
                          ? 'border-accent bg-accent/10'
                          : 'border-border hover:border-accent/50'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <p className="font-semibold text-foreground">{member.name}</p>
                      <p className="text-sm text-accent">{member.role}</p>
                      <p className="text-sm text-muted-foreground mt-1">{member.specialization}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <motion.div variants={staggerItem} className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  When would you like to visit?
                </h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleDateChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                      <motion.button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`py-2 px-3 rounded-lg transition-all ${
                          formData.time === time
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-card border border-border hover:border-accent'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Personal Information */}
            {step === 4 && (
              <motion.div variants={staggerItem} className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Tell us about yourself
                </h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Any special requirements or concerns..."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <motion.div variants={staggerItem} className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Review Your Appointment
                </h2>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-sm text-muted-foreground mb-1">Service</p>
                    <p className="font-semibold text-foreground">
                      {SERVICES.find((s) => s.id === formData.service)?.name}
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-sm text-muted-foreground mb-1">Dentist</p>
                    <p className="font-semibold text-foreground">
                      {formData.dentist
                        ? TEAM_MEMBERS.find((t) => t.id === formData.dentist)?.name
                        : 'Any Available'}
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
                    <p className="font-semibold text-foreground">
                      {formData.date} at {formData.time}
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <p className="text-sm text-muted-foreground mb-1">Contact</p>
                    <p className="font-semibold text-foreground">{formData.name}</p>
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                    <p className="text-sm text-muted-foreground">{formData.phone}</p>
                  </div>
                </div>
                <div className="bg-blue/10 border border-blue/20 rounded-xl p-4">
                  <p className="text-sm text-blue-400">
                    Your appointment is pending confirmation by our clinic. We&apos;ll contact you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 6: Confirmation */}
            {step === 6 && (
              <motion.div variants={staggerItem} className="text-center space-y-6">
                <motion.div
                  className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </motion.div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                    Booking Submitted!
                  </h2>
                  <p className="text-muted-foreground">
                    Thank you for booking with Aristoothcrat. We&apos;ll confirm your appointment within 24 hours.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 text-left">
                  <p className="text-sm text-muted-foreground mb-2">Confirmation details sent to:</p>
                  <p className="font-semibold text-foreground">{formData.email}</p>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            {step < 6 && (
              <motion.div
                className="flex gap-4 pt-8 border-t border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  type="button"
                  onClick={handlePrev}
                  disabled={step === 1}
                  className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </motion.button>
                <motion.button
                  type={step === 5 ? 'submit' : 'button'}
                  onClick={step === 5 ? undefined : handleNext}
                  disabled={
                    (step === 1 && !formData.service) ||
                    (step === 2 && !formData.dentist && formData.dentist !== '') ||
                    (step === 3 && (!formData.date || !formData.time)) ||
                    (step === 4 && (!formData.name || !formData.email || !formData.phone))
                  }
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {step === 5 ? 'Confirm Booking' : 'Continue'}
                  {step < 5 && <ChevronRight className="w-5 h-5" />}
                </motion.button>
              </motion.div>
            )}
          </motion.form>

          {/* Confirmation CTA */}
          {step === 6 && (
            <motion.div
              className="flex gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/"
                className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-center"
              >
                Back to Home
              </a>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
