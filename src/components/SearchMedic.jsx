import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from './MicroComponents/Colors'
import searchIcon from '../assets/imgs/icon.svg'

const SearchBar = styled.span`
display: flex;
gap: 1rem;
align-items: center;
width: fit-content;
align-self: center;
padding: 0.325rem 0.75rem;
border-radius: 0.25rem;
cursor: pointer;
background-color: ${COLORS.lightGreen};
font-weight: 500;
font-size: 1.125rem;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
`

export const SearchMedic = () => {
  const navigate = useNavigate()
  return (
    <SearchBar
      onClick={() => navigate('/list')}
      className='flex items-center'
    > Buscar médicos
      <img src={searchIcon} alt='search icon' />
    </SearchBar>
  )
}
