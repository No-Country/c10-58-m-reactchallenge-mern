import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'
import { SpinnerComponent } from '../components/MicroComponents/Spinner'

export const Profile = () => {
  const { isUserLoggedIn, loading } = useFirebaseContext()

  const handleEdit = () => {
    setEdit(!edit)
  }

  return (
    <>
      {!loading ? (isUserLoggedIn ? <Outlet /> : <Navigate to='/login' />) : <SpinnerComponent />}
    </>
  )
}
