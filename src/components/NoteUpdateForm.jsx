import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../redux/noteSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import "../styles/noteUpdateForm.css"

function NoteUpdateForm({ id }) {

    const noteId = Number(id);

    const [newNoteTitle, setNewNoteTitle] = React.useState('')
    const [newNoteContent, setNewNoteContent] = React.useState('')

    const dispatch = useDispatch();
    const { notes } = useSelector((store) => store.note)

    const navigate = useNavigate()

    React.useEffect(() => {
        const note = notes.find((note) => note.id === noteId)
        if (note) {
            setNewNoteTitle(note.title)
            setNewNoteContent(note.content)
        }
    }, [id, notes])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateNote({ id, title: newNoteTitle, content: newNoteContent }))
        navigate('/')
    }
    return (
        <div className='note-update-container'>
            <h2 className="note-update-title">Not Güncelleme Formu</h2>
            <form className="note-form" onSubmit={handleSubmit}>
                <input className="note-input" type="text" value={newNoteTitle} onChange={(e) => { setNewNoteTitle(e.target.value) }} />
                <textarea className="note-textarea" value={newNoteContent} onChange={(e) => { setNewNoteContent(e.target.value) }}></textarea>
                <button className="note-button" type="submit">Kaydet</button>
                <button className="note-button" onClick={() => navigate('/')}>Geri Dön</button>

            </form>
        </div>
    )
}

export default NoteUpdateForm
