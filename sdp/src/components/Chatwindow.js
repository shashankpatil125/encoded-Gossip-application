import React from 'react'
import ChatChannelName from './ChatChannelName';
import Mainalgo from './Mainalgo';
function Chatwindow() {

    // function for encrypt message

    // rotate an array which is chenged 
    // const String = "abcxyz"
    // let key=2
    // const chenged = ["a", "b", "c", "d","e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // for (let j = 0; j < key; j++) {
    //     for (let i = 0; i < 25; i++) {
    //         let temp=chenged[i];
    //         chenged[i]=chenged[i+1]
    //         chenged[i+1]=temp;
    //     }
    // }


    // const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    // let s="";
    // for (let i = 0; i < String.length; i++) {
    //     for (let j = 0; j < 26; j++) {
    //         // console.log(j)
    //         if (String.charAt(i) == alphabet[j]) {
    //             console.log(chenged[j])
    //             s = s.concat(chenged[j]);
                
                
    //         }
    //     }
    // }
    // // console.log(chenged);
    // console.log(String)
    // console.log("key "+key)
    // console.log(s)

    let msg="abc xyz i am react developer i like to develope inovative things and secured things "; 
    


    return (

        <div className='flex  w-full '>
            <div className='flex-1  bg-slate-200  '>
                <div className='  w-96 overflow-scroll h-full'>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
                    <ChatChannelName/>
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
                    <div className='w-80 mx-16 h-fit text-center text-2xl border-2 rounded-2xl'>
                        {/* <p className=' p-4'>hello helo helo helo hsgef hsegf sdf skjefhksj efaf hafka fkaf ahgfka fkagfkajgf kaf efgagf kjaf aef ajegf</p> */}
                        <p className=' p-4'>{msg}</p>
                        <div className='flex'>
                            <input type="password" className='border-2 w-36 my-3 mx-4' placeholder='Enter Key'></input>
                            {/* <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1'>Decript</button> */}
                            <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1' onClick={msg=Mainalgo(msg,2)}>Decript</button>
                        </div>
                    </div>

                    {/* chat sperson */}
                    <div className='flex justify-end'>
                        <div className='w-80 mx-16 h-fit text-center text-2xl border-2 rounded-2xl justify-end'>
                            <p className=' p-4'>hello helo helo helo hsgef hsegf sdf skjefhksj efaf hafka fkaf ahgfka fkagfkajgf kaf efgagf kjaf aef ajegf</p>
                            <div className='flex'>
                                <input type="password" className='border-2 w-36 my-3 mx-4' placeholder='Enter Key'></input>
                                <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1'>Decript</button>
                            </div>
                        </div>
                    </div>

                    {/* type new message and send it */}
                    <div className='flex w-full bg-sky-200 mt-4 '>
                        <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full w-80' type="text" placeholder='Type a message'></input>
                        <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full text-center w-28' type="text" placeholder='Enter key'></input>
                        <button className='border-2 mt-6 ml-8 mb-5 border-black rounded-xl px-3 bg-lime-300'>Encrypt and Send</button>


                    </div>
                </div>


            </div>


        </div>
    )
}

export default Chatwindow