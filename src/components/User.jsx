import React, { useEffect, useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'

const User = () => {
  const { user } = useFirebaseContext()

  return (
    <img
      className='w-10 h-10 bg-slate-300 rounded-full'
      src={user.avatarURL}
      alt='avatar'
    />
  )
}

export default User
