import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <h1>NightNotes</h1>
            <Link className='link' to="/create">Add Note</Link>

        </div>
    )
}

export default Navbar
