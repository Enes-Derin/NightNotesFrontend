import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import { BrowserRouter, Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>


  </Provider>,
)
