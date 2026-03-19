import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return alert("All fields required");
    }

    try {
      const res = await API.post("/auth/register", form);

      // ✅ Store BOTH token + user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: res.data.name,
          email: res.data.email
        })
      );

      // 🔥 Force clean navigation
      window.location.href = "/dashboard";

    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Register</button>
      </form>

      <span className="link" onClick={() => navigate("/")}>
        Already have an account? Login
      </span>
    </div>
  );
}