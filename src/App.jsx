import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import BackArrow from './assets/svgs/arrowleft.svg'
import { MainContainer } from './components/MicroComponents/Containers'
import Navbar from './components/Navbar'

function App() {
  const navigate = useNavigate()

  function navigateBack() {
    navigate(-1)
  }
  const location = useLocation()
  const locationsNames = location.pathname.split('/')
  const isMain = locationsNames.includes('list')
  const showBackArrow =
    location.pathname === '/' ||
    location.pathname === '/profile' ||
    location.pathname === '/login'
  return (
    <MainContainer className="overflow-x-hidden" isMain={!isMain}>
      {!showBackArrow && (
        <button className="absolute top-4 left-4" onClick={navigateBack}>
          <img src={BackArrow} height={32} width={32} />
        </button>
      )}
      <Outlet />
      <Navbar />
    </MainContainer>
  )
}

export default App
