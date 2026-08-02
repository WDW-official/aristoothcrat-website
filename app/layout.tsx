import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import WhatsAppFloat from '@/components/layout/whatsapp-float'
import { AppointmentDrawerProvider } from '@/components/layout/appointment-drawer'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Aristoothcrat Dental Clinic | Premium Dentistry in Lagos',
  description: 'Exceptional dentistry designed around you. Premium dental services including implants, cosmetic dentistry, and comprehensive oral care in Lagos, Nigeria.',
  generator: 'v0.app',
  keywords: ['dentist', 'dental clinic', 'Lagos', 'implants', 'cosmetic dentistry', 'teeth whitening'],
  openGraph: {
    title: 'Aristoothcrat Dental Clinic',
    description: 'Exceptional dentistry designed around you.',
    type: 'website',
    locale: 'en_NG',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0251a0' },
    { media: '(prefers-color-scheme: dark)', color: '#0251a0' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`smooth-scroll ${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AppointmentDrawerProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </AppointmentDrawerProvider>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
