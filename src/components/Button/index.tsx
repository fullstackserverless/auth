import React, { memo } from 'react'
import { Platform, StyleSheet, StyleProp, TextStyle, View, TouchableOpacity } from 'react-native'
import { W, primary, secondary, gray } from '../../constants'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: 'center'
  },
  sub: {
    marginRight: -5,
    marginTop: 2,
    marginBottom: 3,
    marginLeft: -5,
    borderWidth: 1,
    alignSelf: 'center'
  },
  h: {
    width: W - (Platform.OS === 'ios' ? 150 : 180),
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingBottom: 7,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

interface ButtonT {
  title: string
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
}

const Button = memo<ButtonT>(({ title, onPress, textStyle }) => {
  const { container, sub, h } = styles
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[container, { borderColor: secondary }]}>
        <View style={[sub, { borderColor: primary }]}>
          <Txt h0 textStyle={[h, textStyle, { textShadowColor: secondary }]} title={title} />
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { Button }
