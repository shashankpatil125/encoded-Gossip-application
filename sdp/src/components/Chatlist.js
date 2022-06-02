import React from 'react'
import ChatChannelName from './ChatChannelName'
import {BrowserRouter as Router, Link, useLoction} from "react-router-dom"


function Chatlist(props) {
  return (
    <div className='flex-1  bg-slate-200 scroll-smooth '>
    <div className='  w-96 overflow-scroll h-full scroll-smooth'>
        
        {props.PMessages.map((e,i)=><ChatChannelName channelname={e.name} key={i}/>)}
        
        {/* <ChatChannelName channelname={} /> */}
{/* 
        
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