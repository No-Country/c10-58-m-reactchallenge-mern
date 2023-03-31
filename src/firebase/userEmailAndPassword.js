import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth, db } from './client'
import { ERRORS_CREATING_USER, ERRORS_LOGGING_USER } from './errors'
import { formatDateFirebase } from '../utils/formatDateFirebase'
import { doc, setDoc, Timestamp, getDoc } from 'firebase/firestore'
import { getDefaultAvatar, uploadImage } from './storage'
import { validateForm } from '../utils/validateForm'

export async function createUserWithEmail (userDataForm) {
  validateForm(userDataForm)
  const { firstName, lastName, dni, birthDate, city, email, terms, avatarImage, password } = userDataForm
  try {
    const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    let avatarURL
    if (!avatarImage) {
      avatarURL = await getDefaultAvatar()
    } else {
      avatarURL = uploadImage({ path: 'profileImages', image: avatarImage })
    }
    if (newUser) {
      const userInfo = await setDoc(doc(db, 'users', newUser.user.uid), {
        firstName,
        lastName,
        dni: Number(dni),
        birthDate: Timestamp.fromDate(new Date(formatDateFirebase(birthDate))),
        city,
        email,
        appointments: [],
        terms,
        avatarURL
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
