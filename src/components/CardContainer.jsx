import Card from './Card'
import { CardsContainer, Container } from './MicroComponents/Containers'

const CardContainer = ({ medicos }) => {
  return (
    <Container>
      <CardsContainer>
        {medicos.map((medico) => {
          return <Card key={medico.id} medico={medico} />
        })}
      </CardsContainer>
    </Container>
  )
}

export default CardContainer
