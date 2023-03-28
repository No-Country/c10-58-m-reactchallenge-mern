import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'escuchadero-dd909.firebaseapp.com',
  projectId: 'escuchadero-dd909',
  storageBucket: 'escuchadero-dd909.appspot.com',
  messagingSenderId: '667891683792',
  appId: '1:667891683792:web:ca3a1640073ba9dbd0a9d5',
  measurementId: 'G-DBDQB7QJ3V'
}

const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)
