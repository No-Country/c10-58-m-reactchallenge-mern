import React from 'react'
import { Form } from '../components/MicroComponents/Form.js'
import { Btn } from '../components/MicroComponents/Btn.js'
import { useFirebaseContext } from '../context/UserContext'
import { getCurrentUserInfo, updateUserInfo, getUserData } from '../firebase/user.js'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
// styles

const ButonLogout = styled.button`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
  padding-left: 10px;
  border: 1px solid #000;
`
// imagen de perfil redonda
const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 100%;
  background-color: #f6f6f6;
  
  img {
    color:#f6f6f6
    width: 90%;
    height: 90%;
    border-radius: 100%;
  }

`
const SpanAddImg = styled.span`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
  padding-left: 10px;
  border-radius: 100%;
  background-color: #ecdcdc;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Profile = () => {
  const { logout, user } = useFirebaseContext()
  const navigate = useNavigate()
  console.log(user)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  // validate form
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviando')
  }
  // change input
  const handleChange = (e) => {
  }

  return (
    <div className='w-full  flex justify-center text-black mb-10 '>
      <div className='w-5/6  '>
        <div className='flex flex-col w-full h-52 place-content-center place-items-center '>
          <DivImg>
            <img src={user.avatarURL} alt='perfil-img' />
          </DivImg>
          <h2>{user.firstName} {user.lastName}</h2>
        </div>

        <hr className='mb-5' />
        <div className='justify-center w-full '>
          <Form onSubmit={handleSubmit} className='flex flex-col w-full '>
            <input type='text' placeholder='nombres' />

            <input type='text' placeholder='Apellidos' />

            <input type='text' placeholder='Correo' />

            <input type='text' placeholder='documento de identidad' />

            <input type='text' placeholder='Pais' />

            <input type='text' placeholder='Ciudad' />
            <Btn type='submit' className='mt-20'>Guardar cambios</Btn>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Profile
