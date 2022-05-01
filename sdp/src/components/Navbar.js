import React from 'react'

function Navbar() {
  return (
    <div className='h-16  bg-slate-700'>
      <div className='flex'>
      <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='h-14 w-14 mt-1 ml-10 mr-8'></img>
        <p className=' flex-1 text-3xl text-white pt-2'>Name</p>
      <p className='float-right mt-4 mr-10 text-xl text-white '>Contact us</p>
      </div>
    </div>
  )
}

export default Navbar