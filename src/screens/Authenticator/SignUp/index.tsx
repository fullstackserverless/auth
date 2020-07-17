import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Space, Button, Input, TextError } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SIGN_UP'>

type SignUpT = {
  navigation: ProfileScreenNavigationProp
}

const SignUp = ({ navigation }: SignUpT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string; password: string; passwordConfirmation: string }): Promise<void> => {
    const { email, password, passwordConfirmation } = values
    if (password !== passwordConfirmation) {
      setError('Passwords do not match!')
    } else {
      setLoading(true)
      setError('')
      try {
        const user = await Auth.signUp(email, password)
        await Keychain.setInternetCredentials('auth', email, password)
        user && onScreen('CONFIRM_SIGN_UP', navigation, { email, password })()
        setLoading(false)
      } catch (err) {
        setLoading(false)
        if (err.code === 'UserNotConfirmedException') {
          setError('Account not verified yet')
        } else if (err.code === 'PasswordResetRequiredException') {
          setError('Existing user found. Please reset your password')
        } else if (err.code === 'NotAuthorizedException') {
          setError('Forgot Password?')
        } else if (err.code === 'UserNotFoundException') {
          setError('User does not exist!')
        } else {
          setError(err.code)
        }
      }
    }
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign Up" loading={loading}>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            passwordConfirmation: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
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
              <Input
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={(): void => setFieldTouched('passwordConfirmation')}
                placeholder="Password confirm"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
                secureTextEntry
              />
              <Space height={30} />
              {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              <Button title="Sign Up" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { SignUp }
