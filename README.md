# 📚 Bookstore RESTful API - Internship Project

A professional backend system built with **Node.js** and **Express.js** to manage a bookstore database. This project was developed as part of the Backend Developer Internship task, focusing on CRUD operations, database connectivity, and data validation.

## 🚀 Features
- **Full CRUD Operations**: Create, Read, Update, and Delete book records.
- **Cloud Database**: Integrated with **MongoDB Atlas** for persistent storage.
- **Input Validation (Bonus)**: Uses `express-validator` to ensure data integrity (e.g., price must be a number, fields cannot be empty).
- **Environment Security**: Sensitive credentials are managed using `.env` files.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Validation**: Express-Validator
- **Testing**: Postman

## 📂 Project Structure
```text
/bookstore-api
├── controllers/    # Business logic for API endpoints
├── models/         # Mongoose schema for the Book model
├── routes/         # API route definitions
├── .env            # Environment variables (Internal)
├── .gitignore      # Files to be ignored by Git
├── app.js          # Entry point of the application
└── package.json    # Project dependencies and scripts
