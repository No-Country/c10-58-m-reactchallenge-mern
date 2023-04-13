/* eslint-disable */
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <main className='w-full'>
      <Outlet />
      <Header />
    </main>
  )
}

export default App
