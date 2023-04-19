import React, { useState, useEffect } from 'react'
import Card from './Card'
import { fetchCollection } from '../firebase/fetchCollection'
import { CardsContainer, Container } from './MicroComponents/Containers'
import { PageTitle } from './MicroComponents/Text'

const CardContainer = () => {
  const [medicos, setMedicos] = useState([])
  useEffect(() => {
    fetchCollection({ collectionName: 'medicos' }).then(medicos => {
      setMedicos(medicos)
    })
  }, [])

  return (
    <Container>
      <PageTitle className='font-bold text-xl'>Lista de medicos</PageTitle>
      <CardsContainer>
        {medicos.map(medico => {
          return <Card key={medico.id} medico={medico} />
        })}
      </CardsContainer>
    </Container>
  )
}

export default CardContainer
