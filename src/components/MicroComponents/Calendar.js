import styled from 'styled-components'
import { COLORS } from './Colors'

export const CalendarDiv = styled.article`
display: flex;
gap:0.5rem;
text-align: center;
justify-content: center;
align-items: center;
height: 100%;
background-color: ${COLORS.white};
padding: 1rem;
border-radius: 10px;
`

export const CalendarCol = styled.div`
display: flex;
flex-direction: column;
gap:0.5rem;
color: ${COLORS.strongGreen};
`

export const CalendarDay = styled.p`
font-size: 1.125rem;
font-weight: 400;
`

export const CalendarButton = styled.button`
border: 1px solid ${COLORS.strongGreen};
background-color: ${COLORS.white};
border-radius: 6px;
filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));
letter-spacing: 0.1;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;
`

export const CalendarDisabled = styled.p`
background-color: ${COLORS.white};
border-radius: 6px;
letter-spacing: 0.1;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;
`

export const CalendarLabel = styled.label`
display: flex;
font-weight: 500;
align-items: center;
gap: 0.5rem;
background-color: ${COLORS.white};
padding: 0.5rem;
border-radius: 5px;
filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));


input{
  &:focus {
    outline: none;
  }
}
`

export const TitleDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 1rem;
`

export const MedicImg = styled.img`
border: 1px solid ${COLORS.strongGreen};
filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));

`
