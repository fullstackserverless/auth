import React, { memo } from 'react'
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle
} from 'react-native'
import Emoji from 'react-native-emoji'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    alignSelf: 'center'
  },
  sub: {
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18,
    marginBottom: 0
  },
  h: {
    width: 80,
    top: Platform.OS === 'ios' ? 4 : 5,
    paddingLeft: 6
  }
})

interface ButtonRateT {
  title: string
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void
}

const ButtonRate = memo<ButtonRateT>(({ title, onPress, viewStyle }) => {
  const { container, sub, emoji, h } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <View style={sub}>
        <Emoji name=":unicorn_face:" style={emoji} />
        <Txt
          h8
          title={String(title)}
          textStyle={h}
          numberOfLines={1}
          ellipsizeMode="tail"
        />
      </View>
    </TouchableOpacity>
  )
})

export { ButtonRate }
