import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'
import styled from 'styled-components'
import { Btn } from '../components/MicroComponents/Btn'
import { LoginForm } from '../components/MicroComponents/LoginForm'
import { getCurrentUserInfo } from '../firebase/user'
import { PageTitle } from '../components/MicroComponents/Text'

// styles
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

const Span = styled.span`
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
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    // destructuring
    const { name, value } = e.target
    setUser({ ...users, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(users)
      navigate('/profile')
    } catch (error) {
      setMessage(error.message)
    }
  }
  // add function for google and facebook
  const handleSubmitForGoogle = (e) => {
    if (e.target.value === '1') {
    } else {
    }
  }

  async function handleCheckUser () {
    console.log(await getCurrentUserInfo())
  }

  return (
    <div className='flex flex-col items-center gap-8'>
      <div>
        <PageTitle className='text-4xl font-bold text-center'>Hola!</PageTitle>
        <p>Inicia sesion en tu cuenta</p>
      </div>
      <LoginForm onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            onChange={handleChange}
            type='email'
            name='email'
            id='email'
            placeholder='Email'
          />
        </label>
        <label>
          Contraseña
          <input
            onChange={handleChange}
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </label>
        {message && <p className='text-red-900 text-lg'>{message} (!)</p>}
        <P className=''>Olvide mi contraseña</P>
        <Btn className='h-10' type='submit'>Iniciar sesion</Btn>
      </LoginForm>
      <div>
        <ButtonRed onClick={handleSubmitForGoogle} value='1'>
          {' '}
          <img src='/public/Login Google.png' alt='' />
        </ButtonRed>
        <ButtonRed onClick={handleSubmitForGoogle} value='2'>
          <img src='/public/Login Facebook.png' alt='' />
        </ButtonRed>
      </div>
      <p className='text-2xl'>Aun no tienes cuenta ?</p>
      <Link to='/register' className='flex flex-col place-items-center'>
        <Span>Crear una</Span>
      </Link>
    </div>
  )
}

export default SignIn
