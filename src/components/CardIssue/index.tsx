import React, { memo } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ButtonDeveloperSub } from '../ButtonDeveloperSub'
import { Txt } from '../Txt'
import { CardBorder } from '../CardBorder'
import { ButtonComments } from '../ButtonComments'
import { Space } from '../Space'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

interface Props {
  obj?: {
    title: string
    description: string
    uri: string
    name: string
    comments: number
    rate: number
  }
  onPress?: () => void
}

const CardIssue = memo<Props>(({ obj, onPress }) => {
  const { container } = styles
  const { title, description, name, comments, uri, rate } = obj
  return (
    <>
      <CardBorder>
        <TouchableOpacity onPress={onPress}>
          <Txt
            h1
            title={title}
            viewStyle={{ marginTop: 25 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          />
          <Space height={10} />
          <Txt
            body
            title={description}
            numberOfLines={4}
            ellipsizeMode="tail"
          />
          <Space height={15} />
        </TouchableOpacity>
        <ButtonComments title={comments} viewStyle={{ paddingLeft: 5 }} />
        <View style={container}>
          <ButtonDeveloperSub title={name} uri={uri} rate={rate} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardIssue }
