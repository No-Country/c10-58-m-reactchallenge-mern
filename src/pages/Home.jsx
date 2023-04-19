/* eslint-disable */
/* eslint-disable jsx-quotes */
import { useRef, useState } from 'react'
// import Footer from './Footer'
import { motion } from 'framer-motion'
import { IoSearchOutline, IoWarningOutline } from 'react-icons/io5'
import Logo from '../../public/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'

const Home = () => {
  const [show, setShow] = useState(true)
  const [faqState, setFaqState] = useState({})
  const navigate = useNavigate()
  function toggleFaq(id) {
    setFaqState({
      ...faqState,
      [id]: !faqState[id],
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
      id: 1,
    },
    {
      option: '¿Qué tipo de especialistas están disponibles?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 2,
    },
    {
      option: '¿Cómo se llevan a cabo las consultas virtuales y presenciales?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 3,
    },
    {
      option: '¿Cuál es el costo de la consulta?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 4,
    },
    {
      option: '¿Cuál es el tiempo de la consulta?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 5,
    },
    {
      option: '¿Cómo obtengo un horario?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dui eget eros varius, in vestibulum dolor auctor. Suspendisse vitae enim sed lorem eleifend laoreet. Aliquam vitae massa euismod, gravida nisi a, tempor nibh. Suspendisse potenti. Sed quis felis ac leo bibendum faucibus. Nam in mi non justo aliquam pulvinar. Integer ac neque vel purus vehicula bibendum.',
      id: 6,
    },
  ]

  return (
    <>
      <main className="w-full  overflow-x-hidden ">
        <section className="flex items-center flex-col gap-5 relative">
          <div className="w-full h-[120px]  mt-[60px] flex justify-center items-center">
            <img className="w-full h-full ml-10" src={Logo} alt="" />
          </div>
          <div
            className={`w-[150px] h-[38px] self-start ml-5 mr-10 text-xs flex justify-center items-center gap-3 bg-[#ebebeb] rounded-full ${
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
          <span
            className=" absolute right-8 bottom-0 mb-2 opacity-60 hover:opacity-100"
            onClick={() => allMedics(false)}
          >
            <IoSearchOutline size={20} />
          </span>
        </section>

        {show ? (
          <section className="w-full h-full">
            <div className="w-full h-full flex justify-between items-center ">
              <h3 className="text-black word-break w-44 my-10 ml-10 ">
                Tipos de tratamientos psicológicos
              </h3>
              <span
                className="opacity-60 italic mr-4 cursor-pointer underline underline-offset-3"
                onClick={() => allMedics(true)}
              >
                ver todos
              </span>
            </div>
            <div className="flex items-center flex-col">
              <motion.div style={slider} ref={positionSlider}>
                <motion.div
                  style={inner}
                  drag="x"
                  dragConstraints={{
                    right: 530,
                    left: -530,
                  }}
                  initial={{ x: 0 }}
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
        ) : (
          <>
            <h2 className="w-48 text-center text-[20px] m-auto mt-10">
              De momento no tenemos servicios presenciales
            </h2>
            <span className="w-full ">
              <IoWarningOutline className="m-auto mb-10 mt-2" size={50} />
            </span>
          </>
        )}
        <section className="mt-5 text-center">
          <h3>¿Cómo funciona?</h3>

          <div className="flex justify-center mt-5 gap-5 flex-wrap">
            {faq.map((question) => (
              <div
                key={question.id}
                className="text-center bg-slate-300 justify-center p-2 w-full mx-7 flex flex-col gap-3 items-center rounded-md cursor-pointer"
                onClick={() => toggleFaq(question.id)}
              >
                <p>{question.option}</p>
                {faqState[question.id] && (
                  <p className="px-2 pb-5">{question.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}
export default Home
