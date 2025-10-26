import React, { use, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteNote } from '../redux/noteSlice'
import "../styles/note.css"

function Note({ noteProps }) {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const handleDeleteNote = () => {
        dispatch(deleteNote(noteProps.id))
    }

    useEffect(() => {

        navigate('/')

    }, [handleDeleteNote])

    return (
        <div className='note-card'>

            <h1 className='note-title'>{noteProps.title}</h1>
            <p className='note-content'>{noteProps.content}</p>
            <p className='note-date'>
                {new Date(noteProps.updatedAt).toLocaleString('tr-TR', {
                    dateStyle: 'long',
                    timeStyle: 'short',
                })}
            </p>
            <div className='note-actions'>
                <Link to={"/update/" + noteProps.id}>Güncelle</Link>
                <button className='note-delete-button' onClick={handleDeleteNote}>Sil</button>
            </div>

        </div>
    )
}

export default Note
