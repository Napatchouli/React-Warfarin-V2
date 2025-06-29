import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'
import { BrowserRouter } from 'react-router-dom' 
import Navbar from './component/ui/Navbar'


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Navbar/>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
