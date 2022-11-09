import React from 'react'
import { Routes, Route} from "react-router-dom";
import About from '../Components/About';
import Contact from '../Components/Contact';
import Home from '../Components/Home';
import Services from '../Components/Services';
const Routing = () => {
  return (
    <div>
        
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="contact" element={<Contact/>} />
     <Route path="services" element={<Services/>} />
     <Route path="about" element={<About/>} />
    </Routes>
    </div>
  )
}

export default Routing