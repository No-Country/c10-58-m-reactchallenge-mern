import React from 'react'
import { TratamientosCardsDiv } from './TratamientosCardsDiv'
import { TratamientosCard } from './MicroComponents/TratamientosCard'

const tiposDeTerapias = [
  'Psicología online',
  'Terapia familiar',
  'Terapia de pareja',
  'Depresión',
  'Ansiedad',
  'Celos',
  'Autoestima',
  'Drogadicción',
  'Orientación profesional'
]

export const TratamientosOnline = () => {
  return (
    <TratamientosCardsDiv>
      {tiposDeTerapias.map((terapia, i) => (
        <TratamientosCard key={i}>
          {terapia}
        </TratamientosCard>
      ))}
    </TratamientosCardsDiv>
  )
}
