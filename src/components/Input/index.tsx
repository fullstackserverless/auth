import React, { memo } from 'react'
import { TextInput, StyleSheet, Text, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScaledSheet } from 'react-native-size-matters'
import { W, primary, secondary, gray, dimGray, lightGray, Etna, KLMN, Dolbak, Narrow } from '../../constants'

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 14,
    alignSelf: 'center',
    width: W - 30,
    borderBottomWidth: 2
  },
  errorStyle: {
    fontSize: 14,
    color: 'red',
    paddingTop: 10,
    left: 5
  }
})

interface InputT {
  name?: string
  value?: string
  placeholder?: string
  errors?: object
  touched?: object
  onChangeText?: (e: string | React.ChangeEvent<any>) => void
  onBlur?: (field: string, isTouched?: boolean | undefined, shouldValidate?: boolean | undefined) => void
  multiline?: boolean
  numberOfLines?: number
  keyboardType?: // eslint-disable-line
  | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password'
  secureTextEntry?: boolean
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
}

const Input = memo<InputT>(
  ({
    name,
    value,
    errors,
    placeholder,
    onChangeText,
    onBlur,
    touched,
    secureTextEntry,
    keyboardType,
    multiline,
    numberOfLines,
    autoCapitalize
  }) => {
    const { inputStyle, errorStyle } = styles

    const {
      dark
      //body: { fontFamily, fontSize },
      //colors: { secondary, primary, placeholderTextColor }
    } = useTheme()

    const input = [
      inputStyle,
      {
        fontFamily: KLMN,
        color: dark ? primary : secondary,
        borderBottomColor: dark ? primary : secondary,
        fontSize: Platform.OS === 'ios' ? '15@s' : '15@s'
      }
    ]

    const placeholderStyle = [
      inputStyle,
      {
        fontFamily: KLMN,
        color: dimGray,
        borderBottomColor: dark ? primary : secondary,
        fontSize: Platform.OS === 'ios' ? '15@s' : '15@s'
      }
    ]

    return (
      <>
        <TextInput
          style={ScaledSheet.create(value.length === 0 ? placeholderStyle : input)}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={dimGray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        {touched[name] && errors[name] ? (
          <Text style={errorStyle}>{errors[name]}</Text>
        ) : (
          <Text style={errorStyle}>{'  '}</Text>
        )}
      </>
    )
  }
)

export { Input }
