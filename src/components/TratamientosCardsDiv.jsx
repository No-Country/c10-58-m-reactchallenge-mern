import React from 'react'
import styled from 'styled-components'

const TratamientosCard = styled.div`
display: flex;
gap: 18px;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

export const TratamientosCardsDiv = ({ children }) => {
  return (
    <TratamientosCard>{children}
    </TratamientosCard>
  )
}
