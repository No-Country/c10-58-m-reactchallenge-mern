import React from 'react'
import Register from '../components/Register'
import SignIn from '../components/SignIn'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #ffffff;
`
const RegisterAnadLogin = () => {
    const [isRegister, setIsRegister] = React.useState(false)
  return (
    <Container className='flex justify-self-center justify-items-center'>
        {
            isRegister ? <Register/> : <SignIn setIsRegister={setIsRegister}
            isRegister={isRegister}
            />

        }
      
    </Container>
  )
}

export default RegisterAnadLogin