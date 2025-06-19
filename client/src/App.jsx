import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx"
import Login from "./pages/LogIn.jsx"
import Settings from './pages/Settings.jsx'
import Signup from './pages/Signup.jsx'
import Navbar from "./components/Navbar.jsx"
import Movies from "./pages/Movies.jsx"
import Events from "./pages/Events.jsx"
import Vendor from "./pages/vendor/Vendor.jsx"
import Trains from "./pages/Trains.jsx"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/Movies' element={<Movies/>} />
        <Route path='/Events' element={<Events/>} />
        <Route path='/Trains' element={<Trains/>} />
        <Route path='/ListYourEvent' element={<Vendor/>} />
      </Routes>
    
    
    
    
    
    </BrowserRouter>
  )
    
  
}

export default App
