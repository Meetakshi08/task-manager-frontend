import React from "react";

function Tasks({ tasks }) {
  return (
    <div className="w-full p-4">

      <h1 className="text-xl font-bold mb-4">Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id || task.taskId}
            className="bg-white p-3 my-2 rounded shadow"
          >
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default Tasks;