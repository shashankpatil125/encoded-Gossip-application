import { applyActionCode } from 'firebase/auth';
import React, { useState } from 'react'
import App from '../App';
import ChatChannelName from './ChatChannelName';
import ChatFP from './ChatFP';
import ChatSP from './ChatSP';
import Mainalgo from './Mainalgo';
import TypeMessage from './TypeMessage';

let counter=0
function Chatwindow() {
    const [arr,setarr]=useState([])

{/* <TypeMessage/> */}
    const [typedMessage, settypedMessage] = useState('');
    function send(){
       let carr=arr.slice()

        carr[counter]=typedMessage
        setarr(carr)
        console.log(carr[counter]);
        console.log(counter++);
    }
    //store a typed message into array which is arr
    
{/* <TypeMessage/> */}


    return (

        <div className='flex  w-full '>
            <div className='flex-1  bg-slate-200  '>
                <div className='  w-96 overflow-scroll h-full'>
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                    <ChatChannelName />
                </div>
            </div>



            <div className='w-full h-full'>
                <div className='bg-sky-200 w-full h-fit fixed'>
                    <div className='flex  bg-sky-200 '>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='h-14 w-14 m-4'></img>
                        <p className='text-2xl mt-7 font-semibold'>Name</p>
                    </div>
                </div>

                <div className='pt-28 w-full h-full overflow-scroll'>
                    {/* chat fperson */}
                    <ChatFP />

                    {/* chat sperson */}
                    {arr.map(e=><ChatSP msg={e} />)}
                    
                    

                    {/* type new message and send it */}
                    {/* <TypeMessage/> */}
                    <div className='flex w-full bg-sky-200 mt-4 '>
                        {/* <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full w-80' type="text" placeholder='Type a message'></input> */}
                        <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full w-80' value={typedMessage} name="typedMessage" onChange={e => settypedMessage(e.target.value)} />
                        <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full text-center w-28' type="text" placeholder='Enter key' ></input>
                        <button className='border-2 mt-6 ml-8 mb-5 border-black rounded-xl px-3 bg-lime-300' onClick={send}>Encrypt and Send</button>
                    </div>
                    {/* <TypeMessage/> */}
                </div>
            </div>
        </div>
    )
}

export default Chatwindow