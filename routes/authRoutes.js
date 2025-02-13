const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");

router.route("/login/staff").post(authController.staffLogin);
router.route("/login/student").post(authController.studentLogin);
module.exports = router;

//Swagger Configuration

/**
 * @swagger
 * /auth/login/staff:
 *   post:
 *     summary: Staff Login
 *     description: Authenticates a staff member using their username and password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The staff member's username.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The staff member's password.
 *     responses:
 *       200:
 *         description: Successfully authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *                 department:
 *                   type: string
 *       400:
 *         description: All fields are required.
 *       404:
 *         description: User not found.
 *       418:
 *         description: User not approved.
 *       401:
 *         description: Incorrect password.
 */

/**
 * @swagger
 * /auth/login/student:
 *   post:
 *     summary: Student Login
 *     description: Authenticates a student using their username and password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The student's username.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The student's password.
 *     responses:
 *       200:
 *         description: Successfully authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *       400:
 *         description: All fields are required.
 *       404:
 *         description: User not found.
 *       401:
 *         description: Incorrect password.
 */
