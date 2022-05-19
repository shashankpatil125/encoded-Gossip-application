import { applyActionCode } from 'firebase/auth';
import React, { useState } from 'react'
import ChatChannelName from './ChatChannelName';
import ChatFP from './ChatFP';
import ChatSP from './ChatSP';


let counter=0
let key
function Cw() {

    // encode typed message
    let s
    function encode(g, key) {
        s = "";
        let chenged = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (let j = 0; j < key; j++) {
            for (let i = 0; i < 25; i++) {

                let temp = chenged[i];
                chenged[i] = chenged[i + 1]
                chenged[i + 1] = temp;
            }
        }

        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for (let i = 0; i < g.length; i++) {
            for (let j = 0; j < 26; j++) {
                if (g.charAt(i) == " ") {
                    s = s.concat(" ");
                }
                else if (g.charAt(i) == alphabet[j]) {
                    s = s.concat(chenged[j]);
                }
            }
        }

        // console.log(g);
        // console.log(s);
    }

    function decode(g, key) {
        s = "";
        let chenged = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
        for (let j = 0; j < key; j++) {
            for (let i = 0; i < 25; i++) {

                let temp = chenged[i];
                chenged[i] = chenged[i + 1]
                chenged[i + 1] = temp;
            }
        }

        let alphabet = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

        for (let i = 0; i < g.length; i++) {
            for (let j = 0; j < 26; j++) {
                if (g.charAt(i) == " ") {
                    s = s.concat(" ");
                }
                else if (g.charAt(i) == alphabet[j]) {
                    s = s.concat(chenged[j]);
                }
            }
        }

        // console.log(g);
        // console.log(s);
    }
    // encode typed message 


    const [arr,setarr]=useState([])
{/* <TypeMessage/> */}
    const [typedMessage, settypedMessage] = useState('');
    function send(){
       let carr=arr.slice()
        //encode message
        settypedMessage(decode(typedMessage,2))
        carr[counter]=typedMessage
        setarr(carr)
        console.log(carr);
        console.log(counter++);
        settypedMessage('')



    }
    //store a typed message into array which is arr
    
    function keyOnChange(e) {
        key = e.target.value;
        console.log(key);
    }
    //store a typed KEY into key 
    
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
                        <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full w-80' value={typedMessage} name="typedMessage" onChange={e => settypedMessage(e.target.value)} placeholder="Type a message" />
                        <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full text-center w-28' type="text" placeholder='Enter key'  value={key} onChange={keyOnChange} ></input>
                        <button className='border-2 mt-6 ml-8 mb-5 border-black rounded-xl px-3 bg-lime-300' onClick={send}>Encrypt and Send</button>
                    </div>
                    {/* <TypeMessage/> */}
                </div>
            </div>
        </div>
    )
}

export default Cw