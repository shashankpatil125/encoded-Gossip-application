import React from 'react'
import ChatChannelName from './ChatChannelName'
import {BrowserRouter as Router, Link, useLoction} from "react-router-dom"
let arr=["om", "shiddhu","pappya","maxman", "ultraMaxMan", "megaMan","spiderman", "alibaba", "uvxyz" ]

function Chatlist() {
  return (
    <div className='flex-1  bg-slate-200 scroll-smooth '>
    <div className='  w-96 overflow-scroll h-full scroll-smooth'>
        
        {arr.map((e,i)=><ChatChannelName channelname={e} key={i}/>)}
        

{/* 
        <ChatChannelName />
        <ChatChannelName />
        <ChatChannelName />
        <ChatChannelName />
        <ChatChannelName />
        <ChatChannelName />
        <ChatChannelName />
        <ChatChannelName />
        <ChatChannelName />
        <ChatChannelName /> */}
    </div>
</div>
  )
}

export default Chatlist