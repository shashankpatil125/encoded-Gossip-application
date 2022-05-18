import React from 'react'


function ChatSP(props) {
    return (
            {/* type new message and send it */},
            <div className='flex justify-end mt-2'>
                <div className='w-80 mx-16 h-fit text-center text-2xl border-2 rounded-2xl justify-end'>
                    <p className=' p-4'>{props.msg}</p>
                    <div className='flex'>
                        <input type="password" className='border-2 w-36 my-3 mx-4' placeholder='Enter Key'></input>
                        <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1'>Decript</button>
                    </div>
                </div>
            </div>
        
    )
}

export default ChatSP