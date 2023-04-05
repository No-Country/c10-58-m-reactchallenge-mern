import { db, firebaseAuth } from './client'
import { Timestamp, setDoc, doc, addDoc, collection, updateDoc, arrayUnion } from 'firebase/firestore'

export async function createAppointment ({ date, hour, medico }) {
  const { uid } = firebaseAuth.currentUser
  try {
    const dateString = `${date}T${hour}:00:00`
    const ISODate = new Date(dateString)
    const seconds = Date.parse(ISODate) / 1000
    const dateTime = new Timestamp(seconds, 0)
    const appointment = { date: dateTime, medico, user: uid }
    const appointmentAdded = await addDoc(collection(db, 'appointments'), appointment)
    console.log(appointmentAdded.id, dateTime)
    const userDoc = doc(db, 'users', uid)
    const medicDoc = doc(db, 'medicos', medico)
    await Promise.all([updateDoc(userDoc, { appointments: arrayUnion(appointmentAdded.id) }), updateDoc(medicDoc, { appointments: arrayUnion(appointmentAdded.id) })])
    return ('La cita ha sido creada')
  } catch (error) {
    throw new Error(error)
  }
}
