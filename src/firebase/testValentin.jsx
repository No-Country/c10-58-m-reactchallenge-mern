import React, { useState } from 'react'
import { signInWithEmail } from './userEmailAndPassword'
import { fetchCategories, fetchCollection } from './fetchCollection'
import { deleteUser, getCurrentUserInfo, getUserData, logOutUser, updateProfileImage } from './user'
import { cancelAppointment, createAppointment, getAppointmentData } from './appointment'
import { createMedic, getMedicData } from './medics'

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

  // async function uploadImage (e) {
  //   e.preventDefault()
  //   console.log(await fetchCollection({ collectionName: 'users' }))
  //   const profImage = e.target.profileImage.files[0]
  //   const updatedUser = await updateProfileImage({ image: profImage })
  //   setUser(updatedUser)
  // }

  async function handleLogOut () {
    await logOutUser()
    setUser(null)
  }

  async function checkUser () {
    const user = await getCurrentUserInfo()
    await createMedic()

    console.log(user)
    setUser(user)
    return user
    // await updateUserInfo({ firstName: 'Hugo' })
  }

  async function uploadDate (e) {
    e.preventDefault()
    const date = e.target.dateTime.value
    // await createAppointment({ date, hour: '17', medicId: 'eVrCCOYx7MFkOeWDcZaI' })
    // await cancelAppointment({ appointmentId: '5zrcdkFHtCG4x3uMBW5Q' })
    const { medicId, userId } = await getAppointmentData({ appointmentId: 'dhBB12W0Wh8jUp42nND6' })
    console.log(await getUserData({ userId }))
    console.log(await getMedicData({ medicId }))
  }

  return (
    <div>
      <form onSubmit={e => handleSubmitSignIn(e)}>
        <input placeholder='email' name='email' onChange={e => handleChangeSignIn(e)} required />
        <input placeholder='password' name='password' type='password' onChange={e => handleChangeSignIn(e)} required />
        <button>SignIn</button>
      </form>
      <form onSubmit={(e) => uploadDate(e)}>
        <input type='date' name='dateTime' />
        {/* <input type='time' name='dateTime' min='09:00' max='18:00' required /> */}
        <button>Upload</button>

      </form>
      {/* <form onSubmit={(e) => uploadImage(e)}>
        <input type='file' name='profileImage' accept='image/jpeg, image/png' />
        <button>Upload</button>
      </form> */}
      <button onClick={deleteUser}>Delete user</button>
      <button onClick={handleLogOut}>LogOut user</button>
      <button onClick={checkUser}>check user signed in</button>
      {user && <div>{user.firstName}</div>}
      {user && <img src={user.avatarURL} />}
    </div>
  )
}
