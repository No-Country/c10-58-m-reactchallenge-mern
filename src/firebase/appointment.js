import { db, firebaseAuth } from './client'
import { Timestamp, deleteDoc, getDoc, doc, addDoc, collection, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

export async function createAppointment ({ date, hour, medicId }) {
  const { uid } = firebaseAuth.currentUser
  try {
    const dateString = `${date}T${hour}:00:00`
    const ISODate = new Date(dateString)
    const seconds = Date.parse(ISODate) / 1000
    const dateTime = new Timestamp(seconds, 0)
    const appointment = { date: dateTime, medicId, userId: uid }
    const appointmentAdded = await addDoc(collection(db, 'appointments'), appointment)
    console.log(appointmentAdded.id, dateTime)
    const userDoc = doc(db, 'users', uid)
    const medicDoc = doc(db, 'medicos', medicId)
    await Promise.all([updateDoc(userDoc, { appointments: arrayUnion(appointmentAdded.id) }), updateDoc(medicDoc, { appointments: arrayUnion(appointmentAdded.id) })])
    return ('La cita ha sido creada')
  } catch (error) {
    throw new Error(error)
  }
}

export async function cancelAppointment ({ appointmentId }) {
  const { uid } = firebaseAuth.currentUser
  try {
    const appointmentRef = doc(db, 'appointments', appointmentId)
    const { medicId, userId } = getAppointmentData({ appointmentId })
    const userDoc = doc(db, 'users', userId)
    const medicDoc = doc(db, 'medicos', medicId)
    await Promise.all([deleteDoc(appointmentRef), updateDoc(userDoc, { appointments: arrayRemove(appointmentId) }), updateDoc(medicDoc, { appointments: arrayRemove(appointmentId) })])
    return ('La cita ha sido cancelada')
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAppointmentData ({ appointmentId }) {
  try {
    const appointmentRef = doc(db, 'appointments', appointmentId)
    const appointmentDoc = await getDoc(appointmentRef)
    const appointmentData = appointmentDoc.data()
    const { medicId, userId } = appointmentData
    return { medicId, userId, appointmentId }
  } catch (error) {
    throw new Error(error)
  }
}
