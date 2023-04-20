import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'
import { SpinnerComponent } from '../components/MicroComponents/Spinner'
import { TogglePillButton } from '../components/TogglePill'
import { TogglePillDiv } from '../components/MicroComponents/TogglePillDiv'
import escuchaderoLogo from '../../public/logo.svg'
import {
  MainDivText,
  MainDivTitle,
  PageTitle,
} from './../components/MicroComponents/Text'
import { Faq } from '../components/FAQ'
import { TratamientosPresencial } from '../components/TratamientosPresencial'
import { TratamientosOnline } from '../components/TratamientosOnline'

const Home = () => {
  const { loading } = useFirebaseContext()
  const [toggle, setToggle] = useState(true)
  const navigate = useNavigate()

  function handleToggle() {
    setToggle((prevState) => !prevState)
  }

  if (loading) return <SpinnerComponent />
  return (
    <div className="overflow-x-hidden w-full flex flex-col gap-6">
      <section className="relative">
        <div className="flex items-center flex-col gap-5">
          <img src={escuchaderoLogo} alt="logo escuchadero" />
          <div className="flex flex-col">
            <PageTitle>Escuchadero</PageTitle>
            <MainDivText>Estamos aca para vos</MainDivText>
          </div>
          <TogglePillDiv onClick={handleToggle}>
            <TogglePillButton show={toggle}>En línea</TogglePillButton>
            <TogglePillButton show={!toggle}>Presencial</TogglePillButton>
          </TogglePillDiv>
        </div>
        <span
          onClick={() => navigate('/list')}
          className="absolute bottom-3 right-5 flex items-center pr-3"
        >
          <img src="./icon.svg" alt="search icon" />
        </span>
      </section>
      <MainDivTitle>Tipos de tratamientos psicológicos</MainDivTitle>
      {toggle ? <TratamientosOnline /> : <TratamientosPresencial />}
      <MainDivTitle>¿Cómo funciona?</MainDivTitle>
      <Faq />
    </div>
  )
}
export default Home
