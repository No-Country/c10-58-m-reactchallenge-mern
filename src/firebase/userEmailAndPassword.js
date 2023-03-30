import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth, db } from './client'
import { ERRORS_CREATING_USER, ERRORS_LOGGING_USER } from './errors'
import { formatDateFirebase } from '../utils/formatDateFirebase'
import { doc, setDoc, Timestamp, getDoc } from 'firebase/firestore'
import { getDefaultAvatar } from './storage'

export async function createUserWithEmail (userDataForm) {
  try {
    const { firstName, lastName, dni, birthDate, city, email, password, terms } = userDataForm
    const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    const avatar = await getDefaultAvatar()
    if (newUser) {
      const userInfo = await setDoc(doc(db, 'users', newUser.user.uid), {
        firstName,
        lastName,
        dni: Number(dni),
        birthDate: Timestamp.fromDate(new Date(formatDateFirebase(birthDate))),
        city,
        email,
        appointments: [],
        password,
        terms,
        avatar
      })
      return userInfo
    }
  } catch (error) {
    const errorCode = error.code
    throw new Error(ERRORS_CREATING_USER[errorCode])
  }
}

export async function signInWithEmail (user) {
  try {
    const { email, password } = user
    const userSignIn = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const { uid } = userSignIn.user
    const docSnapshot = await getDoc(doc(db, 'users', uid))
    console.log(docSnapshot.data())
    const userData = docSnapshot.data()
    return userData
  } catch (error) {
    const errorCode = error.code
    throw new Error(ERRORS_LOGGING_USER[errorCode])
  }
}
