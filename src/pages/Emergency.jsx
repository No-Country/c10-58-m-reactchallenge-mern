import React from 'react'
import { Btn } from '../components/MicroComponents/Btn'
import { MainDivText } from '../components/MicroComponents/Text'
import emergenciaImg from '../assets/imgs/telefono.png'

const Emergency = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col place-items-center place-self-center gap-2'>
        <MainDivText>En caso de tener un cuadro de crisis haz click en el boton de emergencia</MainDivText>
        <img src={emergenciaImg} alt='llamada' />
        <MainDivText>Usa esta linea de contacto adecuadamente y solo para emergencias</MainDivText>
      </div>
      <Btn onClick={() => console.log('Emergencia!')}>Emergencia</Btn>
      <MainDivText>Esta funcionalidad todavia no esta terminada, lo sentimos.</MainDivText>
    </div>
  )
}

export default Emergency
