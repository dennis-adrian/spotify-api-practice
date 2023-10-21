import { useEffect, useState } from 'react'

export const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    // set dark mode initial value
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)

    // Add an event listener to detect changes in dark mode preference
    const darkModeListener = (e) => setIsDarkMode(e.matches)
    darkModeMediaQuery.addEventListener('change', darkModeListener)

    return () => {
      darkModeMediaQuery.removeEventListener('change', darkModeListener)
    }
  }, [])

  return isDarkMode
}
