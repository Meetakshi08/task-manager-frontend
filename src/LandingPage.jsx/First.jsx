import React from 'react'
import clock from "../assets/clock.png";
import { useNavigate } from "react-router-dom";

function First() {
    const navigate = useNavigate();

  return (
    <div className='px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-20'>
      
      {/* Left Content */}
      <div className='max-w-xl space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Organize Your <span className='text-cyan-500'>Tasks</span>
        </h1>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Stay Productive</h1>

        <p className='text-gray-600 text-lg'>
          A modern task management app to boost your productivity. 
          Create, organize, and track your tasks effortlessly.
        </p>

        <div className='flex gap-4 pt-2'>
          <button  onClick={() => navigate("/dashboard")} className='bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition'>
            Get Started Free
          </button>
          <button className='bg-slate-200 text-cyan-600 px-6 py-2 rounded-lg hover:bg-slate-300 transition'>
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className='flex justify-center'>
        <img src={clock} alt='clock' className='h-64 md:h-80' />
      </div>

    </div>
  )
}

export default First