import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import homeIcon from '../../public/home_icon.svg'
import variantHomeIcon from '../../public/home_variant.svg'
import emergencyIcon from '../../public/emergency_icon.svg'
import variantEmergencyIcon from '../../public/emergency_variant.svg'
import profileIcon from '../../public/profile_icon.svg'
import variantProfileIcon from '../../public/profile_variant.svg'
import { useFirebaseContext } from '../context/UserContext'
import User from './User'
import { NavSelectedPoint } from './MicroComponents/NavSelectedPoint'
import styled from 'styled-components'
import { COLORS } from './MicroComponents/Colors'

const NavBarStyled = styled.nav`
  width: 100vw;
  height: 60px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: ${COLORS.strongGreen};
  display: block;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li {
      position: relative;
    }
  }
`

const Navbar = () => {
  const location = useLocation()
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(location.pathname.split('/'))
  }, [location])

  const { user } = useFirebaseContext()

  return (
    <NavBarStyled>
      <ul>
        <li>
          {(location.pathname === '/' || selected.includes('list')) && <NavSelectedPoint />}
          <NavLink to='/'>
            <img src={(location.pathname === '/' || selected.includes('list')) ? variantHomeIcon : homeIcon} alt='' />
          </NavLink>
        </li>
        <li>
          {selected.includes('emergency') && <NavSelectedPoint />}
          <NavLink to='/emergency'>
            <img
              src={
                selected.includes('emergency') ? variantEmergencyIcon : emergencyIcon
              }
              alt=''
            />
          </NavLink>
        </li>
        <li>
          {(selected.includes('profile') || selected.includes('login')) && (
            <NavSelectedPoint />
          )}
          <NavLink to='/profile'>
            {user
              ? (
                <User />
                )
              : (
                <img
                  src={
                    (selected.includes('profile') || selected.includes('login'))
                      ? variantProfileIcon
                      : profileIcon
                }
                  alt=''
                />
                )}
          </NavLink>
        </li>
      </ul>
    </NavBarStyled>
  )
}

export default Navbar
