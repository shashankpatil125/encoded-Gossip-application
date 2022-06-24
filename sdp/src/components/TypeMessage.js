import React,{useState} from 'react'


function TypeMessage() {

    const [typedMessage, settypedMessage] = useState('');
    
    return (
        <div className='flex w-full bg-sky-200 mt-4 '>
            {/* <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full w-80' type="text" placeholder='Type a message'></input> */}
            <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full w-80' value={typedMessage}   name="typedMessage" onChange={e => settypedMessage(e.target.value)} />
            <input className='mt-6 ml-8 mb-5 border-2 border-black p-2 rounded-full text-center w-28' type="text" placeholder='Enter key' ></input>
            <button className='border-2 mt-6 ml-8 mb-5 border-black rounded-xl px-3 bg-amber-300'>Encrypt and Send</button>
        </div>
    )

    
    // typed message stored into hook next stape to pass as prop to chatsp
}

export default TypeMessage; 