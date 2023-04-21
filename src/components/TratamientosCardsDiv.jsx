import React from 'react'
import styled from 'styled-components'

const TratamientosCard = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 640px) {
    padding: 0rem 1rem;
  }
`

export const TratamientosCardsDiv = ({ children }) => {
  return <TratamientosCard>{children}</TratamientosCard>
}
