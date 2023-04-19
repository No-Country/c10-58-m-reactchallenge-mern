import styled from 'styled-components'
import { COLORS } from './Colors'

export const PageTitle = styled.h1`
font-weight: 700;
color: ${COLORS.strongGreen};
font-size: 3rem;
text-align: center;

@media (min-width: 768px) {
  font-size: 4rem;
}
`

export const MainDivTitle = styled.h2`
font-weight: 700;
font-size: 1.4rem;
padding-left: 2rem;
color: ${COLORS.strongGreen};

@media (min-width: 768px) {
  padding-left: 4rem;
}

`

export const MainDivText = styled.p`
font-weight: 500;
font-size: 1.3rem;
color: ${COLORS.strongGreen};
text-align: center;
`
