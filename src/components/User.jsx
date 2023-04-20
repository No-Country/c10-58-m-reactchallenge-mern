import React, { useEffect, useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'

const User = () => {
  const { user } = useFirebaseContext()

  return (
    <img
      className='w-9 h-9 bg-slate-300 rounded-full'
      src={user.avatarURL}
      alt='avatar'
    />
  )
}

export default User
