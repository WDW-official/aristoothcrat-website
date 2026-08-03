'use client'

import { clinicConfig } from '@/lib/config'

const whatsappLogoUrl =
  'https://res.cloudinary.com/dzn1k1z8r/image/upload/v1785728009/Pngtree_whatsapp_icon_whatsapp_logo_whatsapp_3584845_dlgtvd.png'

export default function WhatsAppFloat() {
  const whatsappNumber = clinicConfig.contact.whatsapp.replace(/\D/g, '')

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aristoothcrat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <span className="pointer-events-none absolute right-full mr-3 rounded-lg bg-foreground px-3 py-2 text-sm font-semibold text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        WhatsApp Us
      </span>
      <img
        src={whatsappLogoUrl}
        alt=""
        className="h-10 w-10 object-contain sm:h-12 sm:w-12"
        aria-hidden="true"
      />
    </a>
  )
}
