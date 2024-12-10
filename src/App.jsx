import './App.css'
import { Outlet } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import db from '../db'
import { useState, useEffect } from 'react'

// const snapshot = await getDocs(collection(db, "contacts"))
// let array = []
// snapshot.forEach((doc) => {
//     array.push(doc.data())
// })

function App() {
  // const [contacts, setContacts] = useState(array)
  return (
    <Outlet />
  )
}

export default App
