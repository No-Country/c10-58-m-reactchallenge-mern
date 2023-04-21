import styled from 'styled-components'
import { COLORS } from './Colors'

export const PageTitle = styled.h1`
  margin: 20px 0px 0px;
  font-weight: 700;
  color: ${COLORS.strongGreen};
  font-size: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

export const MainDivTitle = styled.h2`
  font-weight: 700;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  color: ${COLORS.strongGreen};
  @media (min-width: 768px) {
    width: auto;
    text-align: left;
    padding-left: 4rem;
  }
`

export const MainDivText = styled.p`
margin: 0px;
font-weight: 500;
font-size: 1.1rem;
color: ${COLORS.strongGreen};
text-align: center;

@media (min-width: 768px) {
  font-size: 1.3rem;
}
`

export const ErrorText = styled.p`
  color: #800020;
  font-weight: 600;
  font-size: 1.1rem;
`
