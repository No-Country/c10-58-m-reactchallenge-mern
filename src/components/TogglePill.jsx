import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { COLORS } from './MicroComponents/Colors'

const TogglePillStyled = styled(motion.button)`
background-color: ${props => (props.show ? 'white' : 'transparent')};
color: black;
padding: 4px 8px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 0.8rem;
border: none;
box-shadow: ${props => (props.show ? '0px 2px 2px rgba(0,0,0, .25)' : 'none')};
transition: all 0.3s linear;
border-radius: 9999px;
`

export const TogglePillButton = ({ children, show }) => {
  return (
    <TogglePillStyled show={show}>{children}</TogglePillStyled>
  )
}
