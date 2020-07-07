import React, { useState, useEffect, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button } from '../../../components'
import { goHome } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HELLO'>

type UserT = {
  navigation: ProfileScreenNavigationProp
}

const User = ({ navigation }: UserT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const checkUser = async (): Promise<void> => {
      await Auth.currentAuthenticatedUser()
    }
    checkUser()
  }, [navigation])

  const _onPress = async (): Promise<void> => {
    setLoading(true)
    try {
      await Auth.signOut()
      await Keychain.resetInternetCredentials('auth')
      goHome(navigation)()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AppContainer message={error} loading={loading}>
      <Button title="Sign Out" onPress={_onPress} />
    </AppContainer>
  )
}

export { User }
