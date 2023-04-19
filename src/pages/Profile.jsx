import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'

export const Profile = () => {
  const { isUserLoggedIn, loading } = useFirebaseContext()

  return (
    <>
      {(isUserLoggedIn ? <Outlet /> : <Navigate to='/login' />)}
    </>
  )
}
