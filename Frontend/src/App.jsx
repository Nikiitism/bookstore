import React from 'react'
import Home from "./home/Home"
import Courses from './courses/Courses'
import { Route,Routes } from "react-router-dom"
// import Course from './components/Course'
import Signup from './components/Signup'
import Contacts from './contacts/Contacts'

function App() {
  return (
    <>
  <div>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/course" element={<Courses/>}/>    
   <Route path="/signup" element={<Signup/>}/> 
   <Route path="/contact" element={<Contacts/>}/>    
   </Routes>
  </div>
    </>
    );
}

export default App


