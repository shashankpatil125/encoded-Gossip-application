import React, { useState } from 'react'
import Cwarr1 from './Cwarr1';


function Cw1() {

  // const [all, setall]=useState([])
  // let copyall=all
  // copyall.push(typed)
  





  const [typed, settyped] = useState([]);
  const [a, seta] = useState({
    name: "",
    address: "",
    roomno: "",
    phoneno: ""

  })

  
  function setfn(e) {
    let { name, value } = e.target
    seta({ ...a, [name]: value })
  }
  function fseta() {
    settyped([...typed,a])
    // setall(...all,typed)
  }
  // function alllist(){
  // }
 
  return (
    <div>
      <div>
        <p>name</p>
        <input type="text" className='border-2' name="name" value={a.name} onChange={setfn}></input>
        <p>address</p>
        <input type="text" className='border-2' name="address" value={a.address} onChange={setfn}></input>
        <p>room no</p>
        <input type="text" className='border-2' name="roomno" value={a.roomno} onChange={setfn}></input>
        <p>phone no</p>
        <input type="text" className='border-2' name="phoneno" value={a.phoneno} onChange={setfn}></input>
        <button onClick={fseta}>Submit</button>
        {typed.map((e,i)=><Cwarr1 roomno={e.name} key={i}/>)}
      </div>
    </div>
  )
}

export default Cw1;