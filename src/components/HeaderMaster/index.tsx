import React, { memo } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { Background } from '../Background'
import { Txt } from '../Txt'
import { Star } from '../Star'
import { ButtonIconCircle } from '../ButtonIconCircle'
import { Avatar } from '../Avatar'
import { Space } from '../Space'
import { Device } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 12,
    height: 310
  },
  starStyle: {
    position: 'absolute',
    top: 15,
    right: Platform.OS === 'ios' ? 15 : 28,
    zIndex: 1
  },
  avatarStyle: {
    position: 'absolute',
    ...Device.select({
      mobile300: {
        top: 110
      },
      mobile315: {
        top: 110
      },
      mobile342: {
        top: 110
      },
      mobile360: {
        top: 110
      },
      mobile375: {
        top: 140
      },
      mobile400: {
        top: 140
      },
      mobile410: {
        top: 160
      },
      mobile415: {
        top: 160
      },
      mobile480: {
        top: 160
      }
    }),
    zIndex: 0
  },
  telephone: {
    bottom: 20,
    right: 100
  },
  balloon: {
    bottom: 55,
    left: 100
  },
  sound: {
    bottom: 70
  },
  h1: {
    textAlign: 'center',
    bottom: 65
  }
})

interface HeaderMasterT {
  user?: {
    name: string
    uri: string
    star: boolean
  }
}

const HeaderMaster = memo<HeaderMasterT>(({ user }) => {
  const { container, starStyle, avatarStyle, balloon, telephone, sound, h1 } = styles
  const { name, uri, star } = user
  return (
    <View style={container}>
      <>
        <Background>
          <Star star={star} viewStyle={starStyle} />
          <Avatar uri={uri} viewStyle={avatarStyle} size="xLarge" />
        </Background>
      </>
      <Space height={40} />
      <ButtonIconCircle name=":telephone_receiver:" viewStyle={telephone} />
      <ButtonIconCircle name=":thought_balloon:" viewStyle={balloon} />
      <ButtonIconCircle name=":loud_sound:" viewStyle={sound} />
      <Txt h1 title={name} textStyle={h1} />
    </View>
  )
})

export { HeaderMaster }
