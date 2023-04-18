/* eslint-disable */
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import {ReactComponent as BackArrow} from './assets/svgs/arrowleft.svg'

function App() {
  const navigate = useNavigate()

  function navigateBack () {
    navigate(-1)
  }

  return (
    <main className='w-screen min-h-screen flex flex-col justify-center pb-[50px]'>
      <button className='absolute top-4 left-4' onClick={navigateBack}><BackArrow height={32} width={32}/></button>
      <Outlet />
      <Header />
    </main>
  )
}

export default App
