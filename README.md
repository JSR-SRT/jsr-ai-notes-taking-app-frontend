JSR AI Note-Taking App

## Overview

A full-stack, scalable note-taking app built with React and Tailwind CSS on the frontend, and Node.js, Express.js, and MongoDB on the backend. The application features secure authentication, intuitive note management (create, edit, delete, pin), intelligent search, and community publishing. It is architected with a modular design and fully integrated with OpenAI, enabling context-aware Q&A powered by Retrieval-Augmented Generation (RAG) for personalized note insights.

---

## Features

### Core Features

- **User Authentication**: Secure login and signup functionality with session persistence.
- **Dashboard**: A personalized dashboard for managing notes.
- **Note Management**:
  - Create, edit, delete, and pin notes.
  - Publish notes to make them publicly accessible.
- **Public Profiles**:
  - View other users' public profiles and their published notes.

### Advanced Features

- **Semantic Search**:
  - Search notes using vector embeddings for more accurate and meaningful results.
- **AI-Powered Q&A**:
  - Ask questions about a user's public notes, and get AI-generated answers using OpenAI's GPT model.

---

## Technologies Used

### Frontend

- **React 19**: For building the user interface.
- **React Router**: For client-side routing.
- **Tailwind CSS**: For styling the application.
- **Axios**: For making HTTP requests.

### Backend

- **Node.js**: For building the server-side application.
- **Express.js**: For handling API routes.
- **MongoDB**: For storing user data and notes.
- **OpenAI GPT**: For AI-powered question answering.

---
