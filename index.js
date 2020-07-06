/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native'
import App from './src'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Warning: AsyncStorage',
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`',
  'Animated: `useNativeDriver`'
])

AppRegistry.registerComponent(appName, () => App)
