import React, { memo } from 'react'
import { StyleSheet, StyleProp, ViewStyle, View } from 'react-native'
import { W, primary, secondary } from '../constants'

const styles = StyleSheet.create({
  containerBlue: {
    borderWidth: 1,
    paddingRight: 3,
    marginLeft: 5,
    paddingBottom: 3,
    flexDirection: 'row'
  },
  containerPink: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: W - 30,
    borderWidth: 1,
    marginLeft: -5,
    marginTop: 2
  }
})

interface CardBorderT {
  children?: React.ReactNode
  viewStyle?: StyleProp<ViewStyle>
  border?: boolean
}

const CardBorder = memo<CardBorderT>(({ children, viewStyle, border }) => {
  const { containerBlue, containerPink } = styles
  const borderColor = border ? 'transparent' : primary
  return (
    <View style={[containerBlue, { borderColor: secondary }]}>
      <View style={[containerPink, viewStyle, { borderColor }]}>
        {children}
      </View>
    </View>
  )
})

export { CardBorder }
