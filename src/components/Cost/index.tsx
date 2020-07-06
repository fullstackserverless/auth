import React, { memo } from 'react'
import {
  Platform,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  View
} from 'react-native'
import { Txt } from '../Txt'
import { gray } from '../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h: {
    fontFamily: '3270Narrow',
    color: gray
  }
})

interface CostT {
  title: string
  viewStyle?: StyleProp<ViewStyle>
}

const Cost = memo<CostT>(({ title, viewStyle }) => {
  const { container } = styles
  return (
    <View style={[container, viewStyle]}>
      <Txt h8 title={`$ ${title}`} />
    </View>
  )
})

export { Cost }
