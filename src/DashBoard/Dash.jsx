import React from 'react'
import Button from './Button'
import { faList, faCalendar, faGear, faGripLines, faHardDrive, faHouse } from '@fortawesome/free-solid-svg-icons'
import RightSide from './RightSide'
import { useNavigate } from 'react-router-dom'

function Dash() {
  const navigate = useNavigate();
  return (
    <>
    {/* dashboard ,myTask, addTask, calendar, setting button */}
    <div className='bg-cyan-600 w-64 h-screen flex flex-col py-6 gap-2'>

      <h1 className='text-white text-2xl font-bold px-6 mb-4'>
        Task Manager
      </h1>

      <Button onClick={()=> navigate("/")} icon={faHouse} name="Home"/>
      <Button onClick={()=> navigate("/dashboard")} icon={faGripLines}  name="Dashboard" />
      <Button onClick={()=> navigate("/tasks")}icon={faList} name="My Tasks" />
      <Button onClick={()=> navigate("/add")} icon={faHardDrive} name="Add Tasks" />
      {/* <Button icon={faCalendar} name="Calendar" /> */}
      

    
    </div>

    </>
    
  )
}

export default Dash