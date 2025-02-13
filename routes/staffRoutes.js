const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

router.route("/").post(staffController.createNewStaff);
router.route("/list/:department").get(staffController.getStaffList);
router.route("/approve/:department").get(staffController.getNewStaffs);

router
  .route("/:id")
  .get(staffController.getStaff)
  .patch(staffController.approveStaff)
  .delete(staffController.deleteStaff);

module.exports = router;

// Swagger Configuration

/**
 * @swagger
 * components:
 *   schemas:
 *     Staff:
 *       type: object
 *       required:
 *         - username
 *         - name
 *         - email
 *         - department
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Unique username for the staff member.
 *         name:
 *           type: string
 *           description: Full name of the staff member.
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the staff member.
 *         department:
 *           type: string
 *           description: Department where the staff works.
 *         role:
 *           type: string
 *           description: Role of the staff (e.g., teacher, HOD, etc.).
 *         password:
 *           type: string
 *           description: Hashed password of the staff.
 */

/**
 * @swagger
 * /staff/{id}:
 *   get:
 *     summary: Get a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Staff member details retrieved successfully.
 *       400:
 *         description: ID missing.
 *       404:
 *         description: Staff not found.
 *   patch:
 *     summary: Approve a staff member (update role)
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Staff approved successfully.
 *       400:
 *         description: Missing fields.
 *   delete:
 *     summary: Delete a staff member
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Staff deleted successfully.
 *       400:
 *         description: Staff ID required.
 *       404:
 *         description: Staff not found.
 */

/**
 * @swagger
 * /staff:
 *   post:
 *     summary: Create a new staff member
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 *     responses:
 *       201:
 *         description: Staff registered successfully.
 *       400:
 *         description: Missing required fields.
 *       409:
 *         description: Duplicate username.
 */

/**
 * @swagger
 * /staff/list/{department}:
 *   get:
 *     summary: Get staff names by department
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: department
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Staff list retrieved successfully.
 *       400:
 *         description: Params missing.
 *       404:
 *         description: No staff found.
 */

/**
 * @swagger
 * /staff/approve/{department}:
 *   get:
 *     summary: Get new unapproved staff by department
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: department
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of new staff retrieved successfully.
 *       400:
 *         description: Params missing.
 *       404:
 *         description: No registered staff found.
 */
