import React, { useState } from 'react'
import ChatChannelName from './ChatChannelName';
import ChatFP from './ChatFP';
import ChatSP from './ChatSP';
import { useLocation } from 'react-router-dom'



function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}



let counter = 0
function Chatwindow(props) {
    let query = useQuery();


    const [allinfo, setallinfo] = useState([])


    // encode typed message
    let s
    function encode(typedMessage, key) {
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

        for (let i = 0; i < typedMessage.length; i++) {
            for (let j = 0; j < 26; j++) {
                if (typedMessage.charAt(i) === " ") {
                    s = s.concat(" ");
                }
                else if (typedMessage.charAt(i) === alphabet[j]) {
                    s = s.concat(chenged[j]);
                }
            }
        }
        return s
    }
    // encode typed message 





    const [arr, setarr] = useState([])
    // {/* <TypeMessage/> */}
    const [typedMessage, settypedMessage] = useState('');
    function send() {
        let carr = arr.slice()
        //encode message
        settypedMessage(encode(typedMessage, key))
        carr[counter] = encode(typedMessage, key)
        setarr(carr)
        settypedMessage('')
        setkey('')
        let infocpy = allinfo.slice()
        infocpy.push({
            wtypedMessage: encode(typedMessage, key),
            fpersonName: "maxperson",
            spersonName: "minperson"
        })
        setallinfo(infocpy)
        console.log(infocpy);

    }
    //store a typed message into array which is arr

    const [key, setkey] = useState('')
    function keyOnChange(e) {
        setkey(e.target.value);
    }
    //store a typed KEY into key 

    //  <TypeMessage/> 

    const [nameAndMessage, setnameAndMessage] = useState([{ name: query.get("name"), message: [{ send: "hi" }, { rec: "bye" }] }])
    console.log(props.PMessages);
    return (

        <div className='flex  w-full '>
            <div className='w-full h-full'>
                <div className='bg-sky-200 w-full h-fit fixed'>
                    <div className='flex  bg-sky-200 '>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' alt="img" className='h-14 w-14 m-4'></img>
                        <p className='text-2xl mt-7 font-semibold'>{query.get("name")}</p>
                    </div>
                </div>

                {/* chat fperson */}
                <div className='pt-28 w-full h-3/4 overflow-scroll '>
                    {props.PMessages.map(
                        (e, i) => {
                            if(query.get("name")==e.name){
                            return e.message.map((f, k) => {
                                console.log(f);
                                return f.send ?
                                    (<ChatFP fpMessage={f.send} key={k} />)
                                    :
                                    <ChatSP msg={f.rec} key={k} />
                            }
                            )
                        }
                        }
                    )
                    }



                    
                    {/* chat sperson */}
                    {allinfo.map((e, i) => <ChatSP msg={e.wtypedMessage} key={i} />)}



                    {/* type new message and send it */}
                    {/* <TypeMessage/> */}
                    <div className='flex  bg-sky-200 mt-4 absolute top-3/4 pr-56   '>
                        {/* <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full w-80' type="text" placeholder='Type a message'></input> */}
                        <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full w-80' value={typedMessage} name="typedMessage" onChange={e => settypedMessage(e.target.value)} placeholder="Type a message" />
                        <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full text-center w-28' type="text" placeholder='Enter key' value={key} onChange={keyOnChange} ></input>
                        <button className='border-2 mt-6 ml-8 mb-5 border-black rounded-xl px-3 bg-amber-300' onClick={send}>Encrypt and Send</button>
                    </div>
                    {/* <TypeMessage/> */}
                </div>
            </div>
        </div>
    )
}

export default Chatwindow