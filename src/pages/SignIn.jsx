/* eslint-disable jsx-quotes */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'
import styled from 'styled-components'
import { Form } from '../components/MicroComponents/Form'
import { Btn } from '../components/MicroComponents/Btn'
import {ERRORS_LOGGING_USER} from'../firebase/errors'

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

	width: 50px;
	height: 50px;
	
	border-radius: 100%;
	margin: 10px;

  &:hover {

    color: #fff;
  }
  img{
    width: 100%;
    height: 100%;
  }
`

const P = styled.p`
  
  margin: 10px;
  color: #b4cf66;
  font-size: 15px;
  padding: 15px;
  padding-left: 135px;
  inline-size: 100%;
  
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


`
const Span = styled.span`
  margin: 10px; 
  color: #146151;
  font-size: 20px;
  font-weight: 700;
    &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`


const SignIn = () => {
  const [users, setUser] = useState({ email: '', password: '' })
  const { login } = useFirebaseContext()
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
			await login(users);
			navigate('/profile');
      

		} catch (error) {
    
     

 

		
		}

    // validate
    if (e.target.email.value === '' || e.target.password.value === '') {
      alert('Complete los campos')

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
     
    } else {

   

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
        <P className="  ">Olvide mi contrasena</P>
        <Btn className='mt-10 h-10 mb-5' type="submit">Iniciar sesion</Btn>
      </Form>

      <DivLine>
      
      </DivLine>
      <div>
        <ButtonRed onClick={handleSubmitForGoogle} value="1" className="">
          {' '}
          <img src="/public/Login Google.png" alt="" />
        </ButtonRed>
        <ButtonRed onClick={handleSubmitForGoogle} value="2" className="">
         <img src="/public/Login Facebook.png" alt="" />
        </ButtonRed >
      </div>

      <div className="">
        <Link to="/register" className='flex flex-col  place-items-center   '>
          <p className="text-2xl   ">Aun no tienes cuenta ? 

          </p>
          <Span>Crear una</Span>
        </Link>
      </div>
   
    </Container>
  )
}

export default SignIn
