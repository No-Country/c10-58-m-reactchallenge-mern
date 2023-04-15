import React from 'react'
import Navbar from './Navbar'
// import User from './User'

const Header = () => {
  return (
    <header className='fixed bottom-0 w-full h-12 flex justify-evenly items-center bg-slate-200'>
      <Navbar />
      {/* <User /> */}
    </header>
  )
}

export default Header
