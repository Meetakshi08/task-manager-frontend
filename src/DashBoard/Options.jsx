import { faFile, faPlusCircle, faUserPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Options() {
  return (
    <div className='justify-start grid  gap-4 grid-cols-2 grid-rows-2'>
        <button className='bg-white w-72 h-24 text-xl rounded-md border hover:border-cyan-400'>
         <FontAwesomeIcon icon={faPlusCircle} className='pr-2 text-lg'/>
         Add new Task
         </button>


          <button className='bg-white w-72 h-24 text-xl rounded-md border hover:border-cyan-400'>
           <FontAwesomeIcon icon={faFile} className='pr-2'/>
           Create new Project
          <p className='text-sm text-slate-500'>project name</p>
           </button>

         <button className='bg-white w-72 h-24 text-xl rounded-md border hover:border-cyan-400'>
         <FontAwesomeIcon icon={faUserPlus} className='pr-4'/>
          Invite team members
           <p className='text-sm text-slate-500'>team name</p>
        </button>


        <button className='bg-white w-72 h-24 text-xl rounded-md border hover:border-cyan-400'>
         <FontAwesomeIcon icon={faVideo} className='pr-4'/>
          Start a meeting
          <p className='text-sm text-slate-500'> video call</p>
        </button>


    </div>
  )
}

export default Options