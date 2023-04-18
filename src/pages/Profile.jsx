import React from 'react'
import { Navigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'
import { Btn } from '../components/MicroComponents/Btn.js'
import { ProfileImg } from '../components/MicroComponents/ProfileImages'

export const Profile = () => {
  const { user, logout } = useFirebaseContext()
  const { firstName, lastName } = user

  return (
    <>
      {user
        ? (<div className='flex flex-col justify-evenly h-full gap-12'>
          <div className='flex w-full place-content-center place-items-center '>
            <ProfileImg src={user.avatarURL} />
            <div className='text-center font-bold text-2xl'>
              <h1>{firstName}</h1>
              <h1>{lastName}</h1>
            </div>
          </div>
          <div className='flex flex-col w-48 mx-auto gap-4 text-xl'>
            <Btn onClick={Navigate('/editProfile')}>Editar perfil</Btn>
            <Btn onClick={Navigate('/appointments')}>Mis citas</Btn>
            <Btn onClick={Navigate('/pastappointments')}>Historial de citas</Btn>
            <Btn onClick={logout}>Log Out</Btn>
            <Btn $dark>Eliminar usuario</Btn>
          </div>
        </div>)
        : <p>Loading...</p>}
    </>
  )
}
