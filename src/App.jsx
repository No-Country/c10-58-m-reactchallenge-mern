/* eslint-disable */
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useFirebaseContext } from './context/UserContext'
import Loader from './components/Loader'

function App() {
  const { loading } = useFirebaseContext()
  if (loading) return <Loader />
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
