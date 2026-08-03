import { Smile, Sparkles, Shield, Zap, Award, Heart } from 'lucide-react'

/**
 * Services offered by Aristoothcrat Dental Clinic
 */
export const SERVICES = [
  {
    id: 'general-dentistry',
    name: 'General Dentistry',
    slug: 'general-dentistry',
    description: 'Comprehensive dental care including checkups, cleanings, and preventive treatments.',
    icon: Smile,
    color: 'text-blue-500',
    category: 'General Care',
  },
  {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    slug: 'cosmetic-dentistry',
    description: 'Transform your smile with veneers, bonding, and other aesthetic treatments.',
    icon: Sparkles,
    color: 'text-gold',
    category: 'Cosmetic',
  },
  {
    id: 'preventive',
    name: 'Preventive Dentistry',
    slug: 'preventive-dentistry',
    description: 'Regular cleanings, screenings, and sealants to maintain optimal oral health.',
    icon: Shield,
    color: 'text-emerald-500',
    category: 'General Care',
  },
  {
    id: 'restorative',
    name: 'Restorative Dentistry',
    slug: 'restorative-dentistry',
    description: 'Crowns, bridges, and advanced restorations to restore damaged teeth.',
    icon: Award,
    color: 'text-amber-500',
    category: 'Restorative',
  },
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    slug: 'teeth-whitening',
    description: 'Professional bleaching treatments for a brighter, whiter smile.',
    icon: Sparkles,
    color: 'text-white',
    category: 'Cosmetic',
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    slug: 'dental-implants',
    description: 'Complete tooth restoration with state-of-the-art implant technology.',
    icon: Zap,
    color: 'text-cyan-500',
    category: 'Major',
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    slug: 'orthodontics',
    description: 'Braces and aligners to straighten teeth and improve bite alignment.',
    icon: Award,
    color: 'text-purple-500',
    category: 'Specialty',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    slug: 'root-canal-treatment',
    description: 'Advanced endodontic treatment to save infected or damaged teeth.',
    icon: Heart,
    color: 'text-red-500',
    category: 'Major',
  },
]

/**
 * Team members at Aristoothcrat Dental Clinic
 */
export const TEAM_MEMBERS = [
  {
    id: 'leo-osowa',
    name: 'Dr. Leo Osowa',
    role: 'MD, CEO & Lead Dentist',
    specialization: 'General & Cosmetic Dentistry',
    image: '/images/team/leo-osowa.jpg',
    bio: 'With over 19 years of experience, Dr. Leo founded Aristoothcrat to bring premium dental care to Lagos.',
    qualifications: ['DDS', 'Advanced Cosmetic Certification', 'Implant Specialist'],
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 'dr-aisha',
    name: 'Dr. Aisha Muhammad',
    role: 'Cosmetic Dentist',
    specialization: 'Cosmetic & Esthetic Dentistry',
    image: '/images/team/aisha.jpg',
    bio: 'Specializing in smile design and cosmetic transformations with a keen eye for detail.',
    qualifications: ['DDS', 'Advanced Esthetic Dentistry', 'Veneers Specialist'],
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 'dr-chukwu',
    name: 'Dr. Chukwu Okonkwo',
    role: 'Implant Specialist',
    specialization: 'Dental Implants & Oral Surgery',
    image: '/images/team/chukwu.jpg',
    bio: 'Expert in advanced implant procedures with successful treatment of complex cases.',
    qualifications: ['DDS', 'Oral Surgery Certificate', 'Implantology Specialist'],
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
]

/**
 * Patient testimonials
 */
export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'Stan Enem',
    location: 'Lagos',
    treatment: 'Dental Implants',
    rating: 5,
    quote: 'The entire experience was seamless and professional. I got my smile back!',
    image: '/images/testimonials/stan.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'Moyosore Fayokun',
    location: 'Lagos',
    treatment: 'Cosmetic Dentistry',
    rating: 5,
    quote: 'Dr. Leo and the team are incredibly skilled. Highly recommended!',
    image: '/images/testimonials/moyosore.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Olusayo Ojo',
    location: 'Lagos',
    treatment: 'Teeth Whitening',
    rating: 5,
    quote: 'Professional service from start to finish. Very impressed with the results.',
    image: '/images/testimonials/olusayo.jpg',
  },
  {
    id: 'testimonial-4',
    name: 'Zainab Ojeifo',
    location: 'Lagos',
    treatment: 'General Dentistry',
    rating: 5,
    quote: 'Finally found a dental clinic that truly cares about patient comfort.',
    image: '/images/testimonials/zainab.jpg',
  },
]

/**
 * Blog posts
 */
export const BLOG_POSTS = [
  {
    id: 'blog-1',
    title: 'How Often Should You Visit a Dentist?',
    slug: 'how-often-dentist',
    category: 'General Care',
    date: '2024-01-15',
    author: 'Dr. Leo Osowa',
    readTime: '5 min read',
    excerpt: 'Learn about recommended dental visit frequency and why regular checkups are essential for oral health.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_3/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'Most patients benefit from a dental checkup and professional cleaning every six months. This rhythm helps your dentist catch small concerns before they become painful or expensive.',
      'Some people need more frequent visits, especially if they have gum disease, recurring cavities, braces, implants, diabetes, or a history of dental infections.',
      'A regular visit is not only about cleaning. It is a chance to review your gums, bite, restorations, oral hygiene routine, and any symptoms you may have noticed.',
    ],
    keyTakeaways: ['Six-month visits work well for many patients', 'Gum or cavity risk can require more frequent care', 'Preventive visits help avoid emergencies'],
  },
  {
    id: 'blog-2',
    title: 'Understanding Dental Implants: A Complete Guide',
    slug: 'dental-implants-guide',
    category: 'Restorative',
    date: '2024-01-10',
    author: 'Dr. Chukwu Okonkwo',
    readTime: '8 min read',
    excerpt: 'Everything you need to know about dental implants, from the procedure to recovery and maintenance.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_5/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'Dental implants replace missing teeth with a stable foundation placed in the jawbone and restored with a crown, bridge, or denture attachment.',
      'Treatment usually starts with a consultation, X-rays or scans, gum and bone assessment, and a discussion of your health history and goals.',
      'After placement, the implant needs time to integrate with the bone. Once healed, the final restoration is made to match your bite and smile.',
    ],
    keyTakeaways: ['Implants can replace one or multiple missing teeth', 'Planning is essential before treatment begins', 'Healing time is part of long-term implant success'],
  },
  {
    id: 'blog-3',
    title: 'Professional Teeth Whitening vs. At-Home Treatments',
    slug: 'teeth-whitening-comparison',
    category: 'Cosmetic',
    date: '2024-01-05',
    author: 'Dr. Aisha Muhammad',
    readTime: '6 min read',
    excerpt: 'Compare professional whitening treatments with over-the-counter options to make an informed choice.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_7/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'Professional whitening is supervised by a dental team, which helps protect your gums and manage tooth sensitivity while targeting stains effectively.',
      'At-home products can be convenient, but they may work slowly or unevenly, especially when stains are deep or restorations are present.',
      'Before whitening, it is important to confirm that your teeth and gums are healthy. Cavities, gum irritation, or leaking fillings should be treated first.',
    ],
    keyTakeaways: ['Professional whitening is faster and supervised', 'Dental restorations do not whiten like natural teeth', 'A checkup before whitening improves safety'],
  },
  {
    id: 'blog-4',
    title: 'What to Do When You Have a Toothache',
    slug: 'what-to-do-toothache',
    category: 'Emergency Care',
    date: '2024-01-22',
    author: 'Dr. Leo Osowa',
    readTime: '4 min read',
    excerpt: 'A practical guide to managing tooth pain and knowing when to call the clinic urgently.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_9/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'A toothache can come from decay, infection, gum inflammation, grinding, trauma, or food trapped between teeth. Pain that persists should be assessed by a dentist.',
      'Rinse gently with warm water, floss carefully around the area, and avoid chewing on the painful side. Do not place aspirin directly on the gum because it can burn the tissue.',
      'Seek urgent care if pain is severe, swelling is present, fever develops, or you have difficulty opening your mouth or swallowing.',
    ],
    keyTakeaways: ['Persistent tooth pain needs dental assessment', 'Swelling or fever is urgent', 'Avoid placing medication directly on the gums'],
  },
  {
    id: 'blog-5',
    title: 'Signs You May Need a Root Canal',
    slug: 'signs-you-need-root-canal',
    category: 'Restorative',
    date: '2024-01-28',
    author: 'Dr. Leo Osowa',
    readTime: '6 min read',
    excerpt: 'Learn the common symptoms of infected tooth pulp and why early treatment can help save your tooth.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_11/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'Root canal treatment may be needed when the soft tissue inside a tooth becomes inflamed or infected. This can happen because of deep decay, cracks, trauma, or repeated dental work.',
      'Symptoms can include lingering sensitivity to hot or cold, severe toothache, pain when biting, swelling, gum tenderness, or darkening of the tooth.',
      'The goal of a root canal is to remove infection, relieve pain, and preserve the natural tooth whenever possible.',
    ],
    keyTakeaways: ['Lingering hot or cold sensitivity is a warning sign', 'Pain when biting can indicate deeper damage', 'Root canal treatment can help save the tooth'],
  },
  {
    id: 'blog-6',
    title: 'Dental Care During Pregnancy',
    slug: 'dental-care-during-pregnancy',
    category: 'Preventive',
    date: '2024-02-03',
    author: 'Dr. Aisha Muhammad',
    readTime: '5 min read',
    excerpt: 'Pregnancy can affect gum health. Here is how to protect your smile safely during this season.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_13/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'Hormonal changes during pregnancy can make gums more sensitive, swollen, or likely to bleed. This is why dental hygiene and professional care remain important.',
      'Routine dental checkups and cleanings are generally safe during pregnancy. Always tell your dentist that you are pregnant and share any medical guidance from your doctor.',
      'Brush twice daily, clean between teeth, stay hydrated, and seek care if you notice pain, swelling, or bleeding that does not improve.',
    ],
    keyTakeaways: ['Pregnancy can increase gum sensitivity', 'Routine cleaning is usually safe', 'Tell your dentist about your pregnancy before treatment'],
  },
  {
    id: 'blog-7',
    title: 'How to Choose Between Braces and Aligners',
    slug: 'braces-vs-aligners',
    category: 'Orthodontics',
    date: '2024-02-09',
    author: 'Dr. Chukwu Okonkwo',
    readTime: '7 min read',
    excerpt: 'Both braces and aligners can straighten teeth. The best choice depends on your bite, habits, and goals.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_15/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'Braces are fixed appliances that can handle a wide range of tooth movement and bite correction. They work continuously because they stay on the teeth.',
      'Aligners are removable and discreet, but they require discipline. They must be worn for the recommended hours each day to work properly.',
      'A proper orthodontic consultation helps determine what your teeth and bite need, how long treatment may take, and which option fits your lifestyle.',
    ],
    keyTakeaways: ['Braces are fixed and highly versatile', 'Aligners require consistent wear', 'A consultation determines the best route'],
  },
  {
    id: 'blog-8',
    title: 'Why Bleeding Gums Should Not Be Ignored',
    slug: 'bleeding-gums-warning-signs',
    category: 'Preventive',
    date: '2024-02-15',
    author: 'Dr. Leo Osowa',
    readTime: '5 min read',
    excerpt: 'Bleeding gums can be an early sign of gum disease. Early care helps protect your teeth and smile.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_17/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'Bleeding gums are often linked to plaque buildup and gum inflammation. Even if the bleeding is mild, it should not become normal to you.',
      'Gum disease can progress quietly. As it advances, it may cause bad breath, gum recession, loose teeth, and bone loss around teeth.',
      'Professional cleaning, better home care, and regular monitoring can help control gum inflammation and protect your oral health.',
    ],
    keyTakeaways: ['Bleeding gums are commonly linked to inflammation', 'Gum disease can progress without much pain', 'Early treatment helps protect teeth'],
  },
  {
    id: 'blog-9',
    title: 'Caring for Your Smile After Cosmetic Dental Work',
    slug: 'care-after-cosmetic-dental-work',
    category: 'Cosmetic',
    date: '2024-02-21',
    author: 'Dr. Aisha Muhammad',
    readTime: '6 min read',
    excerpt: 'Protect veneers, bonding, whitening results, and other cosmetic treatments with simple daily habits.',
    image: 'https://res.cloudinary.com/dzn1k1z8r/video/upload/so_19/v1785469218/Aristoothcrat_Dental_16x9_xnypqv.jpg',
    content: [
      'Cosmetic dental work lasts longer when supported by consistent hygiene, regular dental reviews, and smart habits around food and biting forces.',
      'Avoid using your teeth to open packages, biting hard objects, or chewing ice. If you grind at night, your dentist may recommend a night guard.',
      'Whitening results and restorations benefit from routine cleaning and reduced exposure to heavy staining foods and drinks.',
    ],
    keyTakeaways: ['Protect cosmetic work from hard biting forces', 'Night guards can help patients who grind', 'Regular cleaning helps maintain results'],
  },
]

/**
 * Frequently asked questions
 */
export const FAQS = [
  {
    id: 'faq-1',
    question: 'What should I do in case of a dental emergency?',
    answer: 'Contact us immediately at any of our phone numbers. We have emergency protocols in place and can usually accommodate urgent cases the same day.',
  },
  {
    id: 'faq-2',
    question: 'Do you accept insurance?',
    answer: 'We work with most major insurance providers. Please contact us or bring your insurance card during your first visit for verification.',
  },
  {
    id: 'faq-3',
    question: 'How long does a typical dental implant procedure take?',
    answer: 'The initial consultation takes 30 minutes. The implant placement procedure takes 60-90 minutes. Full integration takes 3-6 months.',
  },
  {
    id: 'faq-4',
    question: 'Is teeth whitening safe?',
    answer: 'Professional teeth whitening is completely safe when performed by a qualified dentist. We use proven, FDA-approved whitening agents.',
  },
]

/**
 * Trust indicators for the homepage
 */
export const TRUST_INDICATORS = [
  {
    id: 'indicator-1',
    icon: Award,
    title: '15+ Years',
    description: 'Experience in dentistry',
  },
  {
    id: 'indicator-2',
    icon: Heart,
    title: '5000+',
    description: 'Happy patients',
  },
  {
    id: 'indicator-3',
    icon: Sparkles,
    title: '25+',
    description: 'Treatment types',
  },
  {
    id: 'indicator-4',
    icon: Shield,
    title: '100%',
    description: 'Sterilization certified',
  },
  {
    id: 'indicator-5',
    icon: Zap,
    title: 'Latest',
    description: 'Technology & equipment',
  },
]

/**
 * Treatment process steps
 */
export const TREATMENT_PROCESS = [
  {
    step: 1,
    title: 'Consultation',
    description: 'Initial assessment and discussion of your dental needs and goals.',
  },
  {
    step: 2,
    title: 'Planning',
    description: 'Detailed treatment plan with cost estimate and timeline.',
  },
  {
    step: 3,
    title: 'Preparation',
    description: 'Preparation of teeth and surrounding areas for the procedure.',
  },
  {
    step: 4,
    title: 'Treatment',
    description: 'Expert execution of the planned dental procedure.',
  },
  {
    step: 5,
    title: 'Follow-up',
    description: 'Regular check-ins and maintenance for optimal results.',
  },
]

/**
 * Why Choose Us benefits
 */
export const WHY_CHOOSE_US = [
  {
    id: 'benefit-1',
    icon: Award,
    title: 'Experienced Team',
    description: 'Our dentists have 15+ years of experience and specialized training.',
  },
  {
    id: 'benefit-2',
    icon: Zap,
    title: 'Modern Technology',
    description: 'State-of-the-art equipment for accurate diagnosis and treatment.',
  },
  {
    id: 'benefit-3',
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'We prioritize your comfort and satisfaction in every interaction.',
  },
  {
    id: 'benefit-4',
    icon: Shield,
    title: 'Hygiene Standards',
    description: 'Strict sterilization and infection control protocols.',
  },
  {
    id: 'benefit-5',
    icon: Sparkles,
    title: 'Comprehensive Services',
    description: 'Wide range of treatments from general to cosmetic dentistry.',
  },
  {
    id: 'benefit-6',
    icon: Heart,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with flexible payment options available.',
  },
]
