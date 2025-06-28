import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtomNav from './component/ButtomNav.jsx'
import Navbar from './component/Navbar.jsx'
import GuidelineDC from './component/Guideline_V2.jsx'
import Guideline_V3 from './component/Guideline_V3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Navbar/>
    <Guideline_V3/>
    <ButtomNav/>
  </StrictMode>,
)
