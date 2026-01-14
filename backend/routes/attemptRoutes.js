const express = require("express");
const { attemptExam, getStudentAttempts, getExamResults } = require("../controllers/attemptController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, attemptExam);
router.get("/", protect, getStudentAttempts);
router.get("/exam/:examId", protect, getExamResults);

module.exports = router;
