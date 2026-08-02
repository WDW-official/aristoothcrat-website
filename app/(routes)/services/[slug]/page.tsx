import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/constants'
import ServiceDetailContent from '@/components/sections/service-detail-content'

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((item) => item.slug === slug)

  if (!service) {
    return {
      title: 'Service Not Found | Aristoothcrat Dental Clinic',
    }
  }

  return {
    title: `${service.name} | Aristoothcrat Dental Clinic`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params
  const service = SERVICES.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailContent slug={slug} />
}
