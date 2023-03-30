import { db } from './client'
import { collection, getDocs } from 'firebase/firestore'

export async function fetchCollection ({ collectionName }) {
  try {
    const collectionRef = await getDocs(collection(db, collectionName))
    const dataArray = []
    collectionRef.forEach(medico => {
      const id = medico.id
      const data = medico.data()
      dataArray.push({ id, ...data })
    })
    return dataArray
  } catch (error) {
    const errorCode = error.code
    throw new Error(`Hubo un error al comunicarse con la base de datos de ${collectionName}, error: ${errorCode}: ${error.message}`)
  }
}
