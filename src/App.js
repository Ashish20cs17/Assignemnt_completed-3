import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const BASE_URL = "http://localhost:5000"; // Node backend

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await fetch(`${BASE_URL}/tasks`);
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const addTask = async (text) => {
    try {
      const res = await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: text }),
      });
      const data = await res.json();
      if (data.success) fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  // Mark task completed
  const completeTask = async (id) => {
    try {
      await fetch(`${BASE_URL}/tasks/${id}`, { method: "PUT" });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Task Tracker</h2>
      <TaskForm addTask={addTask} />
      {loading ? <p>Loading tasks...</p> : <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
