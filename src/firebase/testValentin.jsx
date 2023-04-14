import React, { useState, useEffect } from 'react'
import { signInWithEmail } from './userEmailAndPassword'
import { fetchCategories, fetchCollection } from './fetchCollection'
import { deleteUser, getCurrentUserInfo, getPastAppointments, getUserData, logOutUser, updateProfileImage } from './user'
import { cancelAppointment, createAppointment, getAppointmentData } from './appointment'
import { createMedic, getMedicAppointments, getMedicData } from './medics'
import { useFirebaseContext } from '../context/UserContext'

export const TestingValentin = () => {
  const [userLoggingIn, setUserLoggingIn] = useState({ email: '', password: '' })
  const { user, login, logout } = useFirebaseContext()
  function handleChangeSignIn (event) {
    const { name, value } = event.target
    setUserLoggingIn(user => ({ ...user, [name]: value }))
  }
  const [userLoggedIn, setUserLoggedIn] = useState(null)

  useEffect(() => {
    async function getUserInfo () {
      const userInfo = await getCurrentUserInfo()
      userInfo ? setUserLoggedIn(userInfo) : setUserLoggedIn(null)
    }
    getUserInfo()
  }, [user])

  async function handleSubmitSignIn (event) {
    event.preventDefault()
    try {
      await login(userLoggingIn)
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
    logout()
  }

  async function checkUser () {
    const user = await getCurrentUserInfo()
    // await createMedic()
    return user
    // await updateUserInfo({ firstName: 'Hugo' })
  }

  async function uploadDate (e) {
    e.preventDefault()
    const date = e.target.dateTime.value
    console.log(date)
    // console.log(await createAppointment({ date, hour: '13', medicId: '8RmXqAFxfXtLQxXMRh6w' }))
    // await cancelAppointment({ appointmentId: '5zrcdkFHtCG4x3uMBW5Q' })
    // const { medicId, userId } = await getAppointmentData({ appointmentId: 'dhBB12W0Wh8jUp42nND6' })
    // console.log(await getUserData({ userId }))
    // console.log(await getMedicData({ medicId }))
    // console.log(await getPastAppointments())
  }

  return (
    <div>
      {!userLoggedIn
        ? (<form onSubmit={e => handleSubmitSignIn(e)}>
          <input placeholder='email' name='email' onChange={e => handleChangeSignIn(e)} required />
          <input placeholder='password' name='password' type='password' onChange={e => handleChangeSignIn(e)} required />
          <button>SignIn</button>
        </form>)
        : <button onClick={handleLogOut}>LogOut userLoggedIn</button>}
      <form onSubmit={(e) => uploadDate(e)}>
        <input type='date' name='dateTime' />
        {/* <input type='time' name='dateTime' min='09:00' max='18:00' required /> */}
        <button>Upload</button>

      </form>
      {/* <form onSubmit={(e) => uploadImage(e)}>
        <input type='file' name='profileImage' accept='image/jpeg, image/png' />
        <button>Upload</button>
      </form> */}
      <button onClick={deleteUser}>Delete userLoggedIn</button>
      <button onClick={checkUser}>check userLoggedIn signed in</button>
      {userLoggedIn && <div>{userLoggedIn.firstName}</div>}
      {userLoggedIn && <img src={userLoggedIn.avatarURL} />}
    </div>
  )
}
