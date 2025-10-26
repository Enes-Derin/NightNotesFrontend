import React from 'react'
import NoteUpdateForm from '../components/NoteUpdateForm';
import { useParams } from 'react-router-dom';

function NoteUpdatePage() {

    const { id } = useParams();
    return (
        <NoteUpdateForm id={id} />
    )
}

export default NoteUpdatePage
