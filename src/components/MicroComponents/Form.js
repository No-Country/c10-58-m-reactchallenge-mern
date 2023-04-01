import styled from 'styled-components'

// components
//form for the login page mobile
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 0 1rem;
  margin: 0 auto;
  background-color: #fff;
 
  
 
  input {
    width: 100%;
    height: 3.0rem;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 1rem;
    &:focus {
      outline: none;
      border-color: #000;
    }
  }
  button {
    width: 50%;
    height: 3.0rem;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 1rem;
    background-color: #000;
    color: #fff;
    &:focus {
      outline: none;
      border-color: #000;
    }
  }

`

