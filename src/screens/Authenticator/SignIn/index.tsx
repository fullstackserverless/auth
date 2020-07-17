import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button, Space, ButtonLink, TextError, Input } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SIGN_IN'>

type SignUpT = {
  navigation: ProfileScreenNavigationProp
}

const SignIn = ({ navigation }: SignUpT): ReactElement => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string; password: string }): Promise<void> => {
    setLoading(true)
    setError('')
    try {
      const { email, password } = values
      const user = await Auth.signIn(email, password)
      await Keychain.setInternetCredentials('auth', email, password)
      user && onScreen('USER', navigation)()
      setLoading(false)
    } catch ({ code }) {
      setLoading(false)
      if (code === 'UserNotConfirmedException') {
        setError('Account not verified yet')
      } else if (code === 'PasswordResetRequiredException') {
        setError('Existing user found. Please reset your password')
      } else if (code === 'NotAuthorizedException') {
        setUserInfo(values)
        setError('Forgot Password?')
      } else if (code === 'UserNotFoundException') {
        setError('User does not exist!')
      } else {
        setError(code)
      }
    }
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign In" loading={loading} message={error}>
        <Formik
          enableReinitialize
          initialValues={userInfo}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
              <Space height={90} />
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={(): void => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={(): void => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
                secureTextEntry
              />
              {error !== 'Forgot Password?' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              {error === 'Forgot Password?' && (
                <ButtonLink
                  title={error}
                  onPress={onScreen('FORGOT', navigation, userInfo)}
                  textStyle={{ alignSelf: 'center' }}
                />
              )}
              <Button title="Sign In" onPress={handleSubmit} />
              <Space height={130} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { SignIn }
