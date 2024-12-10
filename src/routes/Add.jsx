import { Link } from "react-router-dom"
import { collection, query, onSnapshot, getDocs } from 'firebase/firestore'
import db from '../../db'
import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { useLocation } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore"

const snapshot = await getDocs(collection(db, "contacts"))

const Add = () => {
    let array = []
    snapshot.forEach((doc) => {
        array.push(doc.data())
    })
    const [contacts, setContacts] = useState(array)
    const location = useLocation()

    async function addContact() {
        let form = document.querySelector("#addform")
        let formData = new FormData(form)
        await setDoc(doc(db, "contacts", "contact"+(array.length+1)), {
            firstname: formData.get('firstname').toLowerCase(),
            lastname: formData.get('lastname').toLowerCase(),
            email: formData.get('email').toLowerCase()
          })
    }

    return (
        <>
            <form id="addform">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname"></input>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname"></input>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"></input>
                <Link onClick={() => addContact()} to="/" state={{ props : array }}>Add Contact</Link>
                <Link to="/">Back to Contacts</Link>
            </form>
        </>
    )
}

export default Add