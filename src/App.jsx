/* eslint-disable */
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <main className='w-full min-h-screen'>
      <Outlet />
      <Header />
      <div className='h-[60px]'/>
    </main>
  )
}

export default App
