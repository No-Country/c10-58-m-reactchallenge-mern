import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { signInWithEmail } from '../firebase/userEmailAndPassword'
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
  color: #fff;
  height: 500px;
  width: 350px;
  border-radius: 10px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #000;
  padding: 2px;
  label {
    padding-top: 15px;
    margin: 0px;
  }
  input {
    margin: 10px;
    width: 100%;
    height: 40px;
    border: 1px solid #000;
    padding: 5px;
  }
  button {
    margin: 10px;
    width: 100%;
    height: 40px;
    border: 1px solid #000;
    padding: 5px;
    background-color: #000;
    color: #fff;
  }
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
`
const Span = styled.span`
  margin: 10px;
  color: #000;
  font-size: 20px;
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
  const [users,setUser]=useState({email:'',password:''})
  //destructuring
  const {email,password}=users

  // add function for google and facebook




  const handleSubmitForGoogle = (e) => {
    if (e.target.value === '1') {
      console.log('google')
    } else {
      console.log('facebook')
    }
  }
  // form validation
  const handleSubmit = async (e) => {
    e.preventDefault()
    

    // validate
    if (e.target.email.value === '' || e.target.password.value === '') {
     
      return
    }else{
      // send data to firebase
     
      try {
        const user = await signInWithEmail(users)
        console.log(user)
      }
      catch (error) {
        console.log(error)
      }

      e.target.email.value = ''
      e.target.password.value = ''
      setUser({email:'',password:''})

    }
   

  }
  // input change
  const handleChange = (e) => {
    //destructuring
    const {name,value}=e.target
    setUser({...users,[name]:value})
   


    
  }

  return (
    <Container className='sing--in flex-col'>
      <H1 className='text-4xl'>Sign In</H1>

      <Form
        onSubmit={handleSubmit}
        className='flex'
      >
        <label htmlFor='email'>Email</label>
<<<<<<< HEAD
        <input
          onChange={handleChange}
          type='email'
          name='email'
          id='email'
        />
        <label htmlFor='password'>Password</label>
        <input
          onChange={handleChange}
          type='password'
          name='password'
          id='password'
        />
=======
        <input onChange={handleChange} value={email} type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input onChange={handleChange} value={password} type='password' name='password' id='password' />
>>>>>>> 34e03dc132de9a757e64f7d5dc5271810c68b7c0
        <button type='submit'>Sing In</button>
      </Form>

      <DivLine>
        <hr />
        <span>or</span>
        <hr />
      </DivLine>
      <div>
        <ButtonRed
          onClick={handleSubmitForGoogle}
          value='1'
          className=''
        >
          {' '}
          G
        </ButtonRed>
        <ButtonRed
          onClick={handleSubmitForGoogle}
          value='2'
          className=''
        >
          F
        </ButtonRed>
      </div>

      <div className=''>
        <P className='text-2xl'>Don't have an account?</P>
      </div>
    </Container>
  )
}

export default SignIn