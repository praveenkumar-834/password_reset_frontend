# Password Reset Frontend

This is the frontend for the Password Reset application built using React and Bootstrap. It allows users to register, login, request a password reset, and update their password using a secure token.

## Live Demo
Frontend URL:
https://password-reset-frontend-n8n5fem0s.vercel.app

Backend API:
https://password-reset-backend-lac.vercel.app

## Features
- User Registration
- User Login
- Forgot Password
- Password Reset via Email Link
- Responsive UI using Bootstrap
- Secure token-based password reset

## Tech Stack
- React
- Bootstrap
- Axios
- React Router

## Folder Structure
src
components
pages
api
App.jsx
main.jsx

## Installation

Clone the repository:

git clone https://github.com/praveenkumar-834/password_reset_frontend.git

Navigate to the project folder:

cd password_reset_frontend

Install dependencies:

npm install

Start development server:

npm run dev

## Environment Setup
Create a `.env` file if needed:

VITE_API_URL=https://password-reset-backend-lac.vercel.app

## Deployment
Frontend is deployed using Vercel.

## Available Routes
/ → Login page  
/register → Register page  
/forgot-password → Request password reset  
/reset-password/:token → Reset password form

## Author
Praveen Kumar
