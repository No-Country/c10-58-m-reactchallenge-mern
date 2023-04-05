import { db } from './client'
import { getDoc, addDoc, doc, collection } from 'firebase/firestore'

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
