import styled from 'styled-components'
import { COLORS } from './Colors'

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Container = styled.div`
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 2rem;
padding:2rem;
`

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 2rem;
  padding: 2rem 0px 65px 0px;
  background-color: ${COLORS.teal};
`
