# Blog API

A RESTful API for a blog platform with user authentication, posts, and comments. Built with Node.js, Express, and MongoDB.


 

The API is deployed on Render: https://blog-1zgt.onrender.com

> Note: The free instance may take up to 50 seconds to respond on the first request after inactivity.


## Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (authentication)
- bcrypt (password hashing)


## Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- CRUD operations for posts (create, read, update, delete)
- Users can only edit or delete their own posts
- Comments on posts
- Pagination and search for posts
- Protected routes with authentication middleware



## API Endpoints

### Auth

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /auth/register | Register a new user | No |
| POST | /auth/login | Login and get a token | No |

### Posts

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /posts | Get all posts (pagination, search) | Yes |
| POST | /posts | Create a post | Yes |
| PUT | /posts/:id | Update own post | Yes |
| DELETE | /posts/:id | Delete own post | Yes |

### Comments

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /comments/:postId | Add a comment to a post | Yes |
| GET | /comments/:postId | Get comments of a post | Yes |



## Installation

1. Clone the repository


git clone https://github.com/samandarsaidahmadov20000-png/blog.git


2. Install dependencies


3. Create a `.env` file in the root and add:

MONGODB_URI=your_mongodb_connection_string
KEY=your_jwt_secret
PORT=3000

4. Run the server