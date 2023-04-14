/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable no-tabs */
/* eslint-disable jsx-quotes */
import { NavLink } from 'react-router-dom'
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
  const [selected, setSelected] = useState('homeIcon')
  const { user } = useFirebaseContext()

  const handleNavLinkClick = (icon) => {
    setSelected(icon)
  }

  return (
    <nav className="w-full h-[50px] fixed bottom-0">
      <ul className="w-full h-full flex justify-evenly items-center">
        <li className="">
          <NavLink
            className="relative"
            to="/"
            onClick={() => handleNavLinkClick('homeIcon')}
          >
            {selected === 'homeIcon' && (
              <img
                className="absolute top-[-5px] left-[9px]"
                src={navbarIcon}
              />
            )}
            <img
              src={selected === 'homeIcon' ? variantHomeIcon : homeIcon}
              alt=""
            />
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="relative"
            to="/emergency"
            onClick={() => handleNavLinkClick('emergencyIcon')}
          >
            {selected === 'emergencyIcon' && (
              <img
                className="absolute top-[-5px] left-[10px]"
                src={navbarIcon}
              />
            )}
            <img
              src={
                selected === 'emergencyIcon'
                  ? variantEmergencyIcon
                  : emergencyIcon
              }
              alt=""
            />
          </NavLink>
        </li>
        <li className="">
          <NavLink
            className="relative"
            to="/profile"
            onClick={() => handleNavLinkClick('profileIcon')}
          >
            {selected === 'profileIcon' && (
              <img
                className="absolute top-[-12px] left-[3px] "
                src={navbarIcon}
              />
            )}
            {user ? (
              <User />
            ) : (
              <img
                src={
                  selected === 'profileIcon' ? variantProfileIcon : profileIcon
                }
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
