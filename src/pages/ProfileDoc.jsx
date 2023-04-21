import { Link, useLoaderData } from 'react-router-dom'
import { Btn } from '../components/MicroComponents/Btn'
import styled from 'styled-components'

// styles
const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
const Img = styled.img`
  display: block;
  width: 100px;
  margin-inline: auto;
  border-radius: 50%;
`

const ProfileDoc = () => {
  const {
    medicId,
    data: {
      profilePhoto,
      nombre,
      apellido,
      direccion,
      telefono,
      especialidades,
      formacion_profesional,
    },
  } = useLoaderData()
  const especialidadesString = especialidades.join('\n')

  return (
    <div className="profile-doc px-4">
      <div>
        <Img src={profilePhoto} alt={`${nombre} ${apellido}`} />
        <h2 className="profile-doc-name">
          {nombre} {apellido}
        </h2>
        <p className="profile-doc-address">{direccion}</p>
      </div>
      <Card>
        <div>
          <p>
            <b>Especialidad:</b>
          </p>
          <p className="mb-4 whitespace-pre">{especialidadesString}</p>
          <b>Formacion profesional :</b>
          <p className="mb-4">{formacion_profesional}</p>
        </div>
        <Link to={`/list/${medicId}/calendar`}>
          <Btn $dark>Agendar</Btn>
        </Link>
      </Card>
    </div>
  )
}

export default ProfileDoc
