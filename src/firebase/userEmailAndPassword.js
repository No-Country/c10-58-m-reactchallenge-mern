import { createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth'
import { firebaseAuth, db } from './client'
import { ERRORS_CREATING_USER, ERRORS_LOGGING_USER } from './errors'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { getDefaultAvatar, uploadImage } from './storage'
import { validateForm } from '../utils/validateForm'

export async function createUserWithEmail (userDataForm) {
  validateForm(userDataForm)
  const { names, lastName, dni, email, terms, avatarImage, password } = userDataForm
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
      names,
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
    await setPersistence(firebaseAuth, browserSessionPersistence)
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
