import styled from 'styled-components'

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
width: 85%;
row-gap: 1rem;
align-items: center;

label {
    width: 100%;
    input {
      width: 100%;
      background-color: #ebebeb;
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
  }

  @media (min-width: 768px) {
      width: 35%;
    }
`
