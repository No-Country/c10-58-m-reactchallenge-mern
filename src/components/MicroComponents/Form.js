import styled from 'styled-components'
import { COLORS } from './Colors'

// components
// form for the login page mobile
export const Form = styled.form`
margin: 0px auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  button[type=submit] {
    margin-top: 2rem;
    width:100%;
  }

  label {
    font-weight: 500;
    color: ${COLORS.strongGreen};
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      width: 100%;
      background-color: ${COLORS.white};
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

    @media (min-width: 768px) {
      width: 400px;
    }
  }

`
