import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { signInWithGoogle } from '../Firebase'
import Chats from './Chats'
import axios from 'axios'


function SignIn() {

  const [UserName,setUserName]=useState();
  let value;
  function dalname(event){
    value=event.target.value;
    console.log(value);
  }

  const postd = async (e) =>{
    e.preventDefault();
    
    const res = await fetch("https://eg-app-716e0-default-rtdb.firebaseio.com/.json",
    {
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        max:value
      })
      
    })
    console.log(UserName)

  }

  

  function getd(){
    axios.get("https://eg-app-716e0-default-rtdb.firebaseio.com/.json")
    .then((responce)=>
    {
      console.log(responce.data.value)
    }
    )
  }



  



  return (
    <div className='w-full h-full text-center'>
        <button className='border-2 ' onClick={signInWithGoogle}>Sign In With Google</button>
        
        <br/>
        <input className='border-2 text-center' type="text" placeholder='Enter Name' value={UserName} onChange={dalname}></input>
        <br/>
        <button onClick={getd}>Submit</button>
        <br/>
        {/* <button className='border-2' >Start Your Gossip</button> */}
        <Link to ="/YourChats">Start Your Gossip</Link>
      
    </div>
  )
}

export default SignIn