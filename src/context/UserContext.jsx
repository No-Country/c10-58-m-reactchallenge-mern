import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { firebaseAuth } from '../firebase/client'
import { signInWithEmail } from '../firebase/userEmailAndPassword'
import { getCurrentUserInfo, logOutUser } from '../firebase/user'

const FirebaseContext = createContext()
export const useFirebaseContext = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }) => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async (userCredentials) => {
    setLoading(true)
    try {
      const userLoggedIn = await signInWithEmail(userCredentials)
      setUser(userLoggedIn)
      setUserLoggedIn(true)
      setLoading(false)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      const userFetched = await getCurrentUserInfo()
      setUser(userFetched)
      setUserLoggedIn(user)
      setLoading(false)
    })

    return () => unsubscribe
  }, [])

  const logout = async () => {
    await logOutUser()
    setUser(null)
  }

  return (
    <FirebaseContext.Provider value={{ login, isUserLoggedIn, logout, loading, user }}>
      {children}
    </FirebaseContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default FirebaseProvider
