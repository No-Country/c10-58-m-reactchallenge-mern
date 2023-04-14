import { useNavigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/UserContext'

const PrivateRoute = ({ children }) => {
  const { user } = useFirebaseContext()
  const navigate = useNavigate()

  if (!user) {
    navigate('/404')
  }
  return children
}

export default PrivateRoute
