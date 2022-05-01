import React from 'react'
import Fper from './Fper'
import Sper from './Sper'

function Chatwindow() {
    return (
        
        <div className='w-full max-h-64/6 '>
            {/* chatsection navbar */}
            <div className='w-full '>
                <div className='bg-amber-500  flex p-2'>
                    <img className='h-14 w-14' src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' alt='img'></img>
                    <p className='mt-3 font-semibold  text-2xl ml-4'>Name</p>
                </div>
            </div>
            {/* chatsection navbar */}

            {/* actual gossips */}

            <div className=''>
            <Fper/>
            <Sper/>
            </div>

            {/* actual gossips */}

            {/* footer chat */}
            
            {/* footer chat */}
        </div>
    )
}

export default Chatwindow