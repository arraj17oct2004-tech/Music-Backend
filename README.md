# 🎵 Music Application Backend

A backend-focused Music Application built using Node.js, Express.js, MongoDB, and Mongoose.

---

## Features

### Authentication & Security

* JWT Authentication
* Role-Based Authorization
* Password Hashing using bcryptjs
* Protected Routes
* Token Validation Middleware
* Cookie Handling using cookie-parser

### Music Management

Artists can:

* Upload music files
* Create albums
* View all music
* View all albums

Users can:

* View all music
* View all albums

### File Storage

* File Upload Handling with Multer
* Cloud Storage Integration using ImageKit

### Backend Architecture

* Routes
* Controllers
* Services
* Models
* Middlewares
* Database Layer

---

## Database Schemas

### User

Stores user information including:

* Username
* Email
* Password
* Role (User / Artist)

### Music

Stores music information including:

* Title
* Artist
* Music URL
* Related Metadata

### Album

Stores album information including:

* Album Title
* Artist
* Songs List

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## NPM Packages Used

* bcryptjs
* jsonwebtoken
* multer
* cookie-parser
* mongoose
* dotenv
* @imagekit/nodejs

---

## API Endpoints

### Authentication

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user          |
| POST   | /api/auth/logout   | Logout user         |

### Music Management

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| POST   | /api/music/create-music | Upload a music file |
| GET    | /api/music/getallmusics | Fetch all music     |

### Album Management

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| POST   | /api/music/create-album | Create a new album |
| GET    | /api/music/getallalbums | Fetch all albums   |

---

## Project Structure

```text
src/
├── Controllers/
├── Routes/
├── Services/
├── Models/
├── Middlewares/
├── Database/
└── app.js
```

---

## Key Learnings

* Backend Application Architecture
* Authentication & Authorization Flows
* Secure Password Storage
* Cloud-Based Media Handling
* Middleware Design Patterns
* MongoDB Relationships & Population
* REST API Development

---

## Current Status

The project is currently running in a local development environment.

Future improvements may include:

* Playlist Management
* Music Streaming
* Like/Favorite System
* Search & Filtering
* Deployment to Production
* API Documentation

---

## Author

AMAR RAJ

Backend Developer | Computer Science Student
