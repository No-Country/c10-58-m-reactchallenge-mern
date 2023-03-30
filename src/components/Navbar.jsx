/* eslint-disable jsx-quotes */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/matias"> Ir al home</Link>
        </li>
        <li>
          <Link to="/esteban"> Ir al registro</Link>
        </li>
        <li>
          <Link to="/"> Ir al login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
