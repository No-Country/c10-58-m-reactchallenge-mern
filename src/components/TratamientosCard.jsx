import styled from 'styled-components'
import { motion } from 'framer-motion'
import { COLORS } from './MicroComponents/Colors'

export const TratamientosCard = ({ src, terapia }) => {
  return (
    <TratamientosCardStyled>
      <Img src={src} alt={terapia} />
      <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {terapia}
      </span>
    </TratamientosCardStyled>
  )
}

const TratamientosCardStyled = styled.div`
position: relative;
filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));

`

export const Img = styled(motion.img)`
  width: 200px;
  height: 100px;
  min-height: auto;
  border-radius: 6px;
  background-size: cover;
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));
  filter: opacity(0.8);
  object-fit: cover;

  & + span {
    color: ${COLORS.white};
    text-shadow: 0px 0px 4px black;
    stroke: black;
    stroke-width: 1px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
  }
`
