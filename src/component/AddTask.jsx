import React, { useState } from 'react'
import { createTask } from '../axios';

function AddTask() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTask = async () => {
    try {
      await createTask({
        title,
        description,
        date,
        priority,
        completed: false
      });

      alert("Task Added ✅");

      setTitle("");
      setDescription("");
      setDate("");
      setPriority("Medium");

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='w-full p-6 bg-cyan-50 min-h-screen'>

      <h1 className='text-2xl font-bold mb-6'>Add Task</h1>

      <div className='space-y-5 w-96'>

        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
          className='border w-full h-10 px-3 rounded'
        />

        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Description'
          className='border w-full h-20 px-3 rounded'
        />

        <input 
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className='border w-full h-10 px-3 rounded'
        />

        <select 
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className='border w-full h-10 px-3 rounded'
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button 
          onClick={handleAddTask}
          className='bg-cyan-500 text-white px-4 py-2 rounded'>
          Add Task
        </button>

      </div>

    </div>
  )
}

export default AddTask;