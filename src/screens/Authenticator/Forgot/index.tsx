import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { AppContainer, Button, Input } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FORGOT'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'FORGOT'>

type ForgotT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Forgot = ({ route, navigation }: ForgotT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string }): Promise<void> => {
    setLoading(true)
    try {
      const { email } = values
      const user = await Auth.forgotPassword(email)
      user && onScreen('FORGOT_PASSWORD_SUBMIT', navigation, email)()
      setLoading(false)
    } catch (err) {
      setError(error)
    }
  }

  return (
    <>
      <AppContainer title="Forgot" onPress={goBack(navigation)} loading={loading}>
        <Formik
          initialValues={{ email: route.params.email }}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required()
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
              <Button title="Confirm" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { Forgot }
