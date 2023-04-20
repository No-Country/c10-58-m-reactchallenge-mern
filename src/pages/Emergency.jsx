import React from 'react'
import styled from 'styled-components'
import { Btn } from '../components/MicroComponents/Btn'
const P = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 400;
  margin: 10px;
  padding-left: 10px;
  text-align: center;
`

const Emergency = () => {
  return (
    <div className='w-full m-h-full flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col place-items-center place-self-center gap-10'>
        <P>Encaso de tener un cuadro de crisis haz click en el boton de emergencia</P>
        <img src='/public/telefono.png' alt='llamada' />
        <P>Usa esta linea de contacto adecuadamente y solo para emergencias</P>
      </div>
      <Btn onClick={() => console.log('Emergencia!')}>Emergencia</Btn>
    </div>
  )
}

export default Emergency
