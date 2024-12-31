# MERN Stack JWT Authentication

This is a basic MERN stack (MongoDB, Express, React, Node.js) application implementing JWT (JSON Web Token) authentication. The app allows users to register, log in, and access protected routes using JWT tokens for secure authentication.

## Features
- **User Registration**: Allows new users to register with email, password, and name.
- **User Login**: Users can log in with their email and password, receiving a JWT token.
- **Protected Routes**: Some routes are protected, requiring a valid JWT token to access them.
- **JWT Authentication**: Secure login and token management using JWT for authentication and authorization.

## Technologies Used
- **Back-End**:
  - Node.js
  - Express
  - MongoDB (via Mongoose)
  - JWT (jsonwebtoken)
  - Bcryptjs (for password hashing)

- **Front-End**:
  - React
  - React Router
  - Axios (for API calls)
