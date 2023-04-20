import React, { useState } from 'react'
import { Form } from '../components/MicroComponents/Form.js'
import { Btn } from '../components/MicroComponents/Btn.js'

import { useFirebaseContext } from '../context/UserContext.jsx'
import { updateUserInfo } from '../firebase/user.js'

const EditProfile = () => {
  const { user } = useFirebaseContext()
  const { firstName, email, lastName, dni, avatarUrl } = user
  const [formData, setFormData] = useState({ firstName, email, lastName, dni })
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateUserInfo(formData)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input onChange={handleChange} name='firstName' type='text' value={formData.firstName} />
      </label>
      <label>
        Apellido:
        <input onChange={handleChange} name='lastName' type='text' value={formData.lastName} />
      </label>
      <label>
        Email:
        <input onChange={handleChange} name='email' type='text' value={formData.email} />
      </label>
      <label>
        DNI:
        <input onChange={handleChange} name='dni' type='text' value={formData.dni} />
      </label>
      <label>
        <Btn type='submit'>Guardar </Btn>
      </label>
    </Form>
  )
}

export default EditProfile
