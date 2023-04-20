import { dateToSeconds } from '../utils/formatDateFirebase'
import { db, firebaseAuth } from './client'
import { Timestamp, deleteDoc, getDoc, doc, addDoc, collection, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { getUserData } from './user'
import { getMedicAppointments, getMedicData } from './medics'
import { format, addBusinessDays, parseISO } from 'date-fns'

export async function createAppointment ({ date, hour, medicId }) {
  const { uid } = firebaseAuth.currentUser
  if (hour < 7 || hour > 18) throw new Error('La hora de atencion es de 07:00 a 18:100')
  try {
    const dateTime = new Timestamp(dateToSeconds(date, hour), 0)
    const appointment = { date: dateTime, medicId, userId: uid }
    const appointmentAdded = await addDoc(collection(db, 'appointments'), appointment)
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
  if (!uid) throw new Error('El usuario no se ha logueado en la pagina')
  try {
    const appointmentRef = doc(db, 'appointments', appointmentId)
    const { medicId, userId } = await getAppointmentData({ appointmentId })
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
    const { medicId, userId, date } = appointmentData
    const [userDoc, medicDoc] = await Promise.all([getUserData({ userId }), getMedicData({ medicId })])
    const userData = userDoc
    const medicData = medicDoc
    return { medicId, userId, appointmentId, medicData, userData, date }
  } catch (error) {
    throw new Error(error)
  }
}

export async function getOneWeekAppointments ({ medicId, date }) {
  if (!date) return
  const weekDays = {}
  const medicAppointments = await getMedicAppointments({ medicId, date })
  for (let i = 0; i < 5; i++) {
    const dateKey = format(addBusinessDays(parseISO(date), i), 'dd/MM')
    weekDays[dateKey] = {}
    for (let j = 7; j < 18; j++) {
      const hour = `${j}:00`
      weekDays[dateKey][hour] = false
    }
  }
  medicAppointments.forEach(app => {
    const dateFormatted = format(app.date.seconds * 1000, 'dd/MM-H:00')
    const [day, hour] = dateFormatted.split('-')
    weekDays[day][hour] = true
  })
  return (weekDays)
}
