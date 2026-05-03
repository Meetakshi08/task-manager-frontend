import React, { useEffect, useState } from 'react'
import { getTasks, deleteTask, markCompleted } from '../axios';

function MyTask() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 Due Date Status Logic
  const getDateStatus = (taskDate) => {
    if (!taskDate) return "future";

    const today = new Date();
    const due = new Date(taskDate);

    // remove time
    today.setHours(0,0,0,0);
    due.setHours(0,0,0,0);

    if (due < today) return "overdue";
    if (due.getTime() === today.getTime()) return "today";
    return "future";
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleComplete = async (id) => {
    await markCompleted(id);
    fetchTasks();
  };

  // 🔥 Sort tasks (overdue first)
  const sortedTasks = [...tasks].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div className='w-full p-6 bg-cyan-50 min-h-screen'>

      <h1 className='text-2xl font-bold mb-6'>My Tasks</h1>

      {sortedTasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        sortedTasks.map(task => {

          const status = getDateStatus(task.date);

          return (
            <div 
              key={task.id} 
              className={`p-4 mb-4 rounded-lg shadow flex justify-between items-center transition
                ${status === "overdue" ? "bg-red-100 border-l-4 border-red-500" : ""}
                ${status === "today" ? "bg-yellow-100 border-l-4 border-yellow-500" : ""}
                ${status === "future" ? "bg-white" : ""}
              `}
            >

              {/* LEFT SIDE */}
              <div className="space-y-1">

                <h2 className={`text-lg ${
                  task.completed ? "line-through text-gray-400" : "font-bold"
                }`}>
                  {task.title}
                </h2>

                <p className="text-gray-600">{task.description}</p>

                {/* DATE + STATUS */}
                <p className='text-sm'>
                  Due: {task.date || "No date"}
                  
                  <span className={`ml-2 px-2 py-1 rounded text-xs font-medium
                    ${status === "overdue" ? "bg-red-500 text-white" : ""}
                    ${status === "today" ? "bg-yellow-500 text-white" : ""}
                    ${status === "future" ? "bg-gray-300 text-black" : ""}
                  `}>
                    {status}
                  </span>
                </p>

                {/* PRIORITY */}
                <p className='text-sm text-gray-500'>
                  Priority: {task.priority}
                </p>

              </div>

              {/* RIGHT SIDE BUTTONS */}
              <div className='flex gap-2'>

                {!task.completed && (
                  <button 
                    onClick={() => handleComplete(task.id)}
                    className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'>
                    Complete
                  </button>
                )}

                <button 
                  onClick={() => handleDelete(task.id)}
                  className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
                  Delete
                </button>

              </div>

            </div>
          );
        })
      )}

    </div>
  )
}

export default MyTask;