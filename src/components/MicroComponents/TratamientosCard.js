import styled from 'styled-components'
import { motion } from 'framer-motion'
import { COLORS } from './Colors'

export const TratamientosCard = styled(motion.span)`
  width: 150px;
  height: 100px;
  min-height: auto;
  background-color: ${COLORS.strongGreen} ;
  color: ${COLORS.teal};
  border-radius: 6px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));
`
