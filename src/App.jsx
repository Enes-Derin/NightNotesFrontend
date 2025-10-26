import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NotesPage from './pages/NotesPage'
import { BrowserRouter, Router } from 'react-router-dom'
import ReactRouter from './router/ReactRouter'

function App() {

  return (

    <>
      <Navbar />
      <ReactRouter />

    </>

  )
}

export default App
