import React from 'react'
import styled from 'styled-components'
import { Btn } from './MicroComponents/Btn'
import { useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'

// styled components
const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10%;
  margin: 5px;
`
const CardContainer = styled.div`
  width: 350px;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
`
const P = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  color: #146151;
  overflow: hidden;
`
const Span = styled.span`
  font-size: 14px;
  font-weight: 400;

  &.title {
    font-size: 16px;
  }
`
const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;

  color: #146151;
`

const Card = ({ medico }) => {
  const {
    nombre,
    profilePhoto,
    apellido,
    especialidades,

    id,

    titulo,
  } = medico
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
  //agregar , a las especialidades
  const especialidadesString = especialidades.join('\n')

  return (
    <CardContainer>
      <div className="dates flex flex-col">
        <div className="flex ">
          <Img src={profilePhoto} alt="images--Dr." />
          <div className="date pt-5 pl-1">
            <H3>
              {nombre} <span>{apellido}</span>
            </H3>
            <Span className="title">{titulo}</Span>
          </div>
        </div>
        <div className="descripcion px-3 flex items-center gap-2">
          <P className="self-start">Especialista en:</P>
          <Span className="whitespace-pre text-[8px]">
            {especialidadesString}
          </Span>
        </div>
        <div className=" gap-5 mb-3 pr-5 pt-3 flex justify-end">
          <Btn className="" onClick={handleClickProfile}>
            Ver perfil
          </Btn>
          <Btn $dark onClick={handleClickAgendar}>
            Agendar
          </Btn>
        </div>
      </div>
    </CardContainer>
  )
}

export default Card
