/**
 * Central configuration file for Aristoothcrat Dental Clinic
 * Contains all clinic information, contact details, hours, and key settings
 */

export const clinicConfig = {
  name: 'Aristoothcrat Dental Clinic',
  tagline: 'Exceptional dentistry. Designed around you.',
  description: 'Premium dental services including implants, cosmetic dentistry, preventive care, and more in Lagos, Nigeria.',
  logo: {
    light: 'https://res.cloudinary.com/dzn1k1z8r/image/upload/v1785630966/aristoothcrat-logo-light_jcfnw9.png',
    dark: 'https://res.cloudinary.com/dzn1k1z8r/image/upload/v1785630913/aristoothcrat-logo-dark_g1xacw.png',
  },
  
  // Contact Information
  contact: {
    email: 'info@aristoothcrat.com',
    phone: {
      primary: '+234 802 3200 154',
      secondary: '+234 816 833 1738',
      tertiary: '+234 708 356 3640',
    },
    whatsapp: '+2348168331738',
    address: {
      street: '25 Salvation Rd',
      area: 'Opebi',
      city: 'Ikeja',
      state: 'Lagos',
      country: 'Nigeria',
      postalCode: '101233',
    },
  },

  // Operating Hours
  hours: {
    monday: { open: '9:00 AM', close: '6:00 PM' },
    tuesday: { open: '9:00 AM', close: '6:00 PM' },
    wednesday: { open: '9:00 AM', close: '6:00 PM' },
    thursday: { open: '9:00 AM', close: '6:00 PM' },
    friday: { open: '9:00 AM', close: '6:00 PM' },
    saturday: { open: '10:00 AM', close: '4:00 PM' },
    sunday: { open: 'Closed', close: 'Closed' },
  },

  // Social Media Links
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#',
    youtube: '#',
  },

  // About the clinic
  aboutText: `Aristoothcrat Dental Clinic is dedicated to providing exceptional dental care with a patient-centered approach. 
  Our team of experienced dentists uses state-of-the-art technology and modern techniques to ensure the best outcomes for every patient.
  We believe that every smile deserves exceptional care, and we're committed to making dental health accessible and comfortable for all.`,

  // Team lead info
  leadDentist: {
    name: 'Dr. Leo Osowa',
    title: 'MD, CEO',
    specialization: 'General & Cosmetic Dentistry',
    bio: 'With over 15 years of experience in dentistry, Dr. Leo Osowa founded Aristoothcrat with a vision to bring premium dental care to Lagos.',
  },

  // SEO
  seo: {
    siteName: 'Aristoothcrat Dental Clinic',
    siteUrl: 'https://aristoothcrat.com',
    socialImage: '/og-image.png',
    twitterHandle: '@aristoothcrat',
  },

  // Features & Services Count
  stats: {
    yearsExperience: 15,
    patientsServed: 5000,
    teamMembers: 12,
    treatments: 25,
  },
}

export const clinicAddress = `${clinicConfig.contact.address.street}, ${clinicConfig.contact.address.area}, ${clinicConfig.contact.address.city}, ${clinicConfig.contact.address.state} ${clinicConfig.contact.address.postalCode}, ${clinicConfig.contact.address.country}`

export const getPhoneNumbers = () => [
  clinicConfig.contact.phone.primary,
  clinicConfig.contact.phone.secondary,
  clinicConfig.contact.phone.tertiary,
]

export const formatPhoneNumber = (phone: string) => phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
