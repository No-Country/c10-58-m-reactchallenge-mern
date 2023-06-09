import React from 'react'
import styled from 'styled-components'
import { Btn } from './MicroComponents/Btn'
import { useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'
import { COLORS } from './MicroComponents/Colors'

// styled components
const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10%;
`
const CardContainer = styled.div`
  width: 330px;
  height: 210px;
  padding: 1rem;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${COLORS.strongGreen};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
`
const P = styled.p`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  text-align: justify;
`
const Span = styled.span`
  color: #146151;
  font-size: 0.8rem;
  font-weight: 400;
`
const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.strongGreen};
`

const Card = ({ medico }) => {
  const { nombre, profilePhoto, apellido, especialidades, id, titulo } = medico
  const { user } = useFirebaseContext()
  const navigate = useNavigate()
  const handleClickAgendar = () => {
    if (user) {
      navigate(`/list/${id}/calendar`)
    } else {
      navigate('/login')
    }
  }

  const handleClickProfile = () => {
    if (user) {
      navigate(`/list/${id}/`)
    } else {
      navigate('/login')
    }
  }
  // agregar , a las especialidades
  const especialidadesString = especialidades.join('\n').toLowerCase()

  return (
    <CardContainer>
      <div className="flex items-center gap-4">
        <Img src={profilePhoto} alt={`foto de perfil ${nombre} ${apellido}`} />
        <div>
          <H3>
            {nombre} <span>{apellido}</span>
          </H3>
          <P>{titulo}</P>
        </div>
      </div>
      <div className="flex gap-3  mb-1">
        <Span>Especialista en: </Span>
        <p className="whitespace-pre capitalize text-xs ">
          {especialidadesString}.
        </p>
      </div>
      <div className="gap-5 flex justify-end">
        <Btn $textSm onClick={handleClickProfile}>
          Ver perfil
        </Btn>
        <Btn $dark $textSm onClick={handleClickAgendar}>
          Agendar
        </Btn>
      </div>
    </CardContainer>
  )
}

export default Card
