import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNotes } from '../redux/noteSlice';
import Note from './Note';
import "../styles/noteList.css"

function NoteList() {

    const dispatch = useDispatch();
    const { notes } = useSelector(store => store.note)

    useEffect(() => {
        dispatch(fetchNotes())
    }, [dispatch])
    return (
        <div className='note-list-container'>
            <h1 className='note-list-title'>Notes</h1>
            <div className='note-grid'>
                {
                    notes.map(note => {
                        return <>
                            <div className='note-card'>
                                <Note key={note.id} noteProps={note} />
                            </div>
                        </>
                    })
                }
            </div>


        </div>

    )
}

export default NoteList
