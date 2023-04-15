/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'

const User = () => {
  const { user } = useFirebaseContext()

  if (!user) return <p>Cargando...</p>

  return (
    <div className="flex items-center w-[45px] h-[45px]">
      {user && (
        <img
          className="w-9 h-9 ml-1 bg-slate-300 rounded-full"
          src={user.avatar}
          alt="avatar"
        />
      )}
    </div>
  )
}

export default User
