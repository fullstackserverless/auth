import React, { memo } from 'react'
import { Platform, TouchableOpacity, View, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { primary, secondary, W } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    width: W,
    opacity: 0.8,
    ...ifIphoneX(
      {
        height: 122
      },
      {
        height: 100
      }
    )
  },
  iconLeftStyle: {
    fontSize: 35,
    left: Platform.OS === 'ios' ? 10 : 25,
    ...ifIphoneX(
      {
        paddingTop: 65
      },
      {
        paddingTop: 40
      }
    )
  },
  rightIconStyle: {
    fontSize: 37,
    marginRight: 10,
    ...ifIphoneX(
      {
        paddingTop: 65
      },
      {
        paddingTop: 40
      }
    )
  }
})

interface HeaderT {
  iconLeft?: string
  iconRight?: string
  onPress?: () => void
  onPressRight?: () => void
}

const Header = memo<HeaderT>(
  ({ iconLeft, iconRight, onPress, onPressRight }) => {
    const { container, iconLeftStyle, rightIconStyle } = styles
    const { dark } = useTheme()
    const color = dark ? primary : secondary
    return (
      <View style={container}>
        {iconLeft && (
          <TouchableOpacity onPress={onPress}>
            <Fontisto name={iconLeft} style={iconLeftStyle} color={color} />
          </TouchableOpacity>
        )}

        {iconRight && (
          <TouchableOpacity onPress={onPressRight}>
            <Fontisto name={iconRight} style={rightIconStyle} color={color} />
          </TouchableOpacity>
        )}
      </View>
    )
  }
)

export { Header }
