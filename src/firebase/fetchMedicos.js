import { db } from './client'
import { collection, getDocs } from 'firebase/firestore'

const database = db

export async function fetchMedicos () {
  try {
    const medicos = await getDocs(collection(database, 'medicos'))
    const medicosArr = []
    medicos.forEach(medico => {
      const id = medico.id
      const data = medico.data()
      medicosArr.push({ id, ...data })
    })
    return medicosArr
   
  } catch (error) {
    const errorCode = error.code
    throw new Error(`Hubo un error al comunicarse con la base de datos de medicos, error: ${errorCode}: ${error.message}`)
  }
}
