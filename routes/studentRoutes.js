const express = require("express");
const router = express.Router();
const studentController = require("./../controllers/studentController");

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.createNewStudent);

router
  .route("/:id")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;

// Swagger Configuration
/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - course
 *         - email
 *         - username
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID of the student.
 *           example: "64a8c4d8f7a9b4b3c8a4d2c3"
 *         name:
 *           type: string
 *           description: Full name of the student.
 *           example: "John Doe"
 *         course:
 *           type: string
 *           description: Course the student is enrolled in.
 *           example: "Computer Science"
 *         email:
 *           type: string
 *           format: email
 *           description: Student's email address.
 *           example: "john@example.com"
 *         username:
 *           type: string
 *           description: Unique username for the student.
 *           example: "john_doe_99"
 *         password:
 *           type: string
 *           format: password
 *           description: Student's password (hashed in database).
 *           example: "securepassword123"
 */

/**
 * @swagger
 * /student:
 *   get:
 *     summary: Get all students
 *     description: Retrieve a list of all students.
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Successfully retrieved list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Server error.
 *   post:
 *     summary: Create a new student
 *     description: Add a new student to the database.
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Invalid request data.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /student/{id}:
 *   get:
 *     summary: Get a student by ID
 *     description: Retrieve details of a student by their ID.
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "64a8c4d8f7a9b4b3c8a4d2c3"
 *     responses:
 *       200:
 *         description: Successfully retrieved student details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found.
 *       500:
 *         description: Server error.
 *   patch:
 *     summary: Update a student's details
 *     description: Modify an existing student's data.
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "64a8c4d8f7a9b4b3c8a4d2c3"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john@example.com"
 *     responses:
 *       200:
 *         description: Student updated successfully.
 *       400:
 *         description: Invalid request data.
 *       404:
 *         description: Student not found.
 *       500:
 *         description: Server error.
 *   delete:
 *     summary: Delete a student
 *     description: Remove a student from the database by their ID.
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "64a8c4d8f7a9b4b3c8a4d2c3"
 *     responses:
 *       200:
 *         description: Student deleted successfully.
 *       404:
 *         description: Student not found.
 *       500:
 *         description: Server error.
 */
