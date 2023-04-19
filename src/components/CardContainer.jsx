/* eslint-disable */
import React from 'react'
import Card from './Card'

const CardContainer = ({ medicos }) => {
  return (
    <div className="flex justify-center flex-col">
      {medicos.map((medico) => {
        return <Card key={medico.id} medico={medico} />
      })}
    </div>
  )
}

export default CardContainer
