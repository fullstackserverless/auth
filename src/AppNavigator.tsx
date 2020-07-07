import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Hello, SignUp, SignIn, ConfirmSignUp, User, Forgot, ForgotPassSubmit } from './screens/Authenticator'

const Stack = createStackNavigator()

export type RootStackParamList = {
  HELLO: undefined
  SIGN_UP: undefined
  SIGN_IN: undefined
  FORGOT: { email: string }
  FORGOT_PASSWORD_SUBMIT: { email: string }
  CONFIRM_SIGN_UP: { email: string; password: string }
  USER: undefined
}

const AppNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="HELLO"
    >
      <Stack.Screen name="HELLO" component={Hello} />
      <Stack.Screen name="SIGN_UP" component={SignUp} />
      <Stack.Screen name="SIGN_IN" component={SignIn} />
      <Stack.Screen name="FORGOT" component={Forgot} />
      <Stack.Screen name="FORGOT_PASSWORD_SUBMIT" component={ForgotPassSubmit} />
      <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUp} />
      <Stack.Screen name="USER" component={User} />
    </Stack.Navigator>
  )
}

export default AppNavigator
