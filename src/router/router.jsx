/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Register from '../components/Register'
import SignIn from '../components/SignIn'
import CardContainer from '../components/CardContainer'
import HomeTemp from '../components/HomeTemp'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/esteban" element={<Register />} />
        <Route path="/matias" element={<Home />} />
        <Route path="/card" element={<CardContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
