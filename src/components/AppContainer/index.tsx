import React, { memo } from 'react'
import { StyleSheet, View, ScrollView, ImageBackground, GestureResponderEvent } from 'react-native'
import StatusBarAlert from 'react-native-statusbar-alert'
import { useTheme } from '@react-navigation/native'
import { Header } from '../Header'
import { Space } from '../Space'
import { Loading } from '../Loading'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  sub: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

const RED = '#FC2847'

interface AppContainerT {
  flatList?: boolean
  iconLeft?: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  onPressRight?: ((event: GestureResponderEvent) => void) | undefined
  iconRight?: string
  children?: React.ReactNode
  message?: string
  title?: string
  loading?: boolean
}

const AppContainer = memo<AppContainerT>(
  ({
    flatList = false,
    iconLeft = 'angle-dobule-left',
    onPress = null,
    onPressRight = null,
    iconRight,
    children,
    message = '',
    title,
    loading = false
  }) => {
    const { container, sub } = styles
    const { dark } = useTheme()
    const bg = dark ? require('./bgB.png') : require('./bgW.png')
    return (
      <ImageBackground source={bg} style={container}>
        <StatusBarAlert
          visible={message !== ''}
          message={message}
          backgroundColor={RED}
          color="white"
          pulse="background"
          height={40}
          style={{ padding: 5, paddingTop: 5 }}
        />
        {title && (
          <Header
            title={title}
            onPress={onPress}
            onPressRight={onPressRight}
            iconLeft={iconLeft}
            iconRight={iconRight}
          />
        )}
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              {!flatList ? (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View style={sub}>{children}</View>
                  <Space height={60} />
                </ScrollView>
              ) : (
                <>
                  <View style={sub}>{children}</View>
                </>
              )}
            </>
          )}
        </>
      </ImageBackground>
    )
  }
)

export { AppContainer }
