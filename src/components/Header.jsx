/* eslint-disable jsx-quotes */
import React from 'react'
import Navbar from './Navbar'
import User from './User'
import { useFirebaseContext } from '../context/UserContext'

const Header = () => {
  const { user } = useFirebaseContext()

  return (
    <header className="fixed bottom-0 w-full h-14 flex justify-evenly items-center bg-slate-200 z-10">
      <Navbar />
      <div className="hidden lg:block">{user && <User />}</div>
    </header>
  )
}

export default Header
