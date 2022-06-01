import React, { useState } from 'react'
import Cw1 from './Cw1'


function Cwlist() {

  const [namelist,setnamelist]=useState([])
  
  function setit(){
    
    console.log(namelist)
  }

  return (
    <div>
      <Cw1></Cw1>
      <button onClick={setit}>max</button>


    </div>


  )
}

export default Cwlist
