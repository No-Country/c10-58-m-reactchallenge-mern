import { doc, getDoc, getDocs, where, query, setDoc, deleteDoc, Timestamp, collectionGroup, orderBy, limit } from 'firebase/firestore'
import { signOut, updatePassword } from 'firebase/auth'
import { db, firebaseAuth } from './client'
import { uploadImage } from './storage'
import { getAppointmentData } from './appointment'

export async function updateProfileImage ({ image }) {
  const { uid } = firebaseAuth.currentUser
  try {
    const userToUpdate = await getDoc(doc(db, 'users', uid))
    const userData = userToUpdate.data()
    const imageUpdated = await uploadImage({ path: 'profileImage', image })
    const updatedUser = { ...userData, avatarURL: imageUpdated }
    await setDoc(doc(db, 'users', uid), updatedUser)
    return updatedUser
  } catch (error) {
    console.error(error)
  }
}

export async function updateUserInfo (userDataForm) {
  const { uid } = firebaseAuth.currentUser
  try {
    const userToUpdate = await getDoc(doc(db, 'users', uid))
    const userData = userToUpdate.data()
    const updatedUser = { ...userData, ...userDataForm }
    await setDoc(doc(db, 'users', uid), updatedUser)
  } catch (error) {
    throw new Error(error)
  }
}

export async function changeUserPassword (newPassword, confirmedPassword) {
  const currentUser = firebaseAuth.currentUser
  if (newPassword === confirmedPassword) {
    try {
      await updatePassword(currentUser, newPassword)
      return 'La contraseña fue actualizada'
    } catch (error) {
      const { code, message } = error
      throw new Error(`${code}: ${message}`)
    }
  } else {
    throw new Error('Las contraseñas deben ser iguales')
  }
}

export async function getCurrentUserInfo () {
  if (firebaseAuth.currentUser === null) {
    return null
  }
  const currentUser = firebaseAuth.currentUser
  const { uid } = currentUser
  try {
    const user = await getDoc(doc(db, 'users', uid))
    const userData = user.data()
    return userData
  } catch (error) {
    throw new Error(error)
  }
}

export async function deleteUser () {
  const currentUser = firebaseAuth.currentUser
  const { uid } = currentUser
  console.log(currentUser)
  try {
    await deleteDoc(doc(db, 'users', uid))
    return currentUser.delete
  } catch (error) {
    const { code, message } = error
    throw new Error(`${code}: ${message}`)
  }
}

export async function logOutUser () {
  return signOut(firebaseAuth)
}

export async function getUserData ({ userId }) {
  try {
    const userRef = doc(db, 'users', userId)
    const userDoc = await getDoc(userRef)
    const userData = userDoc.data()
    return userData
  } catch (error) {
    throw new Error(error)
  }
}

export async function getPastAppointments () {
  try {
    const { uid } = firebaseAuth.currentUser
    const dateNow = Date.now()
    const todaySecs = new Timestamp(dateNow / 1000, 0)
    const appointmentsCollection = collectionGroup(db, 'appointments')
    const query1 = query(appointmentsCollection, where('userId', '==', uid), where('date', '<=', todaySecs), orderBy('date'))
    const snapshot = await getDocs(query1)
    const appointmentsIdArray = []
    snapshot.forEach(appointment => appointmentsIdArray.push(appointment.id))
    const appointmentsDataPromiseArray = await Promise.all(appointmentsIdArray.map(appointmentId => getAppointmentData({ appointmentId })))
    return appointmentsDataPromiseArray
  } catch (error) {
    throw new Error(error)
  }
}

export async function getFutureAppointments () {
  try {
    const { uid } = firebaseAuth.currentUser
    const dateNow = Date.now()
    const todaySecs = new Timestamp(dateNow / 1000, 0)
    const appointmentsCollection = collectionGroup(db, 'appointments')
    const query1 = query(appointmentsCollection, where('userId', '==', uid), where('date', '>=', todaySecs), orderBy('date'))
    const snapshot = await getDocs(query1)
    const appointmentsIdArray = []
    snapshot.forEach(appointment => appointmentsIdArray.push(appointment.id))
    const appointmentsDataPromiseArray = await Promise.all(appointmentsIdArray.map(appointmentId => getAppointmentData({ appointmentId })))
    return appointmentsDataPromiseArray
  } catch (error) {
    throw new Error(error)
  }
}
