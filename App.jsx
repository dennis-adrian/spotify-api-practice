import HomePage from './src/pages/HomePage'
import { useIsDarkMode } from './src/hooks/useIsDarkMode'
import { DarkModeContext } from './src/contexts'

const App = () => {
  const isDarkMode = useIsDarkMode()

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <HomePage />
    </DarkModeContext.Provider>
  )
}

export default App
