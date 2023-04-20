import React from 'react'
import { Btn } from '../components/MicroComponents/Btn'
import { MainDivText, MainDivTitle } from '../components/MicroComponents/Text'

const Emergency = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col place-items-center place-self-center gap-2'>
        <MainDivText>Encaso de tener un cuadro de crisis haz click en el boton de emergencia</MainDivText>
        <img src='/public/telefono.png' alt='llamada' />
        <MainDivText>Usa esta linea de contacto adecuadamente y solo para emergencias</MainDivText>
      </div>
      <Btn onClick={() => console.log('Emergencia!')}>Emergencia</Btn>
      <MainDivText>Esta funcionalidad todavia no esta terminada, lo sentimos.</MainDivText>
    </div>
  )
}

export default Emergency
