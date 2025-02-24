import { useState } from 'react'
import { ThemeContextType, ThemeType } from '../types'

export const useContextValue = () => {
  const [theme, setTheme] = useState<ThemeType>('light')
  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  }
  return { theme, toggleTheme } as ThemeContextType
}
