'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function TopLoader() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = React.useState(false)
  const timeoutRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const link = target?.closest('a[href]') as HTMLAnchorElement | null

      if (!link) return
      if (link.target && link.target !== '_self') return
      if (link.hasAttribute('download')) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const url = new URL(link.href)
      const currentUrl = new URL(window.location.href)

      if (url.origin !== currentUrl.origin) return
      if (url.pathname === currentUrl.pathname && url.search === currentUrl.search) return

      setIsLoading(true)
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [])

  React.useEffect(() => {
    if (!isLoading) return

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsLoading(false)
    }, 350)

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [pathname, isLoading])

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-0.5 w-full overflow-hidden bg-transparent"
      aria-hidden="true"
    >
      <div
        className={`h-full bg-accent shadow-[0_0_12px_rgba(2,81,160,0.65)] transition-all duration-500 ease-out ${
          isLoading ? 'w-3/4 opacity-100' : 'w-0 opacity-0'
        }`}
      />
    </div>
  )
}
