// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGS92l2a5P-_vsuIhmMO5fgo6XoZQl9Bc",
  authDomain: "contact-book-71e47.firebaseapp.com",
  projectId: "contact-book-71e47",
  storageBucket: "contact-book-71e47.firebasestorage.app",
  messagingSenderId: "126691180667",
  appId: "1:126691180667:web:213c8bcf0e1957af7da2de"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
