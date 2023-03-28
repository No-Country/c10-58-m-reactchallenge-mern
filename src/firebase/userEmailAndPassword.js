import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from './client'
import { ERRORS_CREATING_USER, ERRORS_LOGGING_USER } from './errors'

const auth = firebaseAuth

export async function createUserWithEmail (user) {
  try {
    const { email, password } = user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    const errorCode = error.code
    throw new Error(ERRORS_CREATING_USER[errorCode])
  }
}

export async function signInWithEmail (user) {
  try {
    const { email, password } = user
    const userSignIn = await signInWithEmailAndPassword(auth, email, password)
    return userSignIn.user
  } catch (error) {
    const errorCode = error.code
    throw new Error(ERRORS_LOGGING_USER[errorCode])
  }
}
