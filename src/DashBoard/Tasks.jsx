import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Tasks() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      window.location.href = "/login"
      return
    }

    axios.get("http://localhost:8080/api/tasks", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setTasks(res.data)
    })
    .catch(() => {
      alert("Unauthorized - Please login again")
      localStorage.removeItem("token")
      window.location.href = "/login"
    })

  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  return (
    <div className="w-full p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Tasks</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Tasks */}
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="bg-white p-3 my-2 rounded shadow">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))
      )}

    </div>
  )
}

export default Tasks