import React, { useState } from 'react'

function ChatFP() {
    let s
    function Mainalgo(g, key) {
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
                if(g.charAt(i)==" "){
                    s=s.concat(" ");
                }
                else if (g.charAt(i) == alphabet[j]) {
                    s = s.concat(chenged[j]);
                }
            }
        }

        console.log(g);
        console.log(s);




    }




    // let msg="abc xyz I am react developer i like to develope inovative things and secured things "; 
    const [g, setg] = useState("abc xyz y am react developer i like to develope inovative things and secured things ");
    const [chengedg, setchangedg] = useState(Mainalgo(g, 2));

    function dec(){
        setg(s)
    }

    return (
        <div className='w-80 mx-16 h-fit text-center text-2xl border-2 rounded-2xl'>

            <p className=' p-4'>{g}</p>
            <div className='flex'>
                <input type="password" className='border-2 w-36 my-3 mx-4' placeholder='Enter Key'></input>
                {/* <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1' onClick={msg=Mainalgo(msg,2)}>Decript</button> */}
                <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1' onClick={dec}>Decript</button>
                {/* {console.log(msg)} */}
            </div>
        </div>
    )
}

export default ChatFP