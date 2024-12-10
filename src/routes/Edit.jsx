import { Link } from "react-router-dom"
import { collection, query, onSnapshot, getDocs } from 'firebase/firestore'
import db from '../../db'
import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { useLocation } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore"

const snapshot = await getDocs(collection(db, "contacts"))

const Edit = () => {
    let array = []
    snapshot.forEach((doc) => {
        array.push(doc.data())
    })
    const [contacts, setContacts] = useState(array)
    const location = useLocation()

    async function editContact() {
        let form = document.querySelector("#editform")
        let formData = new FormData(form)
        await setDoc(doc(db, "contacts", "contact"+(location.state.index+1)), {
            firstname: formData.get('firstname').toLowerCase(),
            lastname: formData.get('lastname').toLowerCase(),
            email: formData.get('email').toLowerCase()
          })
    }

    return (
        <>
            <form id="editform">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname"></input>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname"></input>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"></input>
                <Link onClick={() => editContact()} to="/" state={{ props : array }}>Change Contact</Link>
                <Link to="/">Back to Contacts</Link>
            </form>
        </>
    )
}

export default Edit