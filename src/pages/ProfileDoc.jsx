import { Link, useLoaderData } from 'react-router-dom'
import { Btn } from '../components/MicroComponents/Btn'

const ProfileDoc = () => {
  const {
    medicId,
    data: { profilePhoto, nombre, apellido, direccion, telefono, especialidad }
  } = useLoaderData()

  return (
    <div className='profile-doc'>
      <img className='profile-doc-img' src={profilePhoto} alt={`${nombre} ${apellido}`} />
      <h2 className='profile-doc-name'>
        {nombre} {apellido}
      </h2>
      <p className='profile-doc-address'>{direccion}</p>
      <p>
        <b>Especialidad:</b>
      </p>
      <p className='mb-4'>{especialidad}</p>
      <p>
        <b>Teléfono:</b>
      </p>
      <p className='mb-4'>{telefono}</p>
      <Link to={`/list/${medicId}/calendar`}>
        <Btn $dark>Agendar</Btn>
      </Link>
    </div>
  )
}

export default ProfileDoc
