/* eslint-disable no-sequences */
/* eslint-disable comma-dangle */
import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { firebaseAuth } from '../firebase/client'

const FirebaseContext = createContext()
export const useFirebaseContext = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser)
      setLoading(true)
    })
    return () => unSubscribe()
  }, [])

  const logout = () => signOut(firebaseAuth)
  return (
    <FirebaseContext.Provider value={{ login, user, logout, loading }}>
      {children}
    </FirebaseContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FirebaseProvider
