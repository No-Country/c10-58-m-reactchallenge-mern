import { db } from './client'
import { collection, getDocs } from 'firebase/firestore'

export async function fetchCollection ({ collectionName }) {
  try {
    const collectionRef = await getDocs(collection(db, collectionName))
    const dataArray = []
    collectionRef.forEach(document => {
      const id = document.id
      const data = document.data()
      dataArray.push({ id, ...data })
    })
    return dataArray
  } catch (error) {
    const errorCode = error.code
    throw new Error(`Hubo un error al comunicarse con la base de datos de ${collectionName}, error: ${errorCode}: ${error.message}`)
  }
}
