import styled from 'styled-components'

// components
// form for the login page mobile
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
<<<<<<< HEAD
   
   
    background-color: #EBEBEB;
=======

    background-color: #ebebeb;
>>>>>>> matias-teijeiro
    margin: 0.5rem 0;
    padding: 0.4rem 1rem;
    border: 1px solid #ccc;
    border-radius: 27px;
    font-size: 1rem;
    &:focus {
      outline: none;
      border-color: #000;
    }
  }
  button {
    width: 50%;
    height: 3rem;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    border: none;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

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
