import React, { useState } from 'react'

const Login = () => {
    const [email , setEmail] = useState('abccw') ;
    // console.log(email)
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center h-[90vh] border '>
            <div className='text-3xl'>
                <h1>Movies</h1>
            </div>
            <div className='text-2xl'>
                <h1>LOGIN</h1>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="Email:" >Email Id:</label>
                <input className= 'border border-red-300'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text" 
                id='name' 
                placeholder='Enter Your Name'
                // disabled = {true}
                />
            </div>
        </div>
    </div>
    
  )
}

export default Login
