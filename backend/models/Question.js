const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  text: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Question", QuestionSchema);
