import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button(props) {
  return (
    <>
   
        {/* dashboard ,myTask, addTask, calendar, setting button */}

    <div className='w-64 bg-cyan-500 py-3 px-4'>
      
      <button  onClick={props.onClick}   className='flex items-center gap-3 text-white w-full h-10 px-4 rounded bg-cyan-500 hover:bg-cyan-400 transition'>
        
        <FontAwesomeIcon icon={props.icon} className="text-lg" />
        
        <span>{props.name}</span>

      </button>

    </div>
     </>
  )
}

export default Button