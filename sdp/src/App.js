import './App.css';
import Chats from './pages/Chats';

import Chatlist from './components/Chatlist.js'
import Chatwindow from './components/Chatwindow.js'
import Navbar from './components/Navbar.js'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import SignIn from './pages/SignIn';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="YourChats" element={
          <div>
            <Navbar />
            <div className='flex pt-16 h-screen'>
              <Chatlist />
              <Chatwindow />
            </div>
          </div>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
