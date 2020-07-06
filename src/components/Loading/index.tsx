import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Spinner, { SpinnerType } from 'react-native-spinkit'

const styles = StyleSheet.create({
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    right: 10,
    top: 10,
    bottom: 10
  }
})

interface LoadingT {
  size?: number
  type?: SpinnerType
  animating?: boolean
}

const Loading = memo<LoadingT>(({ size, animating, type }) => {
  const {
    colors: { secondary }
  } = useTheme()
  const { activityIndicator } = styles
  return (
    <View style={activityIndicator}>
      {!animating && <Spinner size={size} type={type} color={secondary} />}
    </View>
  )
})

export { Loading }
