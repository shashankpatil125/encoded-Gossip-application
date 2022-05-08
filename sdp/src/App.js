import './App.css';
import Chats from './pages/Chats';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import SignIn from './pages/SignIn';

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="YourChats" element={<Chats />}/>
      </Routes>
    </BrowserRouter>



    // <div className="App">
    //   <SignIn/>
    //   {/* <Chats/> */}

    //   {/* <BrowserRouter>
    //     <Routes>
    //       <Route path='SignIn' element={<SignIn/>}/>
    //       <Route path='Chat' element={<Chats/>}>
            
            
    //       </Route>
    //     </Routes>
    //   </BrowserRouter> */}
    // </div>
  );
}

export default App;
