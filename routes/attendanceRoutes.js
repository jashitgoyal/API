const express = require("express");
const router = express.Router();
const attendanceController = require("./../controllers/attendanceController");

// TODO Student Side
router
  .route("/student/:studentId/:date")
  .get(attendanceController.getAttendanceStudent);

router
  .route("/:paper/:date/:hour")
  .get(attendanceController.getAttendance)
  .post(attendanceController.addAttendance)
  .patch(attendanceController.updateAttendance);

router.route("/:id").delete(attendanceController.deleteAttendance);

module.exports = router;

//Swagger Configuration

/**
 * @swagger
 * /attendance/student/{studentId}/{date}:
 *   get:
 *     summary: Get Attendance for a Student
 *     description: Retrieves the attendance records for a specific student on a given date.
 *     tags:
 *       - Attendance
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: The student's ID.
 *       - in: path
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *         description: The date of the attendance record (YYYY-MM-DD).
 *     responses:
 *       200:
 *         description: Attendance records retrieved successfully.
 *       400:
 *         description: Incomplete request, parameters missing.
 *       404:
 *         description: No records found.
 */

/**
 * @swagger
 * /attendance/{paper}/{date}/{hour}:
 *   get:
 *     summary: Get Attendance for a Paper
 *     description: Retrieves the attendance records for a specific paper, date, and hour.
 *     tags:
 *       - Attendance
 *     parameters:
 *       - in: path
 *         name: paper
 *         required: true
 *         schema:
 *           type: string
 *         description: The paper ID.
 *       - in: path
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *         description: The date of the attendance record (YYYY-MM-DD).
 *       - in: path
 *         name: hour
 *         required: true
 *         schema:
 *           type: string
 *         description: The hour of the attendance record.
 *     responses:
 *       200:
 *         description: Attendance record retrieved successfully.
 *       400:
 *         description: Incomplete request, parameters missing.
 *       404:
 *         description: No existing records found.
 *
 *   post:
 *     summary: Add a new Attendance Record
 *     description: Creates a new attendance record for a specific paper, date, and hour.
 *     tags:
 *       - Attendance
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paper:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               hour:
 *                 type: string
 *               attendance:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     student:
 *                       type: string
 *                       description: Student ID.
 *                     present:
 *                       type: boolean
 *     responses:
 *       201:
 *         description: Attendance record added successfully.
 *       400:
 *         description: Incomplete request, body missing.
 *       409:
 *         description: Attendance record already exists.
 *
 *   patch:
 *     summary: Update an Attendance Record
 *     description: Updates an existing attendance record.
 *     tags:
 *       - Attendance
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               paper:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               hour:
 *                 type: string
 *               attendance:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     student:
 *                       type: string
 *                       description: Student ID.
 *                     present:
 *                       type: boolean
 *     responses:
 *       200:
 *         description: Attendance record updated successfully.
 *       400:
 *         description: All fields are required.
 *
 */
