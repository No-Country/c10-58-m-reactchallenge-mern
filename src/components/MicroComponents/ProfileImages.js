import styled from 'styled-components'
import { COLORS } from './Colors'

export const ProfileImg = styled.img`
  border-radius: 15px;
  border: 2px solid ${COLORS.strongGreen};
  color:#f6f6f6;
  width: 100px;
  height: 100px;
  border-radius: 9999px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const MedicProfileImg = styled.img`
height: 4rem;
width:4rem;
border-radius: 9999px;
object-fit: cover;
align-self: flex-start;
`
