import React, { memo } from 'react'
import {
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
  TouchableOpacity
} from 'react-native'
import { Txt } from '../Txt'
import { primary, secondary, white } from '../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 17,
    borderColor: white,
    width: '40%',
    height: 50,
    marginTop: 2,
    marginLeft: 5
  },
  h: {
    alignSelf: 'center',
    padding: 15,
    color: primary
  }
})

interface ButtonStatusIssueT {
  title: string
  color?: string
  open?: boolean
  textStyle?: StyleProp<TextStyle>
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void
}

const ButtonStatusIssue = memo<ButtonStatusIssueT>(
  ({ title, open, textStyle, viewStyle, onPress }) => {
    const { h, container } = styles
    return (
      <View
        style={[
          container,
          viewStyle,
          { borderColor: open ? primary : secondary }
        ]}
      >
        <TouchableOpacity onPress={onPress}>
          <Txt
            h9
            textStyle={[
              h,
              textStyle,
              { textShadowColor: secondary, color: open ? primary : secondary }
            ]}
            title={title}
          />
        </TouchableOpacity>
      </View>
    )
  }
)

export { ButtonStatusIssue }
