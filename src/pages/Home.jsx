/* eslint-disable */
/* eslint-disable jsx-quotes */
import { useRef, useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'
// import Footer from './Footer'
import Header from '../components/Header'
import {  motion } from 'framer-motion'
import { Search } from '../components/MicroComponents/Search'


const Home = () => {
  const [show, setShow] = useState(true)

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
    'Orientación profesional',
  ]
  const faq = [
    'Busca un profesional',
    'Elige un profesional',
    'Elige horario de tu cita',
    'Ten el cuidado que mereces',
    'Califica el servicio',
  ]

  if (!loading) return <h1>Cargando...</h1>
  return (
    <>
      <Header />
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
                style={{
                  width: '80px',
                  height: '100px',
                  display: 'flex',
                  borderRadius: '5px',
                  padding: '4px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#d7d7d7',
                }}
              >
                <span> {question} </span>
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
