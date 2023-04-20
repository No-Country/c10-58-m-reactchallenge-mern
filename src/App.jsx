import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import BackArrow from './assets/svgs/arrowleft.svg'
import { MainContainer } from './components/MicroComponents/Containers'

function App() {
  const navigate = useNavigate()

  function navigateBack() {
    navigate(-1)
  }
  const location = useLocation()
  const locationsNames = location.pathname.split('/')
  const isMain = locationsNames.includes('list')
  const showBackArrow =
    location.pathname === '/' || location.pathname === '/profile'
  return (
    <MainContainer className="overflow-x-hidden" isMain={!isMain}>
      {!showBackArrow && (
        <button className="absolute top-4 left-4" onClick={navigateBack}>
          <img src={BackArrow} height={32} width={32} />
        </button>
      )}
      <Outlet />
      <Header />
    </MainContainer>
  )
}

export default App
