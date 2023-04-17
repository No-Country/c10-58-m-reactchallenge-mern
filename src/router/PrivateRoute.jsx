import { Btn } from '../components/MicroComponents/Btn'
import { useFirebaseContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
  const { user } = useFirebaseContext()
  const navigate = useNavigate()
  if (!user) {
    return (
      <div>
        <h1>Debes iniciar sesión para ingresar a esta sección</h1>
        <Btn onClick={() => navigate('/login')}>Ingresar</Btn>
      </div>
    )
  }

  return children
}

export default PrivateRoute
