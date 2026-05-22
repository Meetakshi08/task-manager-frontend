import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-backend-2-qbwk.onrender.com/api/tasks"
});

// GET all tasks
export const getTasks = () => API.get("");

// CREATE task
export const createTask = (task) => API.post("", task);

// UPDATE task
export const updateTask = (id, task) => API.put(`/${id}`, task);

// DELETE task
export const deleteTask = (id) => API.delete(`/${id}`);

// COMPLETE task
export const markCompleted = (id) =>
  API.patch(`/${id}/complete`);