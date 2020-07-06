import React, { memo } from 'react'
import { Platform, Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    margin: 10
  },
  h1: {
    color: 'red',
    fontFamily: '3270Narrow',
    fontSize: Platform.OS === 'ios' ? '15@s' : '17@s'
  }
})
interface TextErrorT {
  title: string
  onPress?: () => void
}

const TextError = memo<TextErrorT>(({ title, onPress }) => {
  const { container, h1 } = styles
  return (
    <View style={container}>
      <Text style={h1} onPress={onPress}>
        {title}
      </Text>
    </View>
  )
})

export { TextError }
