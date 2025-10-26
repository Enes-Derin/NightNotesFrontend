import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../redux/noteSlice'
import { useNavigate } from 'react-router-dom'
import '../styles/noteCreateForm.css'


function NoteCreateForm() {

    const [newNoteTitle, setNewNoteTitle] = useState("")
    const [newNoteContent, setNewNoteContent] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newNoteTitle === "" || newNoteContent === "") {
            return
        }
        const newNote = {
            title: newNoteTitle,
            content: newNoteContent,
        }
        dispatch(createNote(newNote))
        navigate("/")
    }


    return (
        <div className='note-create-container'>
            <h2 className="note-create-title">Yeni Not Oluştur</h2>
            <form className="note-form" onSubmit={handleSubmit}>
                <input className="note-input" type="text" placeholder="Başlık..." value={newNoteTitle} onChange={(e) => { setNewNoteTitle(e.target.value) }} />
                <textarea className="note-textarea" placeholder="İçerik..." value={newNoteContent} onChange={(e) => { setNewNoteContent(e.target.value) }}></textarea>
                {newNoteTitle.length < 1 || newNoteContent.length < 1 ? <button className="note-submit-button" disabled>Yeni Not Oluştur</button> : <button className="note-submit-button">Yeni Not Oluştur</button>}
                <button className="note-cancel-button" onClick={() => navigate("/")}>İptal</button>
            </form>
        </div>
    )
}

export default NoteCreateForm;
