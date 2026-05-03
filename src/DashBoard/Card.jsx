import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Card(props) {
  return (
    <>
    {/* total, pendin, completed , progress card   */}
    <div className='w-48 h-32 bg-slate-200 rounded-lg items-center justify-center flex flex-col cursor-pointer'>
 <FontAwesomeIcon icon={props.icon} className={props.fontStyle}></FontAwesomeIcon>
  <h1 className='text-gray-600 text-lg font-bold'>{props.name}</h1>
  <h2 className='text-lg'>{props.number}</h2>
    </div>
    </>
  )
}

export default Card