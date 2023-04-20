import SpinnerImage from '../../assets/svgs/loadingSpinner.svg'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.img`
align-self: center;
  animation: ${rotate} 1s linear infinite;
  height: 200px;
  width: 200px;
  padding: 2rem 1rem;
  font-size: 1rem;
`

export const SpinnerComponent = () => {
  return (
    <Rotate src={SpinnerImage} />
  )
}
