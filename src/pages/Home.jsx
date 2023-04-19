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

const Home = () => {
  const [toggle, setToggle] = useState(true)
  const navigate = useNavigate()

  function handleToggle () {
    setToggle(prevState => !prevState)
    console.log('Hola')
  }

  const slider = {
    cursor: 'grab'
  }

  const { loading } = useFirebaseContext()
  const tiposDeTerapias = [
    'Psicología online',
    'Terapia familiar',
    'Terapia de pareja',
    'Depresión',
    'Ansiedad',
    'Celos',
    'Autoestima',
    'Drogadicción',
    'Orientación profesional'
  ]
  const faq = [
    'Busca un profesional',
    'Elige un profesional',
    'Elige horario de tu cita',
    'Ten el cuidado que mereces',
    'Califica el servicio'
  ]

  function goToMedics () {
    navigate('/list')
  }

  if (loading) return (<SpinnerComponent />)
  return (
    <>
      <Header />
      <div className='w-full  overflow-x-hidden '>
        <section className='flex items-center flex-col gap-5'>
          <div className='w-[200px] h-[120px] bg-slate-200 mt-[80px] flex justify-center items-center'>
            <img src='' alt='' />
          </div>
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
        <section>
          <h3 className='text-black my-5 text-center m-auto w-44'>
            Tipos de tratamientos psicológicos
          </h3>
          <div className='flex items-center flex-col'>
            <motion.div style={slider}>
              <TratamientosCardsDiv>
                {tiposDeTerapias.map((terapia, i) => (
                  <TratamientosCard key={i}>
                    {terapia}
                  </TratamientosCard>
                ))}
              </TratamientosCardsDiv>
            </motion.div>
          </div>
        </section>
        <section className='mt-5 text-center'>
          <h3>¿Cómo funciona?</h3>
          <div className='flex justify-center mt-5 gap-5 flex-wrap'>
            {faq.map((question, i) => (
              <div
                key={i}
                className='text-center bg-slate-300 justify-center p-2 w-1/6 flex items-center rounded-md'
                onClick={goToMedics}
              >
                {question}
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  )
}
export default Home
