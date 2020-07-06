import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { Txt } from '../Txt'

interface ButtonTextT {
  title: string
  onPress?: () => void
}

const ButtonText = memo<ButtonTextT>(({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Txt h8 title={title} />
    </TouchableOpacity>
  )
})

export { ButtonText }
