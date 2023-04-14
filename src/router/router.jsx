/* eslint-disable */
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import App from '../App'
import List from '../pages/List'
import Profile from '../pages/Profile'
import Calendar from '../pages/Calendar'
import Emergency from '../pages/Emergency'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/list',
        element: <List />,
      },
      {
        path: '/list/:id',
        element: <h1>Perfil Médico</h1>,
      },
      {
        path: '/list/:id/calendar',
        element: (
          <PrivateRoute>
            <Calendar />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/emergency',
        element: (
          <PrivateRoute>
            <Emergency />
          </PrivateRoute>
        ),
      },
    ],
  },
])
