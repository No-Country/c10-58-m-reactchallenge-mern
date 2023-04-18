import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import App from '../App'
import List from '../pages/List'
import { Profile } from '../pages/Profile'
import Calendar from '../pages/Calendar'
import Emergency from '../pages/Emergency'
import ProfileDoc from '../pages/ProfileDoc'
import { getMedicData } from '../firebase/medics'
import { Appointments } from './../pages/Appointments'
import EditProfile from '../pages/EditProfile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/list',
        element: <List />
      },
      {
        path: '/list/:medicId',
        element: <ProfileDoc />,
        loader: async ({ params: { medicId } }) => {
          const data = await getMedicData({ medicId })
          return { medicId, data }
        }
      },
      {
        path: '/list/:medicId/calendar',
        element: <Calendar />,
        loader: async ({ params: { medicId } }) => {
          const data = await getMedicData({ medicId })
          return { medicId, data }
        }
      },
      {
        path: '/login',
        element: <SignIn />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/editProfile',
        element: <EditProfile />
      },
      {
        path: '/pastappointments',
        element: <Appointments title='Historial de citas' pastAppointments />
      },
      {
        path: '/appointments',
        element: <Appointments title='Mis citas' />
      },
      {
        path: '/emergency',
        element: <Emergency />
      }
      // {
      //   path: '/valentin',
      //   element: <TestingValentin />
      // }
    ]
  }
])
