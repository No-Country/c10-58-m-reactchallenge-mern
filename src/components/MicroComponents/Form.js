import styled from 'styled-components'

// components
export const Form = styled.form`

display: flex;
flex-direction: column;

  width: 100%;
  height: 100%;
  color: #000;
  padding: 2px;

  input {
    background-color: #f0f0f2;
    margin: 10px;

    width: 80%;
    height: 40px;
    border: 1px solid #ebeaec;
    border-radius: 20px;
    padding: 5px;
    color: #000;
    padding-left: 15px;
  }

  button {
    margin: 10px;
    width: 40%;
    border-radius: 25px;
    height: 45px;
    border: 1px solid #ebeaec;
    padding: 5px;
    background-color: #f0f0f2;
    color: black;

    &:hover {
      background-color: #ebeaec;
    }
    &:shadow {
      background-color: #ebeaec;
    }
  }

label {
 
  color: #000;
  
}
`
