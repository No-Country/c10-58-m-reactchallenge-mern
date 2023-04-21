import styled from 'styled-components'
import navbarIcon from '../../../public/navbar_icon.svg'

export const NavBarPoint = styled.img`
position: absolute;
top: -13px;
left: 8px;
z-index: 999;
`

export const NavSelectedPoint = () => {
  return (
    <NavBarPoint src={navbarIcon} />
  )
}
