import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth, db } from './client'
import { ERRORS_CREATING_USER, ERRORS_LOGGING_USER } from './errors'
import { formatDateFirebase } from '../utils/formatDateFirebase'
import { doc, setDoc, Timestamp } from 'firebase/firestore'

export async function createUserWithEmail (userDataForm) {
  try {
    const { firstName, lastName, dni, birthDate, city, email, password, terms } = userDataForm
    const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    console.log('newUser:', newUser)
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
        terms
      })
      console.log('userInfo:', userInfo)
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
    return userSignIn.user
  } catch (error) {
    const errorCode = error.code
    throw new Error(ERRORS_LOGGING_USER[errorCode])
  }
}
