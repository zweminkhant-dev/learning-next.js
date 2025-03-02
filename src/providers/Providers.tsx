'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from './theme'

export const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
