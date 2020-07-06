import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { ButtonLink } from '../ButtonLink'
import { Txt } from '../Txt'
import { Space } from '../Space'

interface CardContactsT {
  obj?: {
    location: string
    web: string
    phone: string
  }
}

const CardContacts = memo<CardContactsT>(({ obj }) => {
  const { location, web, phone } = obj
  return (
    <>
      <CardBorder>
        <Txt h7 title="Location" />
        <Space height={5} />
        <Txt body title={location} />
        <Space height={10} />
        <Txt h7 title="Web" />
        <Space height={5} />
        <ButtonLink title={web} />
        <Space height={10} />
        <Txt h7 title="Phone" />
        <Space height={2} />
        <Txt body title={phone} />
      </CardBorder>
    </>
  )
})

export { CardContacts }
