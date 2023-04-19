import React from 'react'
import { useFirebaseContext } from '../context/UserContext'
import { SpinnerComponent } from './MicroComponents/Spinner'

const User = () => {
  const { user } = useFirebaseContext()

  if (!user) return (<SpinnerComponent />)
}
export default User
