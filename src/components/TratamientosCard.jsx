import styled from 'styled-components'
import { motion } from 'framer-motion'
import { COLORS } from './MicroComponents/Colors'

export const TratamientosCard = ({ src, terapia }) => {
  return (
    <div className="relative">
      <Img src={src} alt={terapia} />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {terapia}
      </span>
    </div>
  )
}

export const Img = styled(motion.img)`
  width: 200px;
  height: 100px;
  min-height: auto;
  border-radius: 6px;
  background-size: cover;
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));
  filter: blur(0.7px);

  & + span {
    color: ${COLORS.white};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    filter: drop-shadow(0px 6px 15px rgba(0, 0, 0, 0.8));
  }
`
