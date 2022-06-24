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
  const [nameAndMessage, setnameAndMessage]= useState([{name:"om",message:[{send:"Hello"},{rec:"bye"},{send:"how are you"},{send:"whats going on"},{rec:"i am fine"},{rec:"exams are going on"}]},
  {name:"Pranav",message:[{send:"Hi"},{rec:"Hello"},{send:"My self Pranav"},{rec:"okk "},{send:"how your project is going on"},{rec:"it will going very interesting"}]},
  {name:"Siddhesh",message:[{send:"hello"},{rec:"hello"},{send:"can you send your email and password"},{rec:"yes"},{rec:"it is secured so i can shared it"}]},
  {name:"Neel",message:[{send:"Shashank right?"},{rec:"Yes, thats me!"}]},
  {name:"Sahil",message:[{send:"hi"},{rec:"bye"}]},
  {name:"Mayur",message:[{send:"Can you come at collage for help me to planning for event"},{rec:"yes i will come in 10 minutes"}]},
  {name:"Jeet",message:[{send:"I am jeet i want to secure the chats"},{rec:"yes you can securied your chat by using cipher texts technology"}]},
  {name:"Suraj",message:[{send:"Hi"},{rec:"Hello"},{rec:"I will talk you after some time"}]}])
  

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