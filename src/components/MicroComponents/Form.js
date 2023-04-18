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
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    column-gap: 4rem;
  }

`
