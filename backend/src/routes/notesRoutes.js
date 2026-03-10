import express from 'express'
import { createdNotes, deleteNotes, getAllNotes, updateNotes ,getNotesById } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes )
router.get("/:id", getNotesById )
router.post("/", createdNotes)
router.put("/:id", updateNotes)
router.delete("/:id" , deleteNotes)

export default router;