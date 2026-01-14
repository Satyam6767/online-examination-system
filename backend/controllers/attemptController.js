const Attempt = require("../models/Attempt");
const Exam = require("../models/Exam");
const Question = require("../models/Question");

// Attempt Exam & Auto Calculate Score
const attemptExam = async (req, res) => {
  try {
    const { examId, responses } = req.body;
    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    let score = 0;
    for (let response of responses) {
      const question = await Question.findById(response.question);
      if (question.correctAnswer === response.selectedAnswer) {
        score += 1; // 1 point for each correct answer
      }
    }

    const attempt = new Attempt({
      student: req.user.id,
      exam: examId,
      responses,
      score
    });

    await attempt.save();
    res.status(201).json(attempt);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Student's Attempted Exams
const getStudentAttempts = async (req, res) => {
  try {
    const attempts = await Attempt.find({ student: req.user.id })
      .populate("exam", "title subject")
      .populate({
        path: "responses.question",
        select: "correctAnswer"
      });

    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// Get Exam Results (For Teacher/Admin)
const getExamResults = async (req, res) => {
  try {
    const attempts = await Attempt.find({ exam: req.params.examId })
      .populate("student", "name email")
      .sort({ score: -1 });

    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { attemptExam, getStudentAttempts, getExamResults };
