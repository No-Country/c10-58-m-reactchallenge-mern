/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'

const User = () => {
  const { user } = useFirebaseContext()

  if (!user) return <p>Cargando...</p>

  return (
    <div className="flex items-center">
      {user && (
        <img
          className="w-8 h-8 bg-slate-300 rounded-full"
          src={user.avatar}
          alt="avatar"
        />
      )}
    </div>
  )
}

export default User
