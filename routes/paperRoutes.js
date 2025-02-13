const express = require("express");
const router = express.Router();
const paperController = require("./../controllers/paperController");

router.route("/").post(paperController.addPaper);
router.route("/staff/:staffId").get(paperController.getPapersStaff);

router.route("/manage/:studentId").get(paperController.getAllPapers);
router.route("/students/:paperId").get(paperController.getStudentsList);
router.route("/student/:studentId").get(paperController.getPapersStudent);

router
  .route("/:paperId")
  .get(paperController.getPaper)
  .patch(paperController.updateStudents)
  .delete(paperController.deletePaper);

module.exports = router;
//Swagger Configuration

/**
 * @swagger
 * components:
 *   schemas:
 *     Paper:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - subject
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the paper.
 *         author:
 *           type: string
 *           description: Author of the paper.
 *         subject:
 *           type: string
 *           description: Subject of the paper.
 */

/**
 * @swagger
 * /paper:
 *   post:
 *     summary: Add a new paper
 *     tags: [Paper]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paper'
 *     responses:
 *       201:
 *         description: Paper added successfully.
 *       400:
 *         description: Missing required fields.
 */

/**
 * @swagger
 * /paper/staff/{staffId}:
 *   get:
 *     summary: Get papers assigned to a staff member
 *     tags: [Paper]
 *     parameters:
 *       - in: path
 *         name: staffId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Papers retrieved successfully.
 *       400:
 *         description: Missing staff ID.
 *       404:
 *         description: No papers found.
 */

/**
 * @swagger
 * /paper/manage/{studentId}:
 *   get:
 *     summary: Get all papers for a student
 *     tags: [Paper]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Papers retrieved successfully.
 *       400:
 *         description: Missing student ID.
 *       404:
 *         description: No papers found.
 */

/**
 * @swagger
 * /paper/students/{paperId}:
 *   get:
 *     summary: Get students associated with a paper
 *     tags: [Paper]
 *     parameters:
 *       - in: path
 *         name: paperId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Students retrieved successfully.
 *       400:
 *         description: Missing paper ID.
 *       404:
 *         description: No students found.
 */

/**
 * @swagger
 * /paper/student/{studentId}:
 *   get:
 *     summary: Get papers for a specific student
 *     tags: [Paper]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Papers retrieved successfully.
 *       400:
 *         description: Missing student ID.
 *       404:
 *         description: No papers found.
 */

/**
 * @swagger
 * /paper/{paperId}:
 *   get:
 *     summary: Get details of a specific paper
 *     tags: [Paper]
 *     parameters:
 *       - in: path
 *         name: paperId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Paper details retrieved successfully.
 *       400:
 *         description: Missing paper ID.
 *       404:
 *         description: Paper not found.
 *   patch:
 *     summary: Update students associated with a paper
 *     tags: [Paper]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               students:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Paper updated successfully.
 *       400:
 *         description: Missing required fields.
 *   delete:
 *     summary: Delete a paper
 *     tags: [Paper]
 *     parameters:
 *       - in: path
 *         name: paperId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Paper deleted successfully.
 *       400:
 *         description: Paper ID required.
 *       404:
 *         description: Paper not found.
 */
