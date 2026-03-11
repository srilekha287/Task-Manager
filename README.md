# Task Manager (Django + React + JWT)

A full-stack **Task Manager Application** built using **Django REST API** for the backend and **React** for the frontend with **JWT Authentication**.

This application allows users to register, login, and manage their personal tasks securely.

---

## 🚀 Features

- User Registration
- User Login (JWT Authentication)
- Create Tasks
- View Tasks
- Delete Tasks
- Protected APIs using JWT tokens

---

## 🛠 Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- JWT Authentication
- SQLite Database

### Frontend
- React
- Axios
- React Router

---

---

# ⚙️ Backend Setup

### 1️⃣ Create Virtual Environment
```bash
python -m venv venv
```

### 2️⃣ Activate Virtual Environment

Windows:
```bash
venv/Scripts/activate
```

### 3️⃣ Install Dependencies
```bash
pip install django
pip install djangorestframework
pip install djangorestframework-simplejwt
pip install django-cors-headers
```

### 4️⃣ Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5️⃣ Run Server
```bash
python manage.py runserver
```

---

# ⚛️ Frontend Setup

### 1️⃣ Install Dependencies
```bash
cd frontend
npm install
```

### 2️⃣ Install Required Packages
```bash
npm install axios react-router-dom
```

### 3️⃣ Start React App
```bash
npm run dev
```

---

# 🔑 API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| POST | /api/register/ | Register new user |
| POST | /api/login/ | Login and get JWT token |
| GET | /api/tasks/ | Get all tasks |
| POST | /api/tasks/create/ | Create task |
| DELETE | /api/tasks/delete/{id}/ | Delete task |

---

# 🔐 Authentication

This project uses **JWT Authentication**.

---

# 📌 Future Improvements

- Update Task
- Task Status (Complete / Pending)
- User Profile
- Docker Deployment
- PostgreSQL Database
- Responsive UI

---
# Output
<img width="1366" height="768" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/64b37ef1-f981-4344-a461-f4a131bafafd" />

# 👩‍💻 Author

Srilekha Pandla

---

