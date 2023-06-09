import React, { useState } from 'react'
import { ProfileImg } from './../components/MicroComponents/ProfileImages'
import { Btn } from './../components/MicroComponents/Btn'
import { useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'
import { deleteUser } from '../firebase/user'
import { SpinnerComponent } from '../components/MicroComponents/Spinner'
import { MainDivTitle } from '../components/MicroComponents/Text'

export const ProfileHome = () => {
  const { user, logout } = useFirebaseContext()
  const { avatarURL, firstName, lastName } = user
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  async function handleLogout () {
    await logout()
    navigate('/login')
  }

  // async function crearMedicos () {
  //   medicData.forEach(async (medic) => {
  //     await createMedic({ medicDataForm: medic })
  //   })
  //   console.log('Medicos creados')
  // }

  return (
    <>
      {user
        ? (
          <div className='flex flex-col justify-evenly h-full gap-12 px-4'>
            <div className='flex w-full items-center justify-center gap-4'>
              <ProfileImg src={avatarURL} />
              <MainDivTitle className='text-center'>{firstName} {lastName}</MainDivTitle>
            </div>
            <div className='flex flex-col w-48 mx-auto gap-4 text-xl'>
              <Btn onClick={() => navigate('editProfile')}>Editar perfil</Btn>
              <Btn onClick={() => navigate('appointments')}>Mis citas</Btn>
              <Btn onClick={() => navigate('pastappointments')}>Historial de citas</Btn>
              {/* <Btn onClick={crearMedicos}>Crear medicos</Btn> */}
              <Btn onClick={handleLogout}>Log Out</Btn>
              <Btn $dark onClick={deleteUser}>Eliminar usuario</Btn>
            </div>
          </div>)
        : (<SpinnerComponent />)}
    </>
  )
}
