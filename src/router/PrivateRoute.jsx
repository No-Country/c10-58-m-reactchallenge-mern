import { useFirebaseContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
  const { user } = useFirebaseContext()
  const navigate = useNavigate()
  if (!user) {
    return (
      <div>
        <h1>Debes iniciar sesión para ingresar a esta sección</h1>
        <button onClick={() => navigate('/login')}>Ingresar</button>
      </div>
    )
  }

  return children
}

export default PrivateRoute
