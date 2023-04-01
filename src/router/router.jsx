/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Register from '../components/Register'
import SignIn from '../components/SignIn'
import Profile from '../pages/Profile'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/esteban" element={<Register />} />
        <Route path="/matias" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
