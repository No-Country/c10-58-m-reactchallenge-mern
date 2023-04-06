import { dateToSeconds } from '../utils/formatDateFirebase'
import { db, firebaseAuth } from './client'
import { getDoc, getDocs, addDoc, doc, collection, where, query, Timestamp, collectionGroup } from 'firebase/firestore'

export async function createMedic () {
  const medicData = {
    apellido: 'Smith',
    especialidad: 'Psicologia',
    nombre: 'Emily',
    profilePhoto: 'https://st2.depositphotos.com/5934840/11980/v/950/depositphotos_119808072-stock-illustration-medic-or-doctor-icon.jpg',
    direccion: '456 Calle Elm, Ciudad Ejemplo',
    telefono: '123-345-4567',
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
  const appointmentsCollection = collectionGroup(db, 'appointments')
  const addOneWeek = 7 * 24 * 60 * 60
  const date1 = new Timestamp(dateToSeconds(date, '00'), 0)
  const date2 = new Timestamp(dateToSeconds(date, '00') + addOneWeek, 0)
  const query1 = query(appointmentsCollection, where('date', '>=', date1), where('medicId', '==', medicId), where('date', '<=', date2))
  console.log(query1)
  const snapshot = await getDocs(query1)
  const returnData = []
  snapshot.forEach((medicData) => {
    returnData.push(medicData.data())
  })
  return returnData
}
