# Avidus Assessment Task Manager

A full-stack MERN application with Role-Based Access Control (RBAC), task management, admin dashboard, analytics, and activity logging.

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

## User Features
- Create Tasks
- View Own Tasks
- Update Tasks
- Delete Tasks

## Admin Features
- View All Users
- Manage User Status
- Delete Users
- Monitor All Tasks
- Delete Any Task
- View Analytics
- View Activity Logs

## Security
- JWT-based Authentication
- Role-Based Authorization
- Protected APIs
- User Ownership Validation

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

# Folder Structure

## Backend

```bash
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
```

## Frontend

```bash
frontend/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

---

# Environment Variables

Create a `.env` file inside backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# Installation

## Clone Repository

```bash
git clone <your-repo-link>
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# API Documentation

# Auth APIs

## Register User

### POST `/api/auth/register`

Request Body:

```json
{
  "name": "Piyush",
  "email": "piyush@gmail.com",
  "password": "123456"
}
```

---

## Login User

### POST `/api/auth/login`

Request Body:

```json
{
  "email": "piyush@gmail.com",
  "password": "123456"
}
```

---

# Task APIs

## Create Task

### POST `/api/tasks`

Headers:

```bash
Authorization: Bearer TOKEN
```

Request Body:

```json
{
  "title": "Build Dashboard",
  "description": "Complete admin panel UI"
}
```

---

## Get My Tasks

### GET `/api/tasks`

---

## Update Task

### PUT `/api/tasks/:id`

Request Body:

```json
{
  "status": "completed"
}
```

---

## Delete Task

### DELETE `/api/tasks/:id`

---

# Admin APIs

## Get All Users

### GET `/api/admin/users`

---

## Update User Status

### PATCH `/api/admin/users/:id/status`

Request Body:

```json
{
  "status": "inactive"
}
```

---

## Delete User

### DELETE `/api/admin/users/:id`

---

## Get All Tasks

### GET `/api/admin/tasks`

---

## Delete Any Task

### DELETE `/api/admin/tasks/:id`

---

## Get Analytics

### GET `/api/admin/analytics`

---

# Activity Log APIs

## Get Activity Logs

### GET `/api/activity`

---

# Role Permissions

## Admin
- View all users
- Manage users
- View all tasks
- Delete any task
- View analytics
- View activity logs

## User
- Create own tasks
- View own tasks
- Update own tasks
- Delete own tasks

---

# Future Improvements

- Pagination
- Search & Filters
- Dark Mode
- Email Notifications
- Profile Management

---

# Author

Piyush Aggarwal