const express = require("express");
const { createExam, getAllExams, deleteExam } = require("../controllers/examController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createExam);
router.get("/", getAllExams);
router.delete("/:id", protect, deleteExam);

module.exports = router;
