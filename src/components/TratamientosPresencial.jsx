import React from 'react'
import { IoWarningOutline } from 'react-icons/io5'
import styled from 'styled-components'
import { MainDivText } from './MicroComponents/Text'

const PresencialDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
`

export const TratamientosPresencial = () => {
  return (
    <PresencialDiv>
      <MainDivText className='text-center w-full font-normal'>
        De momento no tenemos servicios presenciales, lo sentimos
      </MainDivText>
      <IoWarningOutline className='m-auto mb-10 mt-2' size={50} />
    </PresencialDiv>
  )
}
