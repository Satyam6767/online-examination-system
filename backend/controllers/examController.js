const Exam = require("../models/Exam");
const Question = require("../models/Question");

// Create Exam (Only for teachers)

const createExam = async (req, res) => {
  try {
    const { title, subject, duration,  examDateTime  } = req.body;

    if (!title || !subject || !duration) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExam = new Exam({
      title,
      subject,
      duration,
      examDateTime,
      teacher: req.user.id
    });

    await newExam.save();
    res.status(201).json({ message: "Exam created successfully!", examId: newExam._id }); // Return examId
  } catch (error) {
    console.error("Error creating exam:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// Get All Exams
// const getAllExams = async (req, res) => {
//   try {
//     const exams = await Exam.find().populate("teacher", "name email");
//     res.json(exams);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };




const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find().populate("questions"); // Ensure questions are included
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// Delete Exam (Only teacher/admin)
const deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    if (req.user.role !== "admin" && req.user.id !== exam.teacher.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await exam.deleteOne();
    res.json({ message: "Exam deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createExam, getAllExams, deleteExam };
