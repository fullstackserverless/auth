import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { Txt } from '../Txt'

interface CardT {
  title: string
}

const CardAbout = memo<CardT>(({ title }) => {
  return (
    <>
      <CardBorder>
        <Txt body title={title} />
      </CardBorder>
    </>
  )
})

export { CardAbout }
