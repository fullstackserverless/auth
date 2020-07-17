import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import * as Yup from 'yup'
import { AppContainer, Button, Space, ButtonLink, TextError, Input } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CONFIRM_SIGN_UP'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'CONFIRM_SIGN_UP'>

type ConfirmSignUpT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const ConfirmSignUp = ({ route, navigation }: ConfirmSignUpT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { code: string }): Promise<void> => {
    setLoading(true)
    setError('')
    try {
      const { code } = values
      const { email, password } = route.params
      await Auth.confirmSignUp(email, code, { forceAliasCreation: true })
      const user = await Auth.signIn(email, password)
      user && onScreen('USER', navigation)()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err.message)
      if (err.code === 'UserNotConfirmedException') {
        setError('Account not verified yet')
      } else if (err.code === 'PasswordResetRequiredException') {
        setError('Existing user found. Please reset your password')
      } else if (err.code === 'NotAuthorizedException') {
        setError('Forgot Password?')
      } else if (err.code === 'UserNotFoundException') {
        setError('User does not exist!')
      }
    }
  }

  const _onResend = async (): Promise<void> => {
    try {
      const { email } = route.params
      await Auth.resendSignUp(email)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <AppContainer title="Confirmation" onPress={goBack(navigation)} loading={loading}>
        <Formik
          initialValues={{ code: '' }}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            code: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
              <Space height={180} />
              <Input
                name="code"
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={(): void => setFieldTouched('code')}
                placeholder="Insert code"
                touched={touched}
                errors={errors}
              />
              <ButtonLink title="Resend code?" onPress={_onResend} textStyle={{ alignSelf: 'center' }} />
              {error !== 'Forgot Password?' && <TextError title={error} />}
              <Button title="Confirm" onPress={handleSubmit} />
              <Space height={50} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { ConfirmSignUp }
