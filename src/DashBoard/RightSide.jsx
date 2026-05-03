import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell , faChartBar, faCheck, faCircleMinus, faMagnifyingGlass, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import Tasks from './Tasks'
import { getTasks } from '../axios'
import Options from './Options'
function RightSide() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  // 📊 Stats
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.filter(t => !t.completed).length;
  const progress = total === 0 ? 0 : Math.floor((completed / total) * 100);

  return (
    <div className='flex flex-col justify-start items-center gap-12 px-6 bg-cyan-100 w-full h-screen'>
              
      
              
      <h1 className='text-2xl font-bold'>Dashboard</h1>
       
      {/* Cards */}
      <div className="flex justify-center items-center w-full gap-9">

        <Card 
          name="Total" 
          icon={faPlus} 
          fontStyle="text-blue-600" 
          number={total} 
        />

        <Card 
          name="Completed" 
          icon={faCheck} 
          fontStyle="text-green-700" 
          number={completed}
        />

        <Card 
          name="Progress" 
          icon={faChartBar}
          fontStyle="text-orange-500" 
          number={`${progress}%`}
        />

        <Card 
          name="Pending" 
          icon={faCircleMinus} 
          fontStyle="text-red-500" 
          number={pending}
        />

      </div>

      {/* Task List */}
      <Tasks tasks={tasks} />
<Options/>
        
      

    </div>
  )
}

export default RightSide