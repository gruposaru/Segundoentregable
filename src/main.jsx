import React from 'react'
import ReactDOM from 'react-dom/client'
import Cartwidget from './Carritoapp/Cartwidget'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Cartwidget/>
  </React.StrictMode>,
  </BrowserRouter>
)
