import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { signInWithGoogle } from '../Firebase'
import axios from 'axios'
import SetMyName from '../functions/SetMyName';
import { useLocation } from "react-router-dom"

function SignIn() {

  const [myname, settypedname] = useState('');
  let value;
  localStorage.setItem('Name',myname)

  const postd = async (e) => {
    e.preventDefault();

    const res = await fetch("https://eg-app-716e0-default-rtdb.firebaseio.com/.json",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          max: value
        })

      })
    console.log(myname)

  }



  function getd() {
    axios.get("https://eg-app-716e0-default-rtdb.firebaseio.com/.json")
      .then((responce) => {
        console.log(responce.data.value)
      }
      )
  }


  return (
    
    <div className="text-center my-20 h-fit">
      <div className=" h-fit border-2 border-slate-600 rounded-lg w-80 inline-block align-middle bg-white hover:shadow-2xl pb-10">
        <h1 className="text-center text-3xl mb-5">Welcome to landing page</h1>
        <button className="border-2 px-10 py-2 rounded-full mb-4 bg-red-700 text-slate-300 hover:text-zinc-900 hover:bg-white transition-transform hover:shadow-2xl" onClick={signInWithGoogle}>Sign In With Google</button>
        <br />
        <input className="border-2 px-10 py-2 rounded-full bg-sky-300 text-white text-slate-300 hover:text-zinc-900 hover:bg-white transition-transform hover:shadow-2xl" type="text" placeholder='Enter Name' name="name" value={myname} onChange={e => settypedname(e.target.value)}></input>
        <br />
        {/* <button onClick={getd}>Submit</button> */}
        <br />
        {/* <button className='border-2' >Start Your Gossip</button> */}
        <Link to={'/YourChats?myname=' + myname} className="border-2 px-10 mb-16 py-2 rounded-full bg-cyan-600 text-slate-300 hover:text-zinc-900 hover:bg-white transition-transform">Start Your Gossip</Link>
      </div>
    </div>



  )
}

export default SignIn