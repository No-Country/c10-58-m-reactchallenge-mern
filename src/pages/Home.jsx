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

const Home = () => {
  const { loading } = useFirebaseContext()
  const [toggle, setToggle] = useState(true)
  const [faqState, setFaqState] = useState({})
  const navigate = useNavigate()
  function toggleFaq (id) {
    setFaqState({
      ...faqState,
      [id]: !faqState[id]
    })
  }
  const { setShowAllMedics } = useFirebaseContext()

  const allMedics = (value) => {
    if (value) {
      setShowAllMedics(true)
      navigate('/list')
    } else {
      setShowAllMedics(false)
      navigate('/list')
    }
  }

  function handleToggle () {
    setToggle(prevState => !prevState)
    console.log('Hola')
  }

  const slider = {
    cursor: 'grab'
  }

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
    {
      option: '¿Cómo buscar un profesional?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 1
    },
    {
      option: '¿Qué tipo de especialistas están disponibles?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 2
    },
    {
      option: '¿Cómo se llevan a cabo las consultas virtuales y presenciales?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 3
    },
    {
      option: '¿Cuál es el costo de la consulta?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 4
    },
    {
      option: '¿Cuál es el tiempo de la consulta?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 5
    },
    {
      option: '¿Cómo obtengo un horario?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 6
    }
  ]

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
        </section>
        {toggle
          ? (
            <section className='w-full h-full'>
              <div className='w-full h-full flex justify-between items-center '>
                <h3 className='text-black word-break w-44 my-10 ml-10 '>
                  Tipos de tratamientos psicológicos
                </h3>
                <span
                  className='opacity-60 italic mr-4 cursor-pointer underline underline-offset-3'
                  onClick={() => allMedics(true)}
                >
                  ver todos
                </span>
              </div>
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
            )
          : (
            <>
              <h2 className='w-48 text-center text-[20px] m-auto mt-10'>
                De momento no tenemos servicios presenciales
              </h2>
              <span className='w-full '>
                <IoWarningOutline className='m-auto mb-10 mt-2' size={50} />
              </span>
            </>
            )}
        <section className='mt-5 text-center'>
          <h3>¿Cómo funciona?</h3>

          <div className='flex justify-center mt-5 gap-5 flex-wrap'>
            {faq.map((question) => (
              <div
                key={question.id}
                className='text-center bg-slate-300 justify-center p-2 w-full mx-7 flex flex-col gap-3 items-center rounded-md cursor-pointer'
                onClick={() => toggleFaq(question.id)}
              >
                <p>{question.option}</p>
                {faqState[question.id] && (
                  <p className='px-2 pb-5'>{question.description}</p>
                )}
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
