/* eslint-disable jsx-quotes */
import React from 'react'
import Navbar from './Navbar'
import User from './User'

const Header = () => {
  return (
    <header className="w-full h-12 flex justify-evenly items-center bg-slate-200">
      <Navbar />
      <User />
    </header>
  )
}

export default Header
