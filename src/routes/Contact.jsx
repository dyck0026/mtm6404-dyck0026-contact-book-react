import { Link } from "react-router-dom"
import { collection, query, onSnapshot, getDocs } from 'firebase/firestore'
import db from '../../db'
import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { useLocation } from 'react-router-dom'
import { doc, deleteDoc } from "firebase/firestore"

const snapshot = await getDocs(collection(db, "contacts"))

const Contact = () => {
    let array = []
    snapshot.forEach((doc) => {
        array.push(doc.data())
    })
    const [contacts, setContacts] = useState(array)
    const location = useLocation()

    async function deleteContact() {
        await deleteDoc(doc(db, "contacts", ("contact"+(location.state.index+1))))
    }

    return (
        <>
        <div id="details">
            <div className={"carddetails"}>
                <p>{location.state.from.firstname} {location.state.from.lastname}</p><br />
                <p>{location.state.from.email}</p>
            </div>
            <Link to="/edit" state={{ index: location.state.index }}>Edit Contact</Link>
            <Link onClick={() => {array.splice(location.state.index, 1)
            // deleteDoc(doc(db, "contacts", ("contact"+(location.state.index+1))))
            deleteContact()
            }} to="/" state={{ props : array }}>Delete Contact</Link>
            <Link to="/">Back to Contacts</Link>
            </div>
        </>
    )
}

export default Contact