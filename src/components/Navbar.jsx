/* eslint-disable jsx-quotes */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-80">
      <ul className="w-full flex gap-5">
        <li className="w-24">
          <Link to="/matias"> Ir al home</Link>
        </li>
        <li className="w-24">
          <Link to="/esteban"> Ir al registro</Link>
        </li>
        <li className="w-24">
          <Link to="/"> Ir al login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
