import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { Txt } from '../Txt'
import { Space } from '../Space'

interface CardInfoT {
  obj?: {
    position: string
    language: string
    stack: string
    experience: string
    salary: number
  }
  bool?: boolean
}

const CardInfo = memo<CardInfoT>(({ obj, bool = true }) => {
  const { position, language, stack, experience, salary } = obj
  const info = (
    <>
      <Txt h7 title="Position" />
      <Txt body title={position} />
      <Space height={10} />
      <Txt h7 title="Languages" />
      <Txt body title={language} />
      <Space height={10} />
      <Txt h7 title="Stack" />
      <Txt body title={stack} />
      <Space height={10} />
      <Txt h7 title="Experience" />
      <Txt body title={experience} />
      <Space height={10} />
      <Txt h7 title="Salary" />
      <Txt body title={`$ ${salary}`} />
    </>
  )

  return <>{bool ? <CardBorder>{info}</CardBorder> : info}</>
})

export { CardInfo }
