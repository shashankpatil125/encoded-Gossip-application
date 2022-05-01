import React from 'react'

function Sper() {
  return (
    <div className='border-2 w-80 ml-8 mt-4 rounded-lg float-right mr-8'>
        <div className='divide-y'>
            <p className='p-3 text-xl'>Message</p>
            <div>
                <input type="password" className='border-2 rounded-sm mx-2 text-center w-40' placeholder='Enter Key'></input>
                <button className='p-1 bg-lime-600 rounded-sm border-2'>Decrypt</button>
            </div>
            
        </div>
    </div>
  )
}

export default Sper