/* eslint-disable */
/* eslint-disable jsx-quotes */
import { useRef, useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'
// import Footer from './Footer'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { Search } from '../components/MicroComponents/Search'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [show, setShow] = useState(true)
  const navigate = useNavigate()

  const slider = {
    cursor: 'grab',
  }
  const inner = {
    display: 'flex',
    gap: '8px',
  }
  const item = {
    width: '150px',
    height: '80px',
    background: '#ccc',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const positionSlider = useRef()

  const tiposDeTerapias = [
    'Psicología online',
    'Terapia familiar',
    'Terapia de pareja',
    'Depresión',
    'Ansiedad',
    'Celos',
    'Autoestima',
    'Drogadicción',
    'Orientación profesional',
  ]
  const faq = [
    {
      option: '¿Cómo buscar un profesional?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    },
    {
      option: '¿Qué tipo de especialistas están disponibles?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    },
    {
      option:
        '¿¿Cómo se llevan a cabo las consultas virtuales y presenciales en su sitio web??',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    },
    {
      option: '¿Cuál es el costo de la consulta?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    },
    {
      option: '¿Cuál es el tiempo de la consulta?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    },
    {
      option: '¿Cómo obtengo un horario?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
    },
  ]

  function goToMedics() {
    navigate('/list')
  }
  const { loading, logout } = useFirebaseContext()

  if (loading) return <h1>Cargando...</h1>
  return (
    <>
      <main className="w-full  overflow-x-hidden ">
        <section className="flex items-center flex-col gap-5">
          <div className="w-[200px] h-[120px] bg-slate-200 mt-[80px] flex justify-center items-center">
            <img src="" alt="" />
          </div>
          <div>
            <label className="relative block">
              <Search
                placeholder="Servicio"
                type="text"
                name="search"
                $width
                $height
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <img src="./icon.svg" alt="search icon" />
              </span>
            </label>
          </div>
          <div
            className={`w-[150px] h-[38px] self-start mx-10 text-xs flex justify-center items-center gap-3 bg-[#ebebeb] rounded-full ${
              show ? 'pr-2' : 'pl-2'
            }`}
          >
            <motion.span
              style={{
                backgroundColor: show ? '#d7d7d7' : 'transparent',
                padding: show && '.5rem .75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                boxShadow: show ? '0px 2px 2px rgba(0,0,0, .25)' : 'none',
                transition: 'background 0.3s ease-in-out',
              }}
              className="rounded-full"
              onClick={() => setShow(true)}
            >
              En línea
            </motion.span>
            <motion.span
              style={{
                backgroundColor: show ? 'transparent' : '#d7d7d7',
                padding: !show && '.5rem .75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                boxShadow: show ? 'none' : '0px 2px 2px rgba(0,0,0, .25)',
                transition: 'background 0.3s ease-in-out',
              }}
              className="rounded-full"
              onClick={() => setShow(false)}
            >
              Presencial
            </motion.span>
          </div>
        </section>
        <section>
          <h3 className="text-black my-5 text-center m-auto w-44">
            Tipos de tratamientos psicológicos
          </h3>
          <div className="flex items-center flex-col">
            <motion.div style={slider} ref={positionSlider}>
              <motion.div
                style={inner}
                drag="x"
                dragConstraints={{
                  right: 550,
                  left: -550,
                }}
                initial={{ x: 100 }}
                animate={{ x: 550 }}
                transition={{ duratioon: 0.6 }}
              >
                {tiposDeTerapias.map((terapia, i) => (
                  <motion.div style={item} key={i}>
                    <span className="w-[100px] break-word text-center">
                      {terapia}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="mt-5 text-center">
          <h3>¿Cómo funciona?</h3>
          <div className="flex justify-center mt-5 gap-5 flex-wrap">
            {faq.map((question, i) => (
              <div
                key={i}
                className="text-center bg-slate-300 justify-center p-2 w-1/6 flex items-center rounded-md"
              >
                {question.option}
              </div>
            ))}
          </div>
        </section>
        <button
          className="ml-5 bg-[#35d3ff] text-black rounded-md p-2 w-[150px] mt-5"
          type="button"
          onClick={logout}
        >
          Logout
        </button>
      </main>
      {/* <Footer /> */}
    </>
  )
}
export default Home
