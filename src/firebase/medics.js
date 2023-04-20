import { dateToSeconds } from '../utils/formatDateFirebase'
import { db } from './client'
import { getDoc, getDocs, addDoc, doc, collection, where, query, Timestamp, collectionGroup } from 'firebase/firestore'

export async function createMedic ({ medicDataForm }) {
  const medicData = {
    ...medicDataForm,
    profilePhoto: 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
    appointments: []
  }
  await addDoc(collection(db, 'medicos'), medicData)
}

export async function getMedicData ({ medicId }) {
  try {
    const medicRef = doc(db, 'medicos', medicId)
    const medicDoc = await getDoc(medicRef)
    const medicData = medicDoc.data()
    return medicData
  } catch (error) {
    throw new Error(error)
  }
}

export async function getMedicAppointments ({ medicId, date }) {
  //
  const appointmentsCollection = collectionGroup(db, 'appointments')
  const oneWeekToMs = 7 * 24 * 60 * 60
  const date1 = new Timestamp(dateToSeconds(date, '0'), 0)
  const date2 = new Timestamp(dateToSeconds(date, '0') + oneWeekToMs, 0)
  const query1 = query(appointmentsCollection, where('date', '>=', date1), where('medicId', '==', medicId), where('date', '<=', date2))
  const snapshot = await getDocs(query1)
  const returnData = []
  snapshot.forEach((appointmentData) => {
    returnData.push(appointmentData.data())
  })
  return returnData
}
