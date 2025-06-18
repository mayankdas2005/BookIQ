import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx"
import Login from "./pages/LogIn.jsx"
import Settings from './pages/Settings.jsx'
import Signup from './pages/Signup.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    
    
    
    
    
    </BrowserRouter>
  )
    
  
}

export default App
