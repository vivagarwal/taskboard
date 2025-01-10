# 🚀 TaskBoard - Task Management Application

🎉 Welcome to **TaskBoard**! This is a full-stack task management application inspired by Jira, designed to simplify task tracking and organization. Users can create, update, and shuffle tasks across categories such as `To Do`, `In Progress`, `Under Review`, and `Completed`.

---

## 🌐 Live Demo

Check out the live application here:

🔗 [https://taskboard-frontend.onrender.com/](https://taskboard-frontend.onrender.com/)  

---

### 🎥 Application Demo

![Application Demo](media/demo_task_board.gif)

---

## 🌟 Features

- 🛠 **Task Management**: Create, update, delete, and manage tasks seamlessly.
- 🚀 **Drag-and-Drop**: Shuffle tasks across columns based on their progress.
- 🔒 **Secure Authentication**: JWT-based authentication for user login and registration.
- 📅 **Task Categorization**: Tasks organized by status (`To Do`, `In Progress`, etc.).
- 📋 **Priority and Deadlines**: Set priority levels and deadlines for tasks.
- 🌐 **Full-Stack Solution**: React-based frontend with Express and MongoDB backend.

---

## 🖥️ Technologies Used

- **Frontend**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Backend**: [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: JSON Web Tokens (JWT)
- **Hosting**:
  - Frontend: [Render](https://render.com/)
  - Backend: [Render](https://render.com/)

---

## 🚀 API Endpoints

Here’s a quick overview of the API endpoints:

### Authentication
- **POST** `/api/auth/register`  
  Register a new user.

- **POST** `/api/auth/login`  
  Authenticate and log in an existing user.

---

### Task Management
- **GET** `/api/tasks`  
  Fetch all tasks for the authenticated user.

- **POST** `/api/tasks`  
  Create a new task for the user.

- **GET** `/api/tasks/:id`  
  Fetch details of a specific task.

- **PUT** `/api/tasks/:id`  
  Update a specific task.

- **DELETE** `/api/tasks/:id`  
  Delete a specific task.

---

## 🔧 How to Run the Project Locally

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/vivagarwal/taskboard.git
cd taskboard
```

---

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following:
   ```plaintext
   MONGO_URI=<Your MongoDB Connection String>
   SECRET_KEY=<Your JWT Secret Key>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

   The backend will run at `http://localhost:8080`.

---

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory and add the following:
   ```plaintext
   VITE_BASE_URL=http://localhost:8080
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

   The frontend will run at `http://localhost:5173`.

---

## 📦 Deployment

### Backend Deployment on Render:
1. Push your backend code to a GitHub repository.
2. Log in to [Render](https://render.com/) and create a new **Web Service**.
3. Add the environment variables:
   - `MONGO_URI`
   - `SECRET_KEY`
4. Deploy the backend and note the live URL.

### Frontend Deployment on Render:
1. Push your frontend code to a GitHub repository.
2. Log in to [Render](https://render.com/) and create a new **Web Service**.
3. Add the environment variable:
   - `VITE_BASE_URL` (set this to your live backend URL).
4. Deploy the frontend.

---

## 📝 Example API Calls

Here are a few example requests:

### Create a Task
```json
POST /api/tasks

{
  "title": "Complete Documentation",
  "description": "Write the README for TaskBoard",
  "status": "To Do",
  "priority": "High",
  "deadline": "2025-01-20"
}
```

**Response**:
```json
{
  "message": "Task created successfully",
  "task": {
    "_id": "abc123",
    "title": "Complete Documentation",
    "description": "Write the README for TaskBoard",
    "status": "To Do",
    "priority": "High",
    "deadline": "2025-01-20",
    "user": "xyz456"
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 🔒 License

This project is licensed under the MIT License.

---

## 📬 Contact

For any questions, feel free to reach out via email or open an issue in the repository.

---

🎉 **Thank you for checking out the project! Happy Coding!**