import { storage } from './client'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export async function getDefaultAvatar () {
  const defProfileImage = ref(storage, 'gs://escuchadero-dd909.appspot.com/profileImages/default-profile-avatar.png')
  const downloadURL = await getDownloadURL(defProfileImage)
  return downloadURL
}

export async function uploadImage ({ path, image }) {
  if (!image) {
    throw new Error('There was a problem loading your image')
  }
  console.log(image)
  console.log(image.name)
  console.log(image.size)
  const { size, type, name } = image
  if (size > (512 * 1024)) {
    throw new Error('Error: image must be less than 512kB')
  }
  if (type !== 'image/png' && type !== 'image/jpeg') {
    throw new Error('Error: image format must be jpeg or png')
  }
  try {
    const dateNow = new Date().getTime()
    console.log(dateNow)
    const regex = /\.(jpg|png)/gi
    const imageName = name.replace(regex, '')
    const imgPath = ref(storage, `${path}/${imageName}${dateNow}`)
    const snapshot = await uploadBytes(imgPath, image)
    // const userProfile = await getDoc(doc(db, 'users', uid))
    const downloadURL = await getDownloadURL(snapshot.ref)
    return downloadURL
  } catch (error) {
    throw new Error(error)
  }
}
