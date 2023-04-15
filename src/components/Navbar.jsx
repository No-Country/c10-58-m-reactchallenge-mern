/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable no-tabs */
/* eslint-disable jsx-quotes */
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import navbarIcon from '../../public/navbar_icon.svg'
import homeIcon from '../../public/home_icon.svg'
import variantHomeIcon from '../../public/home_variant.svg'
import emergencyIcon from '../../public/emergency_icon.svg'
import variantEmergencyIcon from '../../public/emergency_variant.svg'
import profileIcon from '../../public/profile_icon.svg'
import variantProfileIcon from '../../public/profile_variant.svg'
import { useFirebaseContext } from '../context/UserContext'
import User from './User'

const Navbar = () => {
  const location = useLocation()
  const [selected, setSelected] = useState(location.pathname)
  const { user } = useFirebaseContext()

  const handleNavLinkClick = (icon) => {
    setSelected(icon)
  }

  return (
    <nav className="w-full h-[50px] sticky bottom-0">
      <ul className="w-full h-full flex justify-evenly items-center">
        <li className="relative">
          {selected === '/' && (
            <img className="absolute top-[-5px] left-[9px]" src={navbarIcon} />
          )}
          <NavLink to="/" onClick={() => handleNavLinkClick('/')}>
            <img src={selected === '/' ? variantHomeIcon : homeIcon} alt="" />
          </NavLink>
        </li>
        <li className="relative">
          {selected === 'emergency' && (
            <img className="absolute top-[-5px] left-[10px]" src={navbarIcon} />
          )}
          <NavLink
            className=""
            to="/emergency"
            onClick={() => handleNavLinkClick('emergency')}
          >
            <img
              src={
                selected === 'emergency' ? variantEmergencyIcon : emergencyIcon
              }
              alt=""
            />
          </NavLink>
        </li>
        <li className="relative">
          {selected === 'profile' && (
            <img className="absolute top-[-5px] left-[8px] " src={navbarIcon} />
          )}
          <NavLink
            className=""
            to="/profile"
            onClick={() => handleNavLinkClick('profile')}
          >
            {user ? (
              <User />
            ) : (
              <img
                src={selected === 'profile' ? variantProfileIcon : profileIcon}
                alt=""
              />
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
