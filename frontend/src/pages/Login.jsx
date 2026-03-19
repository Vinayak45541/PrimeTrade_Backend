import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return alert("All fields required");
    }

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: res.data.name,
          email: res.data.email
        })
      );

      window.location.href = "/dashboard";

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>

      <span className="link" onClick={() => navigate("/register")}>
        Don't have an account? Register
      </span>
    </div>
  );
}