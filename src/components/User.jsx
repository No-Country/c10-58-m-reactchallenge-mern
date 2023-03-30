/* eslint-disable jsx-quotes */
import React from 'react'
import { useFirebaseContext } from '../context/UserContext'

const User = () => {
  const { user } = useFirebaseContext()

  return (
    <div className="w-8 h-8 bg-slate-300 rounded-full">
      <img src="" alt="" />
    </div>
  )
}

export default User
