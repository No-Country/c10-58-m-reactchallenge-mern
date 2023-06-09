import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/client'
import { signInWithEmail } from '../firebase/userEmailAndPassword'
import { getCurrentUserInfo, logOutUser } from '../firebase/user'

const FirebaseContext = createContext()
export const useFirebaseContext = () => useContext(FirebaseContext)

const FirebaseProvider = ({ children }) => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async (userCredentials) => {
    setLoading(true)
    try {
      const userLoggedIn = await signInWithEmail(userCredentials)
      setUser(userLoggedIn)
      setUserLoggedIn(true)
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setUserLoggedIn(false)
    setLoading(true)
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      try {
        const userFetched = await getCurrentUserInfo()
        setUser(userFetched)
      } catch (error) {
        setUserLoggedIn(false)
        console.log(error)
      } finally {
        setUserLoggedIn(user)
        setLoading(false)
      }
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
