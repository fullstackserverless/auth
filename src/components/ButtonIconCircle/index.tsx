import React, { memo } from 'react'
import {
  Platform,
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Emoji from 'react-native-emoji'
import { useTheme } from '@react-navigation/native'
import { black, white, primary, secondary } from '../constants'

const circle = {
  width: 35,
  height: 35,
  borderRadius: 35 / 2
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  blue: {
    ...circle,
    height: 36,
    width: 36
  },
  pink: {
    ...circle,
    top: 1,
    height: 36.4
  },
  iconBg: {
    ...circle,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji: {
    left: Platform.OS === 'ios' ? 3 : 0,
    fontSize: Platform.OS === 'ios' ? 20 : 16
  }
})

interface ButtonIconCircleT {
  uri?: string
  name: string
  onPress?: () => void
  viewStyle?: StyleProp<ViewStyle>
}

const ButtonIconCircle = memo<ButtonIconCircleT>(
  ({ name, onPress, viewStyle }) => {
    const { container, pink, blue, iconBg, emoji } = styles
    const { dark } = useTheme()
    const backgroundColor = dark ? black : white
    return (
      <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
        <View style={[blue, { backgroundColor: primary }]}>
          <View style={[pink, { backgroundColor: secondary }]}>
            <View style={[iconBg, { backgroundColor }]}>
              <Emoji name={name} style={emoji} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
)

export { ButtonIconCircle }
