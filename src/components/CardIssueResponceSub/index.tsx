import React, { memo } from 'react'
import { ButtonDeveloperSub } from '../ButtonDeveloperSub'
import { CardBorder } from '../CardBorder'
import { Txt } from '../Txt'
import { Space } from '../Space'

interface Props {
  obj?: {
    name: string
    description: string
    uri: string
    rate: number
  }
}

const CardIssueResponceSub = memo<Props>(({ obj }) => {
  const { name, description, uri, rate } = obj
  return (
    <>
      <CardBorder border>
        <Txt body title={description} />
        <Space height={30} />
        <ButtonDeveloperSub title={name} uri={uri} rate={rate} />
      </CardBorder>
    </>
  )
})

export { CardIssueResponceSub }
