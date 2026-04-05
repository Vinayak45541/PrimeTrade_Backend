# 🚀 PrimeTrade Backend Assignment

## 📌 Overview

This project implements a scalable REST API with authentication and role-based access, along with a minimal frontend to demonstrate API interaction.

The system is designed with clean architecture, security best practices, and modular scalability in mind.

---

## 🧱 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)

### Frontend

* React (Vite)
* Axios

### Tools

* Postman (API Testing)

---

## 🔐 Features

### Authentication

* User registration & login
* Secure password hashing (bcrypt)
* JWT-based authentication
* Persistent login using token

### Role-Based Access

* User roles supported (user/admin ready)
* Middleware-based authorization

### Task Management

* Create task
* View tasks (user-specific)
* Delete task
* Protected CRUD operations

### Security

* Input validation
* Protected routes
* Token-based access control
* Environment variable configuration

---

## 🖥️ Frontend Features

* Register & Login UI
* Protected Dashboard
* Task creation & deletion
* Displays logged-in user
* API integration with Axios
* Clean and minimal UI

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Vinayak45541/PrimeTrade_Backend.git
cd primetrade-assignment
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

Run frontend:

```bash
npm run dev
```

---

## 📬 API Endpoints

### 🔐 Auth

* `POST /api/v1/auth/register`
* `POST /api/v1/auth/login`

### 📦 Tasks

* `GET /api/v1/tasks`
* `POST /api/v1/tasks`
* `DELETE /api/v1/tasks/:id`

---

## 📄 API Documentation

Postman collection is included:

```bash
backend/primetrade-api.postman_collection.json
```

Import this file into Postman to test all APIs.

---

## 🔑 Environment Variables

### Backend (`.env.example`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend (`.env.example`)

```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

## 📈 Scalability Notes

* Modular folder structure for easy feature expansion
* Can be split into microservices (auth, tasks)
* Redis caching for high-frequency queries
* Load balancing using Nginx
* Docker support for containerized deployment

---

## 🚀 Future Improvements

* Role-based admin dashboard
* Update task functionality
* Rate limiting
* Logging (Winston)
* Docker deployment

---

## 👨‍💻 Author

Vinayak
