const Question = require("../models/Question");
const Exam = require("../models/Exam");

// Add Question to Exam (Only for teachers)
const addQuestion = async (req, res) => {
  try {
    if (req.user.role !== "teacher") {
      return res.status(403).json({ message: "Only teachers can add questions" });
    }

    const { examId, text, options, correctAnswer } = req.body;

    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    const question = new Question({ exam: examId, text, options, correctAnswer });
    await question.save();

    exam.questions.push(question._id);
    await exam.save();

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Questions for an Exam
const getExamQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ exam: req.params.examId });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { addQuestion, getExamQuestions };
