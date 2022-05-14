import React from 'react'
import Chatlist from '../components/Chatlist.js'
import Chatwindow from '../components/Chatwindow.js'
import Navbar from '../components/Navbar.js'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function Chats() {
  return (

    <div className="h-full">
      <Navbar />
      <div className='flex pt-16 h-screen'>
        <Chatlist />
        <Chatwindow />
      </div>
    </div>
  )
}

export default Chats