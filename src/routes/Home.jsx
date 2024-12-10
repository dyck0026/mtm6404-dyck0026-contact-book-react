import { Link } from "react-router-dom"
import { collection, query, onSnapshot, getDocs } from 'firebase/firestore'
import db from '../../db'
import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { useLocation } from 'react-router-dom'

const snapshot = await getDocs(collection(db, "contacts"))

const Home = () => {
    let array = []
    snapshot.forEach((doc) => {
        array.push(doc.data())
    })
    const [contacts, setContacts] = useState(array)
    const [render, setRender] = useState(1)
    const location = useLocation()

    if (location.state && render<=1) {
        setRender(2)
    }

    function compareFirst(a, b) {
        if (a.firstname < b.firstname){
        return -1
        }
        if (a.firstname > b.firstname){
        return 1
        }
        return 0
    }
    function compareLast(a, b) {
        if (a.lastname < b.lastname){
        return -1
        }
        if (a.lastname > b.lastname){
        return 1
        }
        return 0
    }

    return (
        <>
            <button id="fbtn" onClick={() => { setContacts([...array.sort(compareFirst)]) }}>First Name</button><button id="lbtn" onClick={() => { setContacts([...array.sort(compareLast)]) }}>Last Name</button>
            <div className="cards">
                {contacts.map((contact) => (
                    <Link onClick={() => setRender(1)} to="/contact" className={"card"+contacts.indexOf(contact)} key={"card"+contacts.indexOf(contact)} state={{ from: contact, index: array.indexOf(contact) }}>
                        <p>{contact.firstname} {contact.lastname}</p><br />
                        <p>{contact.email}</p>
                    </Link>
                ))}
                <Link onClick={() => setRender(1)} to="/add">New Contact</Link>
            </div> 
        </>
    )
}

export default Home