/* eslint-disable no-sequences */
/* eslint-disable comma-dangle */
/*eslint-disable*/
import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { firebaseAuth } from '../firebase/client'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/client'
import { getCurrentUserInfo } from '../firebase/user'

const FirebaseContext = createContext()
export const useFirebaseContext = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  console.log(user)

  const login = async (userCredentials) => {
    setLoading(true)
    const userLoggedIn = await signInWithEmail(userCredentials)
    setUser(userLoggedIn)
    setLoading(false)
    return userLoggedIn
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(
      firebaseAuth,
      async (currentUser) => {
        setLoading(true)
        if (currentUser) {
          const userInfo = await getCurrentUserInfo()
          setUser(userInfo)
        } else {
          setUser(null)
        }
        setLoading(false)
      }
    )
    return () => unSubscribe()
  }, [])

  return (
    <FirebaseContext.Provider value={{ login, user, loading, setUser }}>
      {children}
    </FirebaseContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FirebaseProvider
