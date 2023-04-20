import { useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'
// import Footer from './Footer'
import Header from '../components/Header'
import { Search } from '../components/MicroComponents/Search'
import { SpinnerComponent } from '../components/MicroComponents/Spinner'
import { TogglePillButton } from '../components/TogglePill'
import { TogglePillDiv } from '../components/MicroComponents/TogglePillDiv'
import escuchaderoLogo from '../../public/logo.svg'
import { MainDivText, MainDivTitle, PageTitle } from './../components/MicroComponents/Text'
import { Faq } from '../components/FAQ'
import { TratamientosPresencial } from '../components/TratamientosPresencial'
import { TratamientosOnline } from '../components/TratamientosOnline'

const Home = () => {
  const { loading } = useFirebaseContext()
  const [toggle, setToggle] = useState(true)

  function handleToggle () {
    setToggle(prevState => !prevState)
  }

  if (loading) return (<SpinnerComponent />)
  return (
    <div className='overflow-x-hidden w-full flex flex-col gap-6'>
      <Header />
      <section className='flex items-center flex-col gap-5'>
        <img src={escuchaderoLogo} alt='logo escuchadero' />
        <div className='flex flex-col'>
          <PageTitle>Escuchadero</PageTitle>
          <MainDivText>Estamos aca para vos</MainDivText>
        </div>
        <label className='relative flex items-center gap-4'>
          <Search
            placeholder='Busca un servicio'
            type='text'
            name='search'
          />
          <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <img src='./icon.svg' alt='search icon' />
          </span>
        </label>
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
