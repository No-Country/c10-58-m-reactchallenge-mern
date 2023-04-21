import React from 'react'
import { TratamientosCardsDiv } from './TratamientosCardsDiv'
import { TratamientosCard } from './TratamientosCard'
import terapiaOnline from '../../public/psicologiaOnline.webp'
import terapiaFamiliar from '../../public/terapiaFamiliar.webp'
import terapiaDePareja from '../../public/terapiaDePareja.webp'
import depresion from '../../public/depresion.webp'
import ansiedad from '../../public/ansiedad.webp'
import celos from '../../public/celos.webp'
import autoestima from '../../public/autoestima.webp'
import drogadiccion from '../../public/drogadiccion.webp'
import orientacionProfesional from '../../public/orientacionP.webp'

const tiposDeTerapias = [
  { img: terapiaOnline, therapy: 'Psicología online' },
  { img: terapiaFamiliar, therapy: 'Terapia familiar' },
  { img: terapiaDePareja, therapy: 'Terapia de pareja' },
  { img: depresion, therapy: 'Depresión' },
  { img: ansiedad, therapy: 'Ansiedad' },
  { img: celos, therapy: 'Celos' },
  { img: autoestima, therapy: 'Autoestima' },
  { img: drogadiccion, therapy: 'Drogadicción' },
  { img: orientacionProfesional, therapy: 'Orientación profesional' },
]

export const TratamientosOnline = () => {
  return (
    <TratamientosCardsDiv>
      {tiposDeTerapias.map((terapia, i) => (
        <TratamientosCard
          src={terapia.img}
          key={i}
          terapia={terapia.therapy}
        ></TratamientosCard>
      ))}
    </TratamientosCardsDiv>
  )
}
