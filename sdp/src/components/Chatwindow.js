import React from 'react'

function Chatwindow() {
    return (

        <div className='flex  w-full '>
            <div className='flex-1  bg-slate-200  '>

                <div className='  w-96 overflow-scroll h-full'>
                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>

                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>
                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>

                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>
                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>

                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>
                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>

                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>
                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>

                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>
                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>

                    <div className='m-4 flex bg-violet-300 p-4 rounded-lg'>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='w-10 h-10 '></img>
                        <p className='mt-1 ml-4 text-xl'>Name</p>
                    </div>
                </div>

            </div>



            <div className='w-full h-fit'>
                <div className='bg-sky-200 w-full h-fit fixed'>
                    <div className='flex  bg-sky-200 '>
                        <img src='https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png' className='h-14 w-14 m-4'></img>
                        <p className='text-2xl mt-7 font-semibold'>Name</p>
                    </div>
                </div>

                <div className='pt-16 mt-12 w-full'>
                    {/* chat fperson */}
                    <div className='w-80 mx-16 h-fit text-center text-2xl border-2 rounded-2xl'>
                        <p className=' p-4'>hello helo helo helo hsgef hsegf sdf skjefhksj efaf hafka fkaf ahgfka fkagfkajgf kaf efgagf kjaf aef ajegf</p>
                        <div className='flex'>
                            <input type="password" className='border-2 w-36 my-3 mx-4' placeholder='Enter Key'></input>
                            <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1'>Decript</button>
                        </div>
                    </div>

                    {/* chat sperson */}
                    <div className='flex justify-end'>
                        <div className='w-80 mx-16 h-fit text-center text-2xl border-2 rounded-2xl justify-end'>
                            <p className=' p-4'>hello helo helo helo hsgef hsegf sdf skjefhksj efaf hafka fkaf ahgfka fkagfkajgf kaf efgagf kjaf aef ajegf</p>
                            <div className='flex'>
                                <input type="password" className='border-2 w-36 my-3 mx-4' placeholder='Enter Key'></input>
                                <button className='rounded-lg bg-lime-600 h-12 px-3 mt-1'>Decript</button>
                            </div>
                        </div>
                    </div>


                    

                </div>
            </div>


        </div>
    )
}

export default Chatwindow