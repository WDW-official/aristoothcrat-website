import { clinicConfig } from '@/lib/config'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  const imageClassName = cn('w-auto object-contain', className)

  return (
    <>
      <img
        src={clinicConfig.logo.light}
        alt="Aristoothcrat Dental Clinic"
        className={cn(imageClassName, 'block dark:hidden')}
      />
      <img
        src={clinicConfig.logo.dark}
        alt="Aristoothcrat Dental Clinic"
        className={cn(imageClassName, 'hidden dark:block')}
      />
    </>
  )
}
