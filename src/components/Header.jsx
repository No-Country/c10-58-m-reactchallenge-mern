import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='fixed bottom-0 w-screen h-12 flex justify-evenly items-center bg-slate-200'>
      <Navbar />
    </header>
  )
}

export default Header
