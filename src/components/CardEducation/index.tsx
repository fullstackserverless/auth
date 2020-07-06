import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { ButtonLink } from '../ButtonLink'
import { Txt } from '../Txt'
import { Space } from '../Space'

interface CardEducationT {
  obj?: {
    institution: string
    start: string
    finish: string
    description: string
    link: string
  }
}

const CardEducation = memo<CardEducationT>(({ obj }) => {
  const { institution, start, finish, description, link } = obj
  return (
    <>
      <CardBorder>
        <Txt h7 title={institution} textStyle={{ textAlign: 'left' }} />
        <Space height={10} />
        <Txt h8 title={`[${start} - ${finish}]`} />
        <Space height={5} />
        <Txt body title={description} />
        <Space height={10} />
        <ButtonLink title={link} />
      </CardBorder>
    </>
  )
})

export { CardEducation }
