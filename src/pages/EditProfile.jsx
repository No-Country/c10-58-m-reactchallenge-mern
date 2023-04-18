import React, { useEffect } from 'react'
import { Form } from '../components/MicroComponents/Form.js'
import { Btn } from '../components/MicroComponents/Btn.js'
import { useFirebaseContext } from '../context/UserContext.jsx'
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

const EditProfile = () => {
  const { user } = useFirebaseContext()
  console.log(user)
  // destructuring
  const { firstName, email, lastName, dni } = user

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  // change input
  const handleChange = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit} className='flex flex-col w-full items-center '>
      <label className='w-full'>
        Nombre:
        <input onChange={handleChange} type='text' value={firstName} />
      </label>
      <label className='w-full'>
        Apellido:
        <input onChange={handleChange} type='text' value={lastName} />
      </label>
      <label className='w-full'>
        Email:
        <input onChange={handleChange} type='text' value={email} />
      </label>
      <label className='w-full'>
        DNI:
        <input onChange={handleChange} type='text' value={dni} />
      </label>
      <label className='w-full'>
        Pais:
        <input onChange={handleChange} type='text' value='Pais' />
      </label>
      <label className='w-full'>
        Ciudad:
        <input onChange={handleChange} type='text' value='Ciudad' />
      </label>
      <Btn type='submit'>Guardar cambios</Btn>
    </Form>
  )
}

export default EditProfile
