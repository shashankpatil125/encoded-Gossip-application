import React from 'react'
import ChatChannelName from './ChatChannelName'

let arr=["om", "shiddhu","pappya","maxman", "ultraMaxMan", "megaMan","spiderman", "alibaba", "uvxyz" ]

function Chatlist() {
  return (
    <div className='flex-1  bg-slate-200 scroll-smooth '>
    <div className='  w-96 overflow-scroll h-full scroll-smooth'>
        
        {arr.map((e)=><ChatChannelName channelname={e}/>)}
        {/* {arr.map((e,i)=><ChatSP msg={e} key={i} />)} */}


        {/* <ChatChannelName />
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