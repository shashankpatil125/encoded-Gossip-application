import React from 'react'
import Chatlist from '../components/Chatlist.js'
import Chatwindow from '../components/Chatwindow.js'
import Navbar from '../components/Navbar.js'

function Chats() {
  return (
    <div className="">
        <Navbar/>
        <div className='flex'>
        <Chatlist/>
        <Chatwindow/>
        </div>
    </div>
  )
}

export default Chats