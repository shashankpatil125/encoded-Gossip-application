import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { signInWithGoogle } from '../Firebase'
import Chats from './Chats'

function SignIn() {
  return (
    <div className='w-full h-full text-center'>
        <button className='border-2 ' onClick={signInWithGoogle}>Sign In With Google</button>
        <br/>
        {/* <button className='border-2' >Start Your Gossip</button> */}
        <Link to ="/YourChats">Start Your Gossip</Link>
        {/* <Outlet/>   */}
    </div>
  )
}

export default SignIn