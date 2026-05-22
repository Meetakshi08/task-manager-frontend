import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/tasks",
  headers: {
    "Content-Type": "application/json",
  },
});

// GET all tasks
export const getTasks = () => API.get("");

// CREATE task
export const createTask = (task) => API.post("", task);

// UPDATE task
export const updateTask = (id, task) =>
  API.put(`/${id}`, task);

// DELETE task
export const deleteTask = (id) =>
  API.delete(`/${id}`);

// MARK TASK AS COMPLETED
export const markCompleted = (id) =>
  API.patch(`/${id}/complete`);