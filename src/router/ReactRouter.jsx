
import { Route, Routes } from 'react-router-dom'
import NoteCreatePage from '../pages/NoteCreatePage'
import NoteUpdatePage from '../pages/NoteUpdatePage'
import NotesPage from '../pages/NotesPage'

function ReactRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NotesPage />} />
                <Route path='/create' element={<NoteCreatePage />} />
                <Route path='/update/:id' element={<NoteUpdatePage />} />
            </Routes>

        </div>
    )
}

export default ReactRouter
