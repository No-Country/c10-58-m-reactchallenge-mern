import React, { useState } from 'react'
import { createUserWithEmail, signInWithEmail } from './userEmailAndPassword'
import { fetchMedicos } from './fetchMedicos'

export const TestingValentin = () => {
  const [userInput, setUserInput] = useState({ email: '', password: '' })
  const [userLoggingIn, setUserLoggingIn] = useState({ email: '', password: '' })

  function handleChange (event) {
    const { name, value } = event.target
    setUserInput(user => { return { ...user, [name]: value } })
    console.log(userInput)
  }

  function handleChangeSignIn (event) {
    const { name, value } = event.target
    setUserLoggingIn(user => { return { ...user, [name]: value } })
    console.log(userInput)
  }

  async function handleSubmit (event) {
    event.preventDefault()
    try {
      const user = await createUserWithEmail(userInput)
      console.log(user)
      return user
    } catch (error) {
      console.error(error)
    }
  }

  async function handleSubmitSignIn (event) {
    event.preventDefault()
    try {
      const user = await signInWithEmail(userInput)
      console.log(user)
      return user
      // const medicos = await fetchMedicos()
      // console.log(medicos)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input placeholder='email' name='email' onChange={e => handleChange(e)} required />
        <input placeholder='password' name='password' type='password' onChange={e => handleChange(e)} required />
        <button>Submit</button>
      </form>
      <form onSubmit={e => handleSubmitSignIn(e)}>
        <input placeholder='email' name='email' onChange={e => handleChangeSignIn(e)} required />
        <input placeholder='password' name='password' type='password' onChange={e => handleChangeSignIn(e)} required />
        <button>SignIn</button>
      </form>
    </div>
  )
}
