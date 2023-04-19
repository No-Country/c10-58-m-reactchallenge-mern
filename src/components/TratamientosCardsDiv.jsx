import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const TratamientosCard = styled(motion.div)`
display: flex;
gap: 18px;
`

export const TratamientosCardsDiv = ({ children }) => {
  return (
    <TratamientosCard
      drag='x'
      dragConstraints={{
        right: 550,
        left: -550
      }}
      initial={{ x: 0 }}
      animate={{ x: 600 }}
      transition={{ duratioon: 0.6 }}
    >{children}
    </TratamientosCard>
  )
}
