import { useEffect, useState } from 'react'

export const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    // Check if the user prefers dark mode
    if (window.matchMedia && darkModeMediaQuery) {
      setIsDarkMode(true)
    }

    // Add an event listener to detect changes in dark mode preference
    const darkModeListener = (e) => {
      setIsDarkMode(e.matches)
    }

    darkModeMediaQuery.addEventListener('change', darkModeListener)

    return () => {
      darkModeMediaQuery.removeEventListener('change', darkModeListener)
    }
  }, [])

  return isDarkMode
}
