import React, { useEffect, useState } from 'react'
import { signInWithEmail } from './userEmailAndPassword'
import { fetchCollection } from './fetchCollection'
import { deleteUser, getCurrentUserInfo, logOutUser, updateProfileImage, updateUserInfo } from './user'

export const TestingValentin = () => {
  const [userLoggingIn, setUserLoggingIn] = useState({ email: '', password: '' })
  const [user, setUser] = useState(null)

  function handleChangeSignIn (event) {
    const { name, value } = event.target
    setUserLoggingIn(user => ({ ...user, [name]: value }))
  }

  async function handleSubmitSignIn (event) {
    event.preventDefault()
    try {
      const user = await signInWithEmail(userLoggingIn)
      setUser(user)
      return user
    } catch (error) {
      console.error(error)
    }
  }

  async function uploadImage (e) {
    e.preventDefault()
    console.log(await fetchCollection({ collectionName: 'users' }))
    const profImage = e.target.profileImage.files[0]
    const updatedUser = await updateProfileImage({ image: profImage })
    setUser(updatedUser)
  }

  async function handleLogOut () {
    await logOutUser()
    setUser(null)
  }

  async function checkUser () {
    const user = await getCurrentUserInfo()
    console.log(user)
    setUser(user)
    return user
    // await updateUserInfo({ firstName: 'Hugo' })
  }

  return (
    <div>
      <form onSubmit={e => handleSubmitSignIn(e)}>
        <input placeholder='email' name='email' onChange={e => handleChangeSignIn(e)} required />
        <input placeholder='password' name='password' type='password' onChange={e => handleChangeSignIn(e)} required />
        <button>SignIn</button>
      </form>
      <form onSubmit={(e) => uploadImage(e)}>
        <input type='file' name='profileImage' accept='image/jpeg, image/png' />
        <button>Upload</button>
      </form>
      <button onClick={deleteUser}>Delete user</button>
      <button onClick={handleLogOut}>LogOut user</button>
      <button onClick={checkUser}>check user signed in</button>
      {user && <div>{user.firstName}</div>}
      {user && <img src={user.avatarURL} />}
    </div>
  )
}
