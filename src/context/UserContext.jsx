import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { db } from '../firebase/client'
import { getDocs, collection, query, where } from 'firebase/firestore'

const FirebaseContext = createContext()
export const useFirebaseContext = () => useContext(FirebaseContext)
const email = 'valentingt22@gmail.com'

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const queryColletion = collection(db, 'users')
    const queryFilter = query(queryColletion, where('email', '==', email))
    getDocs(queryFilter).then((res) =>
      res.docs.forEach((user) => setUser(user.data()))
    )
  }, [email])

  return (
    <FirebaseContext.Provider value={user}>{children}</FirebaseContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default FirebaseProvider
