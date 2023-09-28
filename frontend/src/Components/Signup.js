import React from 'react'
import '../App.css'
const Signup = () => {
  return (
    <div>
      <h1>Register Here</h1>
      <form action="" className='form'>
      <input className='inputs' type="text" placeholder='Enter Name' />
      <input className='inputs' type="email" placeholder='Enter mail id' />
      <input className='inputs' type="password" placeholder='Enter password' />
      <input className='inputs' type="submit" />
      </form>
    </div>
  )
}

export default Signup;
