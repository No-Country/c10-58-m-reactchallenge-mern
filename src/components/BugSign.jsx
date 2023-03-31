/* eslint-disable no-empty */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'
import styled from 'styled-components'
// styles
const H1 = styled.h1`
  color: #000;
  font-size: 40px;
  font-weight: 700;
  margin: 10px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  height: 500px;
  width: 350px;
  border-radius: 10px;
`

const ButtonRed = styled.button`
  background-color: #fff;
  color: #000000;
  width: 70px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`
const P = styled.p`
  margin: 10px;
  color: #000;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const DivLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
  span {
    margin: 10px;
    color: #000;
    font-size: 20px;
  }
  hr {
    width: 100%;
    height: 1px;
    background-color: #000;
  }
`

const SignIn = ({ setIsRegister, isRegister }) => {
  const [users, setUser] = useState({ email: '', password: '' })
  const { login } = useFirebaseContext()
  const navigate = useNavigate()
  // destructuring
  // const { email, password } = users

  // add function for google and facebook

  const handleSubmitForGoogle = (e) => {
    if (e.target.value === '1') {
      console.log('google')
    } else {
      console.log('facebook')
    }
  }

  // input change
  const handleChange = (e) => {
    // destructuring
    const { name, value } = e.target
    setUser({ ...users, [name]: value })
  }
  // form validation
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(users.email, users.password)
      navigate('/matias')
    } catch (error) {
      console.log(error)
    }

     validate
   if (e.target.email.value === '' || e.target.password.value === '') {
     } else {
     // send data to firebase

     e.target.email.value = ''
      e.target.password.value = ''
       setUser({ email: '', password: '' })
    }
    const handleNewAccount = () => {
      setIsRegister(!isRegister)
    }

    return (
      <Container className="sing--in flex-col w-full flex ">
        <H1 className="text-4xl">Sign In</H1>

        <form className="w-full items-center mt-5" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />

          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Sing In</button>
        </form>

        <DivLine>
          <hr />
          <span>or</span>
          <hr />
        </DivLine>
        <div>
          <ButtonRed onClick={handleSubmitForGoogle} value="1" className="">
            {' '}
            G
          </ButtonRed>
          <ButtonRed onClick={handleSubmitForGoogle} value="2" className="">
            F
          </ButtonRed>
        </div>

        <div className="">
          <P onClick={handleNewAccount} className="text-2xl   ">
            Don't have an account?
          </P>
        </div>
      </Container>
    )
  }
}

export default SignIn