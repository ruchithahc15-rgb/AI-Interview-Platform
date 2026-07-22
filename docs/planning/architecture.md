# AI Interview Platform Architecture

## High-Level Architecture

User
↓
Browser
↓
Frontend (React + Next.js)
↓
Backend API (FastAPI)
↓
PostgreSQL Database
↓
AI Service
↓
Response
↓
Frontend
↓
User

---

## Responsibilities

### Frontend

- User Interface
- Forms
- Dashboards
- Authentication Screens

### Backend

- APIs
- Business Logic
- Authentication
- AI Integration

### Database

- Users
- Resumes
- Scores
- Reports

### AI

- Resume Analysis
- ATS Score
- Interview Questions
- Mock Interview

"The frontend sends HTTP requests to the FastAPI backend. The backend validates the request, stores or retrieves data from PostgreSQL, communicates with the AI service when needed, and returns a JSON response that the frontend renders."