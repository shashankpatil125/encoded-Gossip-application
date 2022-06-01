import React from 'react'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'



function ChatChannelName(props) {
    // console.log(props);

    return (
        <Link to={"/YourChats?name=" + props.channelname} >
            <div className='m-4 flex bg-violet-300 p-4 rounded-lg cursor-pointer mr-6'>
                <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                <Getname className='flex-1' name={props.channelname} />
            </div>
        </Link>
    )
}

export default ChatChannelName

function Getname({ name }) {
    return (
        <p className='mt-1 ml-4 text-xl'>{name}</p>
    )
}