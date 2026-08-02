'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent/10 transition-colors"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-accent" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-accent" />
      </motion.div>
    </motion.button>
  )
}
