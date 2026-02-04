import React from 'react'
import BlueHuesHomePage from './pages/BlueHuesHomePage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<BlueHuesHomePage />} />
      </Routes>
    </div>
  )
}

export default App
