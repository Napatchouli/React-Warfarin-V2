import React from 'react'
import { Routes, Route } from 'react-router-dom' // <-- Add this import
import Navbar from '/src/component/ui/Navbar.jsx'
import BottomNav from './component/ui/ButtomNav'
import GuidelinePage from './pages/GuidelinePage'
import INRPage from './pages/INRPage'
import TWDPage from './pages/TWDPage'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<INRPage />} />
          <Route path="/twd" element={<TWDPage />} />
          <Route path="/guideline" element={<GuidelinePage />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  )
}
export default App