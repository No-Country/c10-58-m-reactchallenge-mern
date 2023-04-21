import { Link, useLoaderData } from 'react-router-dom'
import { Btn } from '../components/MicroComponents/Btn'
import styled from 'styled-components'
import { COLORS } from '../components/MicroComponents/Colors'

const Card = styled.div`
width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    width: auto;
  }
`
const Img = styled.img`
  display: block;
  width: 100px;
  margin-inline: auto;
  border-radius: 50%;
  border: 1px solid ${COLORS.strongGreen};
`

const ProfileDoc = () => {
  const {
    medicId,
    data: {
      profilePhoto, nombre, apellido, direccion, telefono, especialidades,
      formacion_profesional
    }
  } = useLoaderData()
  const especialidadesString = especialidades.join(', ')

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div>
        <Img src={profilePhoto} alt={`${nombre} ${apellido}`} />
        <h2 className='profile-doc-name'>
          {nombre} {apellido}
        </h2>
        <p className='profile-doc-address'>{direccion}</p>

      </div>
      <Card>
        <div className='flex flex-col text-justify gap-2'>
          <b>Especialidad:</b>
          <p>{especialidadesString}</p>
          <b>Formacion profesional :</b>
          <p>{formacion_profesional}</p>
        </div>
        <Link to={`/list/${medicId}/calendar`}>
          <Btn className='mt-4' $dark>Agendar</Btn>
        </Link>
      </Card>

    </div>
  )
}

export default ProfileDoc
