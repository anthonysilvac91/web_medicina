import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Footer } from 'flowbite-react'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      
    </>
  )
}

export default App
