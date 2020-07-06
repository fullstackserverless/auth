import React, { memo } from 'react'
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity
} from 'react-native'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h: {
    textDecorationLine: 'underline'
  }
})

interface ButtonLinkT {
  title: string
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void
}

const ButtonLink = memo<ButtonLinkT>(({ title, viewStyle, onPress }) => {
  const { container, h } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Txt h8 title={title} textStyle={h} />
    </TouchableOpacity>
  )
})

export { ButtonLink }
