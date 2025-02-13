# College Management System API

## Introduction

The **College Management System API** is a RESTful API that facilitates the management of various college-related functionalities, including authentication, attendance tracking, and student-staff interactions. It is built using **Node.js, Express.js, and MongoDB** with authentication handled via **bcrypt**.

## Features

- **Authentication System** for Staff and Students
- **Attendance Management**
- **Secure User Data Handling**
- **Role-based Access Control**
- **RESTful API Architecture**

## Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **Swagger** - API Documentation

---

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **MongoDB** (Local or Cloud Instance)

### Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/college-management-system.git
   cd college-management-system
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a **.env** file and configure the required environment variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_secret_key
   ```

4. Start the server:
   ```sh
   npm start
   ```

The API should now be running on `http://localhost:5000`.

---

## API Endpoints

### **Authentication**

#### **Staff Login**

- **Endpoint:** `POST /auth/login/staff`
- **Description:** Allows staff members to log in.
- **Request Body:**
  ```json
  {
    "username": "staff123",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "123456789",
    "name": "John Doe",
    "role": "Professor",
    "department": "Computer Science"
  }
  ```

#### **Student Login**

- **Endpoint:** `POST /auth/login/student`
- **Description:** Allows students to log in.
- **Request Body:**
  ```json
  {
    "username": "student123",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "987654321",
    "name": "Alice Doe",
    "role": "student"
  }
  ```

### **Attendance Management**

#### **Get Attendance for a Specific Paper, Date, and Hour**

- **Endpoint:** `GET /attendance/:paper/:date/:hour`
- **Description:** Retrieves attendance records for a specific class session.

#### **Get Attendance for a Student on a Specific Date**

- **Endpoint:** `GET /attendance/student/:studentId/:date`
- **Description:** Retrieves a student’s attendance for a given date.

#### **Add Attendance Record**

- **Endpoint:** `POST /attendance/:paper/:date/:hour`
- **Description:** Adds an attendance record.
- **Request Body:**
  ```json
  {
    "attendance": [
      { "student": "12345", "status": "Present" },
      { "student": "67890", "status": "Absent" }
    ]
  }
  ```

#### **Update Attendance Record**

- **Endpoint:** `PATCH /attendance/:paper/:date/:hour`
- **Description:** Updates an existing attendance record.

#### **Delete Attendance Record**

- **Endpoint:** `DELETE /attendance/:id`
- **Description:** Deletes an attendance record.

---

## API Documentation

Swagger documentation is available. Run the project and visit:

```
http://localhost:8080/api-docs
```
Direct Live Link For the API

```
https://api-fs4e.onrender.com/api-docs/
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License.
