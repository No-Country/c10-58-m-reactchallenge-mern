import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import FirebaseProvider from './context/UserContext'
=======
import FirebaseProvider from './context/UserContext'
import App from './App'
>>>>>>> dev

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
<<<<<<< HEAD
      <RouterProvider router={router} />
=======
      <App />
>>>>>>> dev
    </FirebaseProvider>
  </React.StrictMode>
)
