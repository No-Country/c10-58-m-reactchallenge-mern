// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'escuchadero-dd909.firebaseapp.com',
  projectId: 'escuchadero-dd909',
  storageBucket: 'escuchadero-dd909.appspot.com',
  messagingSenderId: '667891683792',
  appId: '1:667891683792:web:ca3a1640073ba9dbd0a9d5',
  measurementId: 'G-DBDQB7QJ3V'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
