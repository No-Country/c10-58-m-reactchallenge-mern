/* eslint-disable jsx-quotes */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'
import styled from 'styled-components'
import { Form } from '../components/MicroComponents/Form'
import { Btn } from '../components/MicroComponents/Btn'

import Header from '../components/Header'

// styles
const H1 = styled.h1`
  color: #000;
  font-size: 40px;
  font-weight: 700;
  margin: 10px;
`

const Container = styled.div`
  place-self: center;

  align-items: center;
  background-color: #ffffff;

  border-radius: 10px;
`

const ButtonRed = styled.button`
	background-color: #fff;
	color: #000000;
	width: 50px;
	height: 50px;
	border: 1px solid #000;
	border-radius: 100%;
	margin: 10px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

const P = styled.p`
  margin: 10px;
  color: #000;
  font-size: 15px;
  padding: 10px;
  padding-left: 135px;
  
  text-decoration: underline;

  &:hover {
    cursor: pointer;
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

const SignIn = () => {
  const [users, setUser] = useState({ email: '', password: '' })
  const { login, user } = useFirebaseContext()
  const navigate = useNavigate()

  // destructuring
  const { email, password } = users

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
      await login(users)
      navigate(-1)
    } catch (error) {
      console.log(error)
    }

    // validate
    if (e.target.email.value === '' || e.target.password.value === '') {
      console.log('error')
    } else {
      // send data to firebase
      e.target.email.value = ''
      e.target.password.value = ''
      setUser({ email: '', password: '' })
    }
  }

  // add function for google and facebook
  const handleSubmitForGoogle = (e) => {
    if (e.target.value === '1') {
      console.log('google')
    } else {
      console.log('facebook')
    }
  }

  return (
    <Container className='sing--in flex-col w-full min-h-screen flex pt-10 mb-10   '>
      <Header />
      <div className='flex flex-col w-full pl-10 pb-20'>
        <H1 className='text-4xl'>Hola!</H1>
        <span>Inicia sesion en tu cuenta</span>
      </div>

      <Form className=" items-center mt-5 w-11/12" onSubmit={handleSubmit}>
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
        <P className="  ">Olvide mi password</P>
        <Btn className='mt-10 h-10 mb-5' type="submit">Iniciar sesion</Btn>
      </Form>

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
        <Link to="/register">
          <p className="text-2xl   ">Don't have an account?</p>
        </Link>
      </div>

    </Container>
  )
}

export default SignIn
