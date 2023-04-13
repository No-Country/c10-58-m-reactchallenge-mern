import React from 'react'
import styled from 'styled-components'
import { Botonpildora } from './MicroComponents/BotonesPildoras'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'

const img = 'https://picsum.photos/seed/picsum/200/300'

// styled components
const Img = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 10%;
	margin: 10px;
`
const CardContainer = styled.div`
	background-color: #fff;
	border-radius: 10px;
	margin: 10px;
	padding: 10px;

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

const Card = ({ medico }) => {
  const { nombre, profilePhoto, apellido, departamento, telefono, direccion, id } = medico
  const { user } = useFirebaseContext()
  const navigate = useNavigate()
  const handleClickAgendar = () => {
    if (user) {
      navigate(`/list/${id}/calendar`)
    } else {
      navigate('/login')
    }
  }

  return (
    <CardContainer className='w-80 bg-red-200'>
      <div className='dates flex flex-col'>
        <div className='flex '>
          <Img src={profilePhoto} alt='images--Dr.' />
          <div className='date pt-5'>
            <h3>
              {nombre} <span>{apellido}</span>{' '}
            </h3>
            <p>{departamento}</p>
            <span>{telefono}</span>
          </div>
        </div>
        <div className='descripcion pl-3'>
          <p>{direccion}</p>
        </div>
        <div className='buttons gap-5 mb-3 pr-5 pt-3 flex justify-end'>
          <Botonpildora $primary>Ver perfil</Botonpildora>
          <Botonpildora onClick={handleClickAgendar}>
            Agendar cita
          </Botonpildora>

        </div>
      </div>
    </CardContainer>
  )
}

export default Card
