import React, { useState } from 'react'

function Chatchannel() {

    const[name,setname]=useState("Name")
    


  return (
    <div>
        <div className='flex p-2 px-6'>
        <img className='h-11 w-11' src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png'></img>
        <p className='pt-2 pl-4 text-2xl  text-white'>{name}</p>
        </div>

    </div>
  )
}

export default Chatchannel