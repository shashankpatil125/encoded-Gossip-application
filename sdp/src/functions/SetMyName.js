import React, { useState } from 'react'
let yourname
function SetMyName(UserName) {
    console.log(UserName)
    yourname=UserName
    return (
        <p className=' flex-1 text-3xl text-white pt-2'>{yourname}</p>
    )
}

export default yourname