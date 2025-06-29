import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from '/src/component/ui/Navbar.jsx'
import ButtomNav from './component/ui/ButtomNav'
import GuidelinePage from './pages/GuidelinePage'
import Button from './component/ui/button'
import INRPage from './pages/INRPage'
import TWDPage from './pages/TWDPage'


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Navbar/>
    <TWDPage/>
    <ButtomNav/>
  </StrictMode>,
)
