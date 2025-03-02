import { Optional } from '@/types'
import { createContext, PropsWithChildren, useContext } from 'react'
import { useContextValue } from './hooks'
import { ThemeContextType } from './types'

const ThemeContext = createContext<Optional<ThemeContextType>>(null)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context as ThemeContextType
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const contextValue = useContextValue()
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
