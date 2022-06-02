import React, { useState } from 'react'

let flag = false;
function ChatFP(props) {

    // set button name
    const [buttonName, setbuttonName] = useState("Decrypt")

    //about key
    let key
    function keyOnChange(event) {
        key = event.target.value;
    }




    // function for encode the message
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
    }

    // function for Decode the message
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








    // let msg="abc xyz I am react developer i like to develope inovative things and secured things "; 
    const [g, setg] = useState(props.fpMessage);
    // const [chengedg, setchangedg] = useState(encode(gi, 2));

    // onlick function which decide which function being execute 
    function dec() {
        if (flag == true) {
            encode(g, key);
            flag = false
            setbuttonName("Decrypt")
        }
        else if (flag == false) {
            decode(g, key);
            flag = true
            setbuttonName("Encrypt")
        }
        setg(s)
        // console.log(chengedg)
    }

    return (
        <div className='w-full'>
            <div className='w-80 mx-16 h-fit text-center text-2xl border-2 rounded-2xl'>
                <p className=' p-4'>{g}</p>
                <div className='flex'>
                    <input type="number" className='border-2 w-36 my-3 mx-4' placeholder='Enter Key' value={key} onChange={keyOnChange}></input>
                    <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1' onClick={dec}>{buttonName}</button>
                </div>
            </div>
        </div>
    )
}

export default ChatFP