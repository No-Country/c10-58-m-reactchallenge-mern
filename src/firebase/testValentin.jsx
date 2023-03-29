import React, { useState } from 'react'
import { signInWithEmail } from './userEmailAndPassword'
import { getDefaultAvatar, uploadProfileImage } from './storage'

export const TestingValentin = () => {
  const [userLoggingIn, setUserLoggingIn] = useState({ email: '', password: '' })

  function handleChangeSignIn (event) {
    const { name, value } = event.target
    setUserLoggingIn(user => ({ ...user, [name]: value }))
    console.log(userLoggingIn)
  }

  async function handleSubmitSignIn (event) {
    event.preventDefault()
    try {
      const user = await signInWithEmail(userLoggingIn)
      console.log(user)
      return user
    } catch (error) {
      console.error(error)
    }
  }

  async function uploadImage (e) {
    e.preventDefault()
    const profImage = e.target.profileImage.files[0]
    // uploadProfileImage({ image: profImage })
    // getDefaultAvatar()
  }

  return (
    <div>
      <form onSubmit={e => handleSubmitSignIn(e)}>
        <input placeholder='email' name='email' onChange={e => handleChangeSignIn(e)} required />
        <input placeholder='password' name='password' type='password' onChange={e => handleChangeSignIn(e)} required />
        <button>SignIn</button>
      </form>
      <form onSubmit={(e) => uploadImage(e)}>
        <input type='file' name='profileImage' accept='image/jpeg, image/png' required />
        <button>Upload</button>
      </form>
    </div>
  )
}
