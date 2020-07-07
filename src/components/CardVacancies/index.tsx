/* eslint-disable react/require-default-props */
import React, { memo, useState } from 'react'
import { Platform, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Txt } from '../Txt'
import { CardBorder } from '../CardBorder'
import { Star } from '../Star'
import { Space } from '../Space'
import { W } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  h: {
    right: Platform.OS === 'ios' ? 0 : 10
  }
})

interface CardVacanciesT {
  obj: {
    title: string
    description: string
    owner: string
    rate: string
  }
  onPress: () => void
  detail?: boolean
}

const CardVacancies = memo(({ obj, onPress, detail }: CardVacanciesT) => {
  const { title, description, owner, rate } = obj
  const { h, container } = styles
  const [star, setStar] = useState(false)
  return (
    <>
      <CardBorder>
        <View style={container}>
          <Txt h1 title={title} textStyle={{ width: W - 110 }} numberOfLines={1} />
          {false && <Star star={star} onPress={(): void => setStar(!star)} />}
        </View>
        <Space height={20} />
        <TouchableOpacity onPress={onPress}>
          {detail ? <Txt body title={description} /> : <Txt body numberOfLines={4} title={description} />}
        </TouchableOpacity>
        <Space height={20} />
        <View style={container}>
          <Txt h7 title={owner} textStyle={{ width: W - 140 }} numberOfLines={1} />
          <Txt h7 title={`$ ${rate}`} textStyle={h} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardVacancies }
