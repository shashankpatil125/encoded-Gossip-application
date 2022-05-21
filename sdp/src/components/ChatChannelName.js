import React from 'react'

function ChatChannelName(props) {
    
    return (
        <div className='m-4 flex bg-violet-300 p-4 rounded-lg cursor-pointer mr-6'>
            <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
            <p className='mt-1 ml-4 text-xl'>{props.channelname}</p>
        </div>
    )
}

export default ChatChannelName