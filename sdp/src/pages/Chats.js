import React, { useState } from 'react'
import Chatlist from '../components/Chatlist.js'
// import Chatwindow from '../components/Chatwindow.js'
import Cw from '../components/Cw.js'
// import Cw1 from '../components/Cw1.js'
import Navbar from '../components/Navbar.js'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrowserRouter as router, Link, Route, Routes, useLocation } from "react-router-dom";
import ChatChannelName from '../components/ChatChannelName.js';

function useQuery(){
  const {search} = useLocation();
  return React.useMemo(()=>new URLSearchParams(search), [search]);
}


let arr=["om", "shiddhesh","pranav","shubham", "aaditya", "sahil","mayur", "mayuresh", "rayyan" ]


function Chats() {
  let query = useQuery();
  const [nameAndMessage, setnameAndMessage]= useState([{name:"om",message:[{send:"Hello"},{rec:"bye"},{send:"how are you"},{send:"whats going on"},{rec:"i am fine"},{rec:"exams going on"}]},
  {name:"shiddhu",message:[{send:"hi"},{rec:"bye"}]},
  {name:"pappya",message:[{send:"helo"},{rec:"bye"}]},
  {name:"maxman",message:[{send:"hi"},{rec:"bye"}]},
  {name:"ultraMaxMan",message:[{send:"hi"},{rec:"bye"}]},
  {name:"megaMan",message:[{send:"hi"},{rec:"bye"}]},
  {name:"spiderman",message:[{send:"hi"},{rec:"bye"}]},
  {name:"alibaba",message:[{send:"hi"},{rec:"bye"}]}])
  

  return (


    <div className="h-full">
      <Navbar />
      <div className='flex pt-16 h-screen'>
        {/* <Chatlist /> */}
        <Chatlist cname={arr} PMessages={nameAndMessage} />
        {/* {arr.map((e,i)=><ChatChannelName channelname={e} key={i}/>)} */}

        {/* <Chatwindow /> */}
        <Cw PMessages={nameAndMessage} />
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