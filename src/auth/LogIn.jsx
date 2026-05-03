import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import axios from 'axios'

function LogIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    axios.post("http://localhost:8080/auth/login", {
      email,
      password
    })
    .then(res => {

      const token = res.data.trim()

      // ✅ store JWT
      localStorage.setItem("token", token)

      alert("Login successful")

      window.location.href = "/tasks"
    })
   .catch((error) => {
   console.log(error.response);
   alert(error.response?.data || "Login failed");
})
  }

  return (
    <div className='h-screen flex justify-center items-center bg-gray-200'>
      
      <form onSubmit={handleLogin} className='w-96 bg-white p-6 rounded-lg shadow-md flex flex-col gap-5'>

        <div className='flex flex-col items-center gap-2'>
          <FontAwesomeIcon icon={faLock} className='text-3xl bg-cyan-200 p-3 rounded-full'/>
          <h1 className='text-xl font-semibold'>Welcome Back</h1>
          <p className='text-gray-500'>Login to your account</p>
        </div>

        <div>
          <label>Email</label>
          <div className='flex items-center border rounded-md px-2'>
            <FontAwesomeIcon icon={faEnvelope} className='text-gray-500'/>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full h-10 outline-none pl-2'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label>Password</label>
          <div className='flex items-center border rounded-md px-2'>
            <FontAwesomeIcon icon={faLock} className='text-gray-500'/>
            <input
              type='password'
              placeholder='Enter your password'
              className='w-full h-10 outline-none pl-2'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type='submit' className='bg-cyan-500 text-white h-10 rounded-md hover:bg-cyan-600'>
          Login
        </button>
        

      </form>
    </div>
  )
}

export default LogIn