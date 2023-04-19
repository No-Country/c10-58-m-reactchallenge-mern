import { useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'
// import Footer from './Footer'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { Search } from '../components/MicroComponents/Search'
import { useNavigate } from 'react-router-dom'
import { TratamientosCard } from '../components/MicroComponents/TratamientosCard'
import { TratamientosCardsDiv } from '../components/TratamientosCardsDiv'
import { SpinnerComponent } from '../components/MicroComponents/Spinner'
import { TogglePillButton } from '../components/TogglePill'
import { TogglePillDiv } from '../components/MicroComponents/TogglePillDiv'
import { IoWarningOutline } from 'react-icons/io5'
import escuchaderoLogo from '../../public/logo.svg'
import { MainDivTitle, PageTitle } from './../components/MicroComponents/Text'
import { Faq } from '../components/FAQ'
import { TratamientosPresencial } from '../components/TratamientosPresencial'
import { TratamientosOnline } from '../components/TratamientosOnline'

const Home = () => {
  const { loading } = useFirebaseContext()
  const [toggle, setToggle] = useState(true)

  function handleToggle () {
    setToggle(prevState => !prevState)
    console.log('Hola')
  }

  if (loading) return (<SpinnerComponent />)
  return (
    <div className='overflow-x-hidden w-full flex flex-col gap-6'>
      <Header />
      <section className='flex items-center flex-col gap-5'>
        <img src={escuchaderoLogo} alt='logo escuchadero' />
        <PageTitle>Escuchadero</PageTitle>
        <div>
          <label className='relative block'>
            <Search
              placeholder='Servicio'
              type='text'
              name='search'
              $width
              $height
            />
            <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
              <img src='./icon.svg' alt='search icon' />
            </span>
          </label>
        </div>
        <TogglePillDiv onClick={handleToggle}>
          <TogglePillButton
            show={toggle}
          >
            En línea
          </TogglePillButton>
          <TogglePillButton
            show={!toggle}
          >
            Presencial
          </TogglePillButton>
        </TogglePillDiv>
      </section>
      <MainDivTitle>
        Tipos de tratamientos psicológicos
      </MainDivTitle>
      {toggle
        ? (
          <TratamientosOnline />
          )
        : (
          <TratamientosPresencial />
          )}
      <MainDivTitle>¿Cómo funciona?</MainDivTitle>
      <Faq />
    </div>
  )
}
export default Home
