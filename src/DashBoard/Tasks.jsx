import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Tasks() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    axios.get("https://task-manager-backend-2-qbwk.onrender.com/api/tasks")
      .then((res) => {
        setTasks(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <div className="w-full p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Tasks</h1>
      </div>

      {/* Tasks */}
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="bg-white p-3 my-2 rounded shadow">
            <h3 className='font-bold'>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))
      )}

    </div>
  )
}

export default Tasks