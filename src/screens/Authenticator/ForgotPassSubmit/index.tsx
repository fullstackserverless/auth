import React, { useState, ReactElement } from 'react'
import { Platform } from 'react-native'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { AppContainer, Button, Space, Input, TextError } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FORGOT_PASSWORD_SUBMIT'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'FORGOT_PASSWORD_SUBMIT'>

type ForgotPassSubmitT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const ForgotPassSubmit = ({ route, navigation }: ForgotPassSubmitT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string; password: string; code: string }): Promise<void> => {
    setLoading(true)
    try {
      const { email, code, password } = values
      await Auth.forgotPasswordSubmit(email, code, password)
      await Keychain.setInternetCredentials('auth', email, password)
      onScreen('USER', navigation)()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <>
      <AppContainer title="Confirmation" onPress={goBack(navigation)} loading={loading}>
        <Space height={Platform.OS === 'ios' ? 20 : 150} />
        <Formik
          initialValues={{ email: route.params.email, code: '', password: '', passwordConfirmation: '' }}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            code: Yup.string().min(6).required(),
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
                name="code"
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={(): void => setFieldTouched('code')}
                placeholder="Code"
                touched={touched}
                errors={errors}
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={(): void => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
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
                secureTextEntry
              />
              {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              <Space height={30} />
              <Button title="Confirm" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { ForgotPassSubmit }
