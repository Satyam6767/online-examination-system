const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  duration: { type: Number, required: true },
  examDateTime: { type: Date, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });

module.exports = mongoose.model("Exam", ExamSchema);
