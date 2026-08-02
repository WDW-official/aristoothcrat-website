'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, CheckCircle, Send, X } from 'lucide-react'
import { SERVICES, TEAM_MEMBERS } from '@/lib/constants'
import { cn } from '@/lib/utils'

type AppointmentDefaults = {
  service?: string
  dentist?: string
}

type AppointmentDrawerContextValue = {
  openAppointment: (defaults?: AppointmentDefaults) => void
}

const AppointmentDrawerContext = React.createContext<AppointmentDrawerContextValue | null>(null)

const initialFormData = {
  service: '',
  dentist: '',
  date: '',
  time: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
}

export function AppointmentDrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState(initialFormData)

  const openAppointment = React.useCallback((defaults?: AppointmentDefaults) => {
    setSubmitted(false)
    setFormData({
      ...initialFormData,
      service: defaults?.service ?? '',
      dentist: defaults?.dentist ?? '',
    })
    setIsOpen(true)
  }, [])

  const closeAppointment = () => {
    setIsOpen(false)
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  React.useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAppointment()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <AppointmentDrawerContext.Provider value={{ openAppointment }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[70] bg-foreground/25 backdrop-blur-sm"
              aria-label="Close appointment form"
              onClick={closeAppointment}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="appointment-drawer-title"
              className="fixed right-0 top-0 z-[80] flex h-dvh w-full max-w-xl flex-col border-l border-border bg-background shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            >
              <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-5 sm:px-6">
                <div>
                  <p className="mb-1 text-sm font-medium text-accent">Appointment Request</p>
                  <h2 id="appointment-drawer-title" className="font-serif text-2xl font-bold text-foreground">
                    Book Your Visit
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Share your preferred details and our clinic will confirm your appointment.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeAppointment}
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg hover:bg-accent/10"
                  aria-label="Close appointment form"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
                {submitted ? (
                  <div className="flex min-h-full flex-col items-center justify-center text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-foreground">Request Sent</h3>
                    <p className="mt-3 max-w-sm text-muted-foreground">
                      Thank you, {formData.name || 'there'}. We will contact you within 24 hours to confirm
                      your appointment.
                    </p>
                    <button
                      type="button"
                      onClick={closeAppointment}
                      className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="drawer-service" className="mb-2 block text-sm font-medium text-foreground">
                        Service
                      </label>
                      <select
                        id="drawer-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="drawer-dentist" className="mb-2 block text-sm font-medium text-foreground">
                        Preferred Dentist
                      </label>
                      <select
                        id="drawer-dentist"
                        name="dentist"
                        value={formData.dentist}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                      >
                        <option value="">No preference</option>
                        {TEAM_MEMBERS.map((member) => (
                          <option key={member.id} value={member.id}>
                            {member.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="drawer-date" className="mb-2 block text-sm font-medium text-foreground">
                          Preferred Date
                        </label>
                        <input
                          id="drawer-date"
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="drawer-time" className="mb-2 block text-sm font-medium text-foreground">
                          Preferred Time
                        </label>
                        <select
                          id="drawer-time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                        >
                          <option value="">Select time</option>
                          {['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="drawer-name" className="mb-2 block text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <input
                        id="drawer-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="drawer-email" className="mb-2 block text-sm font-medium text-foreground">
                          Email
                        </label>
                        <input
                          id="drawer-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="drawer-phone" className="mb-2 block text-sm font-medium text-foreground">
                          Phone
                        </label>
                        <input
                          id="drawer-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Your phone"
                          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="drawer-notes" className="mb-2 block text-sm font-medium text-foreground">
                        Notes
                      </label>
                      <textarea
                        id="drawer-notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Any concern or special request..."
                        className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                    >
                      <Send className="h-4 w-4" />
                      Send Appointment Request
                    </button>
                  </form>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </AppointmentDrawerContext.Provider>
  )
}

type AppointmentButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & AppointmentDefaults

export function AppointmentButton({
  service,
  dentist,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: AppointmentButtonProps) {
  const context = React.useContext(AppointmentDrawerContext)

  if (!context) {
    throw new Error('AppointmentButton must be used inside AppointmentDrawerProvider')
  }

  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground transition-colors hover:bg-accent/90',
        className,
      )}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) {
          context.openAppointment({ service, dentist })
        }
      }}
      {...props}
    >
      {children ?? (
        <>
          <Calendar className="h-5 w-5" />
          Book Appointment
        </>
      )}
    </button>
  )
}
