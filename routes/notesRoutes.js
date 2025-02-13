const express = require("express");
const router = express.Router();
const notesController = require("./../controllers/notesController");

router
  .route("/:noteId")
  .get(notesController.getNote)
  .patch(notesController.updateNotes)
  .delete(notesController.deleteNotes);

router
  .route("/paper/:paperId")
  .get(notesController.getNotes)
  .post(notesController.addNotes);

module.exports = router;

//Swagger Configuration
/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       required:
 *         - paper
 *         - title
 *         - body
 *       properties:
 *         paper:
 *           type: string
 *           description: The ID of the paper associated with the note.
 *         title:
 *           type: string
 *           description: The title of the note.
 *         body:
 *           type: string
 *           description: The content of the note.
 */

/**
 * @swagger
 * /notes/paper/{paperId}:
 *   get:
 *     summary: Get all notes for a specific paper
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: paperId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the paper to fetch notes for.
 *     responses:
 *       200:
 *         description: Notes retrieved successfully.
 *       400:
 *         description: Params missing.
 *       404:
 *         description: No notes found.
 *   post:
 *     summary: Add a new note for a specific paper
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       201:
 *         description: Note added successfully.
 *       400:
 *         description: Incomplete request.
 *       409:
 *         description: Note already exists.
 */

/**
 * @swagger
 * /notes/{noteId}:
 *   get:
 *     summary: Get a specific note by ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to fetch.
 *     responses:
 *       200:
 *         description: Note retrieved successfully.
 *       400:
 *         description: Params missing.
 *       404:
 *         description: Note not found.
 *   patch:
 *     summary: Update a specific note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note updated successfully.
 *       400:
 *         description: Fields missing.
 *       404:
 *         description: Note doesn't exist.
 *   delete:
 *     summary: Delete a specific note
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to delete.
 *     responses:
 *       200:
 *         description: Note deleted successfully.
 *       400:
 *         description: Note ID required.
 *       404:
 *         description: Note not found.
 */
