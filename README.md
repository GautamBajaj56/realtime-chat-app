# Fullstack Chat App

A full-stack real-time chat application with secure authentication, live messaging, user presence, and profile image uploads.

The project uses a React frontend, an Express backend, MongoDB for persistence, Socket.IO for realtime communication, and Cloudinary for image storage.

## Features

- Real-time chat between authenticated users
- JWT-based authentication with secure cookies
- Protected API routes for messages and profile updates
- Online/offline user presence status
- Profile image upload and Cloudinary image hosting
- Responsive UI built with React, Tailwind CSS, and Zustand
- Backend serves the frontend in production

## Tech Stack

### Frontend

- React 
- Vite
- Tailwind CSS
- Zustand
- Axios
- Socket.IO Client
- React Router

### Backend

- Node.js
- Express
- MongoDB / Mongoose
- Socket.IO
- JWT Authentication
- Cloudinary
- dotenv

## Repository Structure

- `backend/` — Express API, socket server, authentication, message routes, Cloudinary integration
- `frontend/` — React app, pages, chat UI, auth flow
- `package.json` — root helper to install dependencies and build the frontend

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm installed
- MongoDB connection string (MongoDB Atlas or local)
- Cloudinary account credentials

### Install dependencies

From the project root:

```bash
npm install --prefix backend
npm install --prefix frontend
```

### Backend environment variables

Create a `.env` file inside `backend/` with the following values:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Run locally

#### Start backend in development mode

```bash
cd backend
npm run dev
```

#### Start frontend in development mode

```bash
cd frontend
npm run dev
```

The frontend should be available at `http://localhost:5173` and the backend API will connect on the configured `PORT`.

### Build for production

From the project root:

```bash
npm run build
```

This command installs backend and frontend dependencies and builds the frontend production bundle.

### Start the production server

```bash
npm run start
```

The Express backend will serve the frontend build when `NODE_ENV=production`.

## Scripts

### Root

- `npm run build` — install dependencies for backend/frontend and build the frontend
- `npm run start` — start the backend server

### Backend

- `npm run dev` — start backend with `nodemon`
- `npm start` — start backend with Node

### Frontend

- `npm run dev` — launch Vite development server
- `npm run build` — build production assets
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Notes

- The backend uses cookies to store JWT tokens and protects routes with middleware.
- Profile pictures are uploaded to Cloudinary before being saved to MongoDB.
- In production, the backend will serve the frontend static files from `frontend/dist`.

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Media storage: Cloudinary


