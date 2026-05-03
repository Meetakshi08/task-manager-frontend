import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


function NavBar() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center text-cyan-500 px-6 py-4'>
        <div className='flex items-center'>
        <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center rounded-lg">
      <FontAwesomeIcon icon={faCheck} className="text-white text-xl" />
    </div>
    <h1  className='text-xl font-bold'>Task Manager</h1>
        </div>
       
    <div className='flex gap-6 text-lg'>
      <button className='hover:underline hover:decoration-cyan-500  transition'>Home</button>
      <button className='hover:underline hover:decoration-cyan-500'>Features</button>
      <button onClick={()=> navigate("/dashboard")}  className='bg-cyan-500 text-white rounded w-36 h-10 hover:bg-slate-300'>Get Started</button>

    </div>
   
        
    </div>
  )
}

export default NavBar