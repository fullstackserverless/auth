import React, { memo } from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'

interface ThemeProviderT {
  children?: React.ReactNode
  theme: {
    dark: boolean
    colors: {
      primary: string
      background: string
      card: string
      text: string
      border: string
    }
  }
}

const ThemeProvider = memo<ThemeProviderT>(({ children, theme }) => {
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </AppearanceProvider>
    </>
  )
})

export default ThemeProvider
