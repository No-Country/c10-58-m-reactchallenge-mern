import React from 'react'
import { Form } from '../components/MicroComponents/Form.js'
import { Btn } from '../components/MicroComponents/Btn.js'
import { useFirebaseContext } from '../context/UserContext.jsx'

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
    <Form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input onChange={handleChange} type='text' value={firstName} />
      </label>
      <label>
        Apellido:
        <input onChange={handleChange} type='text' value={lastName} />
      </label>
      <label>
        Email:
        <input onChange={handleChange} type='text' value={email} />
      </label>
      <label>
        DNI:
        <input onChange={handleChange} type='text' value={dni} />
      </label>
      <label>
        Pais:
        <input onChange={handleChange} type='text' value='Pais' />
      </label>
      <label>
        Ciudad:
        <input onChange={handleChange} type='text' value='Ciudad' />
      </label>
      <Btn type='submit'>Guardar cambios</Btn>
    </Form>
  )
}

export default EditProfile
