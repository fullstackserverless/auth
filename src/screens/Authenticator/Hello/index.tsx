import React, { useEffect, useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button, Space, Txt } from '../../../components'
import { onScreen } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HELLO'>

type HelloT = {
  navigation: ProfileScreenNavigationProp
}

const Hello = ({ navigation }: HelloT): ReactElement => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const key = async (): Promise<void> => {
      try {
        const credentials = await Keychain.getInternetCredentials('auth')

        if (credentials) {
          const { username, password } = credentials
          const user = await Auth.signIn(username, password)
          setLoading(false)
          user && onScreen('USER', navigation)()
        } else {
          setLoading(false)
        }
      } catch (err) {
        console.log('error', err) // eslint-disable-line
        setLoading(false)
      }
    }
    key()
  }, []) // eslint-disable-line
  return (
    <AppContainer loading={loading}>
      <Space height={200} />
      <Button title="Sign In" onPress={onScreen('SIGN_IN', navigation)} />
      <Space height={10} />
      <Txt h6 title="or" textStyle={{ alignSelf: 'center' }} />
      <Space height={15} />
      <Button title="Sign Up" onPress={onScreen('SIGN_UP', navigation)} />
    </AppContainer>
  )
}

export { Hello }
