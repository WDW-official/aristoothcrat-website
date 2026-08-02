import HeroSection from '@/components/sections/hero-section'
import AboutHomeSection from '@/components/sections/about-home-section'
import StatsSection from '@/components/sections/stats-section'
import ServicesGrid from '@/components/sections/services-grid'
import TeamSection from '@/components/sections/team-section'
import TestimonialsCarousel from '@/components/sections/testimonials-carousel'
import CTASection from '@/components/sections/cta-section'
import ContactSection from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutHomeSection />
      <StatsSection />
      <ServicesGrid />
      <TeamSection />
      <TestimonialsCarousel />
      <CTASection />
      <ContactSection />
    </>
  )
}
