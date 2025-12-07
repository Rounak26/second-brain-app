# Second Brain App 🧠

A full-stack application to organize and manage your thoughts, notes, and knowledge - your personal second brain.

## ✨ Features

- 📝 Create, edit, and organize notes
- 🏷️ Tag and categorize content
- 🔍 Search functionality
- 💾 Persistent storage
- 🎨 Modern and intuitive UI
- 🔐 Secure authentication (if applicable)

## 🛠️ Tech Stack

### Backend
- Node.js
- TypeScript
- Express.js (or your framework)
- Database (specify your database)

### Frontend
- React
- TypeScript
- Tailwind CSS (or your styling solution)
- Vite (or your build tool)

## 📁 Project Structure

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm 
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rounak26/second-brain-app.git
   cd second-brain-app
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**
   
   Create `.env` files in both backend and frontend directories:
   
   **Backend `.env`:**
   ```env
   PORT=3000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```
   
   **Frontend `.env`:**
   ```env
   VITE_API_URL=http://localhost:3000
   ```

## 🏃 Running the Application

### Development Mode

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:3000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

### Production Build

1. **Build Backend**
   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

#### Notes
- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

#### Tags
- `GET /api/tags` - Get all tags
- `POST /api/tags` - Create a new tag

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

⭐ If you find this project useful, please consider giving it a star!
