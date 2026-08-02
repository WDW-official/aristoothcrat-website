'use client'

import { MessageCircle } from 'lucide-react'
import { clinicConfig } from '@/lib/config'

export default function WhatsAppFloat() {
  const whatsappNumber = clinicConfig.contact.whatsapp.replace(/\D/g, '')

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aristoothcrat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  )
}
