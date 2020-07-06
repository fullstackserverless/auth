import React, { useState } from 'react'
import { Switch, View } from 'react-native'
import ThemeProvider from './ThemeProvider'
import UIKit from './UIKit'

const DarkTheme = {
  dark: true,
  colors: {
    primary: '#50E3C2',
    background: '#1D1E1F',
    card: '#1D1E1F',
    text: '#ffffff',
    border: '#ff06f4'
  }
}

const LightTheme = {
  dark: false,
  colors: {
    primary: '#ff06f4',
    background: '#ffffff',
    card: '#1D1E1F',
    text: '#ffffff',
    border: '#ff06f4'
  }
}

const App = () => {
  const [value, setValue] = useState(!false)
  const dev = true
  const theme = value ? DarkTheme : LightTheme
  return (
    <>
      <ThemeProvider theme={theme}>
        {dev && (
          <View style={{ backgroundColor: value ? '#1D1E1F' : '#fff', height: 90 }}>
            <Switch onValueChange={setValue} value={value} style={{ alignSelf: 'center', marginTop: 50 }} />
          </View>
        )}
        <UIKit />
      </ThemeProvider>
    </>
  )
}

export default App
