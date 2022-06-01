import './App.css';
import Chats from './pages/Chats';

// import Chatlist from './components/Chatlist.js'
// import Chatwindow from './components/Chatwindow.js'
// import Navbar from './components/Navbar.js'

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import SignIn from './pages/SignIn';

import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Cw1 from './components/Cw1';
import Cwlist from './CW/Cwlist';
import { useState } from 'react';


function App() {
  const [myname, setmyname]=useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="YourChats" element={<Chats/>} />
      </Routes>
    </BrowserRouter>

    // <Cwlist/>

  );
}

export default App;
