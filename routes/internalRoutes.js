const express = require("express");
const router = express.Router();
const internalController = require("./../controllers/internalController");

//? Student Side
// get result of every course
router.route("/student/:studentId").get(internalController.getInternalStudent);

router
  .route("/:paper")
  .get(internalController.getInternal)
  .post(internalController.addInternal)
  .patch(internalController.updateInternal)
  .delete(internalController.deleteInternal);

module.exports = router;

//Swagger Configuration

/**
 * @swagger
 * /internal/student/{studentId}:
 *   get:
 *     summary: Get Internal Result for a Student
 *     description: Fetches internal marks for a specific student.
 *     tags:
 *       - Internal
 *     parameters:
 *       - name: studentId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student.
 *     responses:
 *       200:
 *         description: Successfully retrieved internal marks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   marks:
 *                     type: number
 *                     description: The marks obtained by the student.
 *                   paper:
 *                     type: string
 *                     description: The paper ID associated with the marks.
 *       400:
 *         description: Incomplete Request - Params Missing
 *       404:
 *         description: No Records Found.
 */

/**
 * @swagger
 * /internal/{paper}:
 *   get:
 *     summary: Get Internal Records for a Paper
 *     description: Fetches the internal records for a specific paper.
 *     tags:
 *       - Internal
 *     parameters:
 *       - name: paper
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the paper.
 *     responses:
 *       200:
 *         description: Successfully retrieved internal records.
 *       400:
 *         description: Incomplete Request - Params Missing.
 *       404:
 *         description: No Existing Record(s) found. Add New Record.
 *
 *   post:
 *     summary: Add Internal Record
 *     description: Creates a new internal record for a specific paper.
 *     tags:
 *       - Internal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paper:
 *                 type: string
 *                 description: The ID of the paper.
 *               marks:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     studentId:
 *                       type: string
 *                     score:
 *                       type: number
 *     responses:
 *       201:
 *         description: Internal Record Added.
 *       400:
 *         description: Incomplete Request - Fields Missing.
 *       409:
 *         description: Internal record already exists.
 *
 *   patch:
 *     summary: Update Internal Record
 *     description: Updates an existing internal record.
 *     tags:
 *       - Internal
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
 *               marks:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     studentId:
 *                       type: string
 *                     score:
 *                       type: number
 *     responses:
 *       200:
 *         description: Internal Record Updated.
 *       400:
 *         description: All fields are required.
 *       404:
 *         description: Internal record doesn't exist.
 *       409:
 *         description: Duplicate entry found.
 *
 *   delete:
 *     summary: Delete Internal Record
 *     description: Deletes an internal record for a specific paper.
 *     tags:
 *       - Internal
 *     parameters:
 *       - name: paper
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the paper to delete.
 *     responses:
 *       200:
 *         description: Internal Record deleted.
 *       400:
 *         description: Internal ID required.
 *       404:
 *         description: Internal Record not found.
 */
