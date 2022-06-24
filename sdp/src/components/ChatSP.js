import React, { useState } from 'react'

let flag=false

function ChatSP(props) {
    // const [key, setkey]=useState('')
    // function for Decode the message
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
    }

    
    // function for Decode the message
    let s = "";
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
    }

    const [key,setkey]=useState('')
    function keyOnChange(e) {
        setkey(e.target.value);
        // console.log(key);
    }

    const [message,setmessage]=useState(props.msg)
    // set button name
    const [buttonName, setbuttonName] = useState("Decrypt")
    
    function dec() {
        if (flag == true) {
            encode(message, key);
            flag = false
            setbuttonName("Decrypt")
        }
        else if (flag == false) {
            decode(message, key);
            flag = true
            setbuttonName("Encrypt")
        }
        setmessage(s)
        // console.log(chengedg)
    }



    return (
            {/* type new message and send it */},
            <div className='flex justify-end mt-2 '>
                <div className='bg-orange-100  w-80 mx-16 h-fit text-center text-2xl  rounded-2xl justify-end'>
                    <p className=' p-4'>{message}</p>
                    <div className='flex'>
                        <input type="password" className='pb-2 w-36 my-3 mx-4' placeholder='Enter key'  value={key} onChange={keyOnChange}></input>
                        <button className='rounded-lg bg-lime-500 h-12 px-3 mt-1' onClick={dec}>{buttonName}</button>
                    </div>
                </div>
            </div>
        
    )
}

export default ChatSP