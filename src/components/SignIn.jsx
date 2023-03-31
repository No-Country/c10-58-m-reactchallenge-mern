import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// styles
const ButtonRed = styled.button`
  background-color: #fff;
  color: #000000;
  width: 70px;
  height: 60px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`


const SignIn = () => {
  return (
    <div>
      <h1> temporal SignIn 	😀 </h1>
      <Link to="/esteban">
      <ButtonRed>

     click to register
      </ButtonRed>
      </Link>
    </div>
  )
}

export default SignIn
