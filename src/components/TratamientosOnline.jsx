import React from 'react'
import { TratamientosCardsDiv } from './TratamientosCardsDiv'
import { TratamientosCard } from './TratamientosCard'
import terapiaOnline from '../assets/imgs/psicologiaOnline.webp'
import terapiaFamiliar from '../assets/imgs/terapiaFamiliar.webp'
import terapiaDePareja from '../assets/imgs/terapiaDePareja.webp'
import depresion from '../assets/imgs/depresion.webp'
import ansiedad from '../assets/imgs/ansiedad.webp'
import celos from '../assets/imgs/celos.webp'
import autoestima from '../assets/imgs/autoestima.webp'
import drogadiccion from '../assets/imgs/drogadiccion.webp'
import orientacionProfesional from '../assets/imgs/orientacionP.webp'

const tiposDeTerapias = [
  { img: terapiaOnline, therapy: 'Psicología online' },
  { img: terapiaFamiliar, therapy: 'Terapia familiar' },
  { img: terapiaDePareja, therapy: 'Terapia de pareja' },
  { img: depresion, therapy: 'Depresión' },
  { img: ansiedad, therapy: 'Ansiedad' },
  { img: celos, therapy: 'Celos' },
  { img: autoestima, therapy: 'Autoestima' },
  { img: drogadiccion, therapy: 'Drogadicción' },
  { img: orientacionProfesional, therapy: 'Orientación profesional' }
]

export const TratamientosOnline = () => {
  return (
    <TratamientosCardsDiv>
      {tiposDeTerapias.map((terapia, i) => (
        <TratamientosCard
          src={terapia.img}
          key={i}
          terapia={terapia.therapy}
        />
      ))}
    </TratamientosCardsDiv>
  )
}
