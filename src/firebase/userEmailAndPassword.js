import { createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth'
import { firebaseAuth, db } from './client'
import { ERRORS_CREATING_USER, ERRORS_LOGGING_USER } from './errors'
import { doc, setDoc } from 'firebase/firestore'
import { getDefaultAvatar, uploadImage } from './storage'
import { validateForm } from '../utils/validateForm'
import { getCurrentUserInfo } from './user'

export async function createUserWithEmail (userDataForm) {
  validateForm(userDataForm)
  const { firstName, lastName, dni, email, terms, avatarImage, password } = userDataForm
  try {
    const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    let avatarURL
    if (!avatarImage) {
      avatarURL = await getDefaultAvatar()
    } else {
      avatarURL = uploadImage({ path: 'profileImages', image: avatarImage })
    }
    const newUserData = {
      avatarURL,
      firstName,
      lastName,
      dni: Number(dni),
      email,
      appointments: [],
      terms
    }
    if (newUser) {
      await setDoc(doc(db, 'users', newUser.user.uid), newUserData)
      return newUserData
    }
  } catch (error) {
    const errorCode = error.code
    throw new Error(ERRORS_CREATING_USER[errorCode])
  }
}

export async function signInWithEmail (user) {
  try {
    const { email, password } = user
    await signInWithEmailAndPassword(firebaseAuth, email, password)
    await setPersistence(firebaseAuth, browserSessionPersistence)
    const userFetched = await getCurrentUserInfo()
    console.log(userFetched)
    return userFetched
  } catch (error) {
    const errorCode = error.code
    throw new Error(ERRORS_LOGGING_USER[errorCode])
  }
}
