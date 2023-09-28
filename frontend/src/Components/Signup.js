import React from 'react'
import '../App.css'
const Signup = () => {
  return (
    <div>
      <h1>Register Here</h1>
      <form action="" className='form'>
      <input type="text" placeholder='Enter Name' />
      <input type="email" placeholder='Enter mail id' />
      <input type="password" placeholder='Enter password' />
      <input type="submit" />
      </form>
    </div>
  )
}

export default Signup;
