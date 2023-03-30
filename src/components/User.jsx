/* eslint-disable jsx-quotes */
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useFirebaseContext } from '../context/UserContext'
import { db } from '../firebase/client'

const User = () => {
  const { user } = useFirebaseContext()
  const [showUser, setShowUser] = useState(null)
  console.log(user)

  useEffect(() => {
    const queryColletion = collection(db, 'users')
    const queryFilter = query(queryColletion, where('email', '==', user.email))
    getDocs(queryFilter).then((res) =>
      res.docs.forEach((user) => setShowUser(user.data()))
    )
  }, [user.email])

  return (
    <div className="flex items-center">
      <img
        className="w-8 h-8 bg-slate-300 rounded-full"
        src={showUser.avatar}
        alt=""
      />
      <h4 className="inline">{showUser.firstName}</h4>
    </div>
  )
}

export default User
