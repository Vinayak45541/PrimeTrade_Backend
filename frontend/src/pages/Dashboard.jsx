import { useEffect, useState } from "react";
import API from "../services/api";
import "../App.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const createTask = async () => {
    if (!title) return alert("Title required");

    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="container">
      
      <div className="header">
        <div>
          <h3>Dashboard</h3>
          <span className="user">
            {user ? `Logged in as: ${user.name}` : "Loading user..."}
          </span>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
      />

      <button className="add-btn" onClick={createTask}>
        Add Task
      </button>

      {tasks.map((task) => (
        <div className="task" key={task._id}>
          <span>{task.title}</span>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}