# 🚀 TaskBoard - Task Management Application

🎉 Welcome to **TaskBoard**! This is a full-stack task management application inspired by Jira, designed to simplify task tracking and organization. Users can create, update, and shuffle tasks across categories such as `To Do`, `In Progress`, `Under Review`, and `Completed`.

---

## 🌐 Live Demo

Check out the live application here:

🔗 [https://taskboard-frontend.onrender.com/](https://taskboard-frontend.onrender.com/)  
---

## 🌟 Features

- 🛠 **Task Management**: Create, update, delete, and manage tasks seamlessly.
- 🚀 **Drag-and-Drop**: Shuffle tasks across columns based on their progress.
- 🔒 **Secure Authentication**: JWT-based authentication for user login and registration.
- 📅 **Task Categorization**: Tasks organized by status (`To Do`, `In Progress`, etc.).
- 📋 **Priority and Deadlines**: Set priority levels and deadlines for tasks.
- 🌐 **Full-Stack Solution**: React-based frontend with Express and MongoDB backend.

---

---

### 🎥 Application Demo

![Application Demo](media/demo_task_board.gif)

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

Setting Up the Backend

1. Navigate to the backend directory:
```bash
cd backend

2.Install the required dependencies:
```bash
npm install

3.Create a .env file in the backend directory with the following variables:
env
MONGO_URI=<Your MongoDB URI>
SECRET_KEY=<Your JWT Secret Key>
Replace <Your MongoDB URI> with your MongoDB connection string and <Your JWT Secret Key> with a secure key.

4.Start the backend server:
```bash
npm start
The backend server will run on http://localhost:8080 by default.

Setting Up the Frontend

1.Navigate to the frontend directory:

```bash
Copy code

2.Install the required dependencies:

```bash
Copy code

3.Create a .env file in the frontend directory with the following variable:

env
VITE_BASE_URL=http://localhost:8080
This sets the base URL for API requests to point to your local backend server.


4.Start the frontend development server:

```bash
npm run dev
The frontend application will run on http://localhost:5173 by default.


## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 🔒 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 📬 Contact

For any questions, feel free to reach out via email or open an issue in the repository.

---

🎉 **Thank you for checking out the project! Happy Coding!**

---

Let me know if you'd like further modifications!

