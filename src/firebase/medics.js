import { db } from './client'
import { addDoc, doc, collection } from 'firebase/firestore'

export async function createMedic () {
  const medicData = {
    apellido: 'García',
    especialidad: 'Psicopediatria',
    nombre: 'Olivia',
    profilePhoto: 'https://st2.depositphotos.com/1006318/8387/v/950/depositphotos_83877780-stock-illustration-medical-doctor-profile-icon.jpg',
    direccion: '321 Camino Pine, Ciudad Ejemplo',
    telefono: '555-345-6789',
    appointments: []
  }
  await addDoc(collection(db, 'medicos'), medicData)
}
