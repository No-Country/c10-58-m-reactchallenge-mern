import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import App from '../App'
import List from '../pages/List'
import Profile from '../pages/Profile'
import Calendar from '../pages/Calendar'
import Emergency from '../pages/Emergency'
import { TestingValentin } from '../firebase/testValentin'
import ProfileDoc from '../pages/ProfileDoc'
import { getMedicData } from '../firebase/medics'
//import { Appointments } from '../pages/Appointments'

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
     // {
     //   path: '/profile/appointments',
     //   element: <Appointments />
     // },
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
