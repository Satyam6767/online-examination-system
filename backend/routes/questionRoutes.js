const express = require("express");
const { addQuestion, getExamQuestions } = require("../controllers/questionController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addQuestion);
router.get("/:examId", getExamQuestions);

module.exports = router;
