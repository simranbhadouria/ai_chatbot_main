# AI HR Chatbot

An AI-powered HR Chatbot built using **React.js**, **Node.js**, **Express.js**, and **Google Gemini API**. The chatbot allows users to ask HR-related questions through a simple web interface. It is designed to be extended into a Retrieval-Augmented Generation (RAG) chatbot that answers only from company HR documents such as PDFs, DOCX, and Excel files.
---

# Project Overview
The AI HR Chatbot provides an intelligent interface where employees can ask HR-related questions. The frontend is built with React, while the backend communicates with Google's Gemini API to generate responses.
Currently, the chatbot answers using Gemini AI. In future versions, it will retrieve information only from company HR documents using ChromaDB and LangChain.
---

# Features
- AI-powered chatbot using Google Gemini API
- Interactive chat interface
- React + Vite frontend
- Express.js backend REST API
- Frontend and Backend integration
- Axios for API communication
- Environment variables using dotenv
- CORS enabled
- JSON Request & Response
- Fast development using Nodemon
- Ready for HR document integration
- Easy to extend with RAG architecture
---

# Technologies Used

## Frontend
- React.js
- Vite
- Axios
- HTML5
- CSS3
- JavaScript (ES6)

## Backend
- Node.js
- Express.js
- Google Gemini API
- dotenv
- CORS


# Project Structure
```
ai_chatbot
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   └── index.js
│   │
│   ├── uploads
│   ├── vectorDB
│   ├── .env
│   ├── package.json
│   └── node_modules
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── node_modules
│
├── README.md
└── .gitignore
```

# System Architecture
                User
                  │
                  ▼
         React Frontend (Vite)
                  │
                  ▼
         Axios HTTP Request
                  │
                  ▼
      Express.js REST API Server
                  │
                  ▼
        Google Gemini API
                  │
                  ▼
          AI Generated Response
                  │
                  ▼
         Display on React UI

# Installation

## Step 1 Clone Repository

```bash
git clone https://github.com/yourusername/ai_chatbot.git
```

## Step 2 Open Project

```bash
cd ai_chatbot
```

## Step 3 Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 4 Install Frontend Dependencies

Open another terminal.

```bash
cd frontend
npm install
```

# Environment Variables

Create a file named:

```
backend/.env
```

Add:

```env
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

# Running the Backend

```bash
cd backend
npm run dev
```

Output:

```
Server running on port 5000
```

Backend URL

```
http://localhost:5000
```

# Running the Frontend

Open another terminal.

```bash
cd frontend
npm run dev
```

Frontend URL

```
http://localhost:5173
```

# API Endpoint

## POST Request

```
POST http://localhost:5000/chat
```

## Request Body

```json
{
  "question": "What is the leave policy?"
}
```

## Response

```json
{
  "success": true,
  "answer": "Employees are eligible for..."
}
```

# Screenshots

## Home Page
```
screenshots/home.png
```
## Chat Interface
```
screenshots/chat.png
```

# Workflow

```
User enters question
        │
        ▼
React sends POST request
        │
        ▼
Express receives request
        │
        ▼
Gemini API generates response
        │
        ▼
Backend returns JSON
        │
        ▼
React displays answer
```

# Author

**Simran Bhadouria**

AI & Machine Learning Intern
