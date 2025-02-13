const express = require("express");
const router = express.Router();
const timeScheduleController = require("./../controllers/timeScheduleController");

router
  .route("/:user_id")
  .get(timeScheduleController.getTimeSchedule)
  .post(timeScheduleController.addTimeSchedule)
  .patch(timeScheduleController.updateTimeSchedule)
  .delete(timeScheduleController.deleteTimeSchedule);

module.exports = router;

//Swagger Configuration

/**
 * @swagger
 * components:
 *   schemas:
 *     TimeSchedule:
 *       type: object
 *       required:
 *         - user
 *         - schedule
 *       properties:
 *         user:
 *           type: string
 *           description: User ID associated with the time schedule.
 *           example: "64a8c4d8f7a9b4b3c8a4d2c3"
 *         schedule:
 *           type: object
 *           description: Time schedule details.
 *           example:
 *             Monday: "9:00 AM - 5:00 PM"
 *             Tuesday: "10:00 AM - 4:00 PM"
 */

/**
 * @swagger
 * /time_schedule/{user_id}:
 *   get:
 *     summary: Get Time Schedule for a User
 *     description: Retrieve the time schedule details of a user.
 *     tags: [TimeSchedule]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *         example: "64a8c4d8f7a9b4b3c8a4d2c3"
 *     responses:
 *       200:
 *         description: Successfully retrieved time schedule.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TimeSchedule'
 *       400:
 *         description: User ID is required.
 *       404:
 *         description: Time schedule not found.
 *       500:
 *         description: Server error.
 *   post:
 *     summary: Add a Time Schedule
 *     description: Create a new time schedule for a user.
 *     tags: [TimeSchedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TimeSchedule'
 *     responses:
 *       201:
 *         description: Time schedule created successfully.
 *       400:
 *         description: Missing required fields.
 *       409:
 *         description: Time schedule already exists.
 *       500:
 *         description: Server error.
 *   patch:
 *     summary: Update a Time Schedule
 *     description: Modify an existing time schedule for a user.
 *     tags: [TimeSchedule]
 *     parameters:
 *       - in: path
 *         name: user_id
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
 *               schedule:
 *                 type: object
 *                 description: Updated schedule details.
 *                 example:
 *                   Monday: "10:00 AM - 6:00 PM"
 *                   Tuesday: "11:00 AM - 3:00 PM"
 *     responses:
 *       200:
 *         description: Time schedule updated successfully.
 *       400:
 *         description: Missing required fields.
 *       404:
 *         description: Time schedule not found.
 *       500:
 *         description: Server error.
 *   delete:
 *     summary: Delete a Time Schedule
 *     description: Remove a user's time schedule from the system.
 *     tags: [TimeSchedule]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *         example: "64a8c4d8f7a9b4b3c8a4d2c3"
 *     responses:
 *       200:
 *         description: Time schedule deleted successfully.
 *       400:
 *         description: User ID is required.
 *       404:
 *         description: Time schedule not found.
 *       500:
 *         description: Server error.
 */
