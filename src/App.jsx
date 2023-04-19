/* eslint-disable */
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import {ReactComponent as BackArrow} from './assets/svgs/arrowleft.svg'
import { MainContainer } from './components/MicroComponents/Containers'

function App() {
  const navigate = useNavigate()

  function navigateBack () {
    navigate(-1)
  }
  const location = useLocation()

  return (
    <MainContainer>
      {location.pathname !== '/' &&<button className='absolute top-4 left-4' onClick={navigateBack}><BackArrow height={32} width={32}/></button>}
      <Outlet />
      <Header />
    </MainContainer>
  )
}

export default App
