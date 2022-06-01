import React from 'react'
import Chatlist from '../components/Chatlist.js'
// import Chatwindow from '../components/Chatwindow.js'
import Cw from '../components/Cw.js'
// import Cw1 from '../components/Cw1.js'
import Navbar from '../components/Navbar.js'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrowserRouter as router, Link, Route, Routes, useLocation } from "react-router-dom";

function max(){
  
}

function Chats() {

  

  return (


    <div className="h-full">
      <Navbar />
      <div className='flex pt-16 h-screen'>
        <Chatlist />
        {/* <Chatwindow /> */}
        <Cw />
        {/* <Cw1/> */}
      </div>
    </div>
  )
}

export default Chats



// <div className="h-full">
{/* <Routes>
        <Route path="chats" element={<Navbar />}></Route>
        <Route className='flex pt-16 h-screen'>
          <Route element={<Chatlist/>}></Route>
          <Route element={<Cw/>}></Route>
        </Route>
      </Routes> */}
    // </div>