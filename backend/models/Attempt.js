const mongoose = require("mongoose");

const AttemptSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  responses: [
    {
      question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      selectedAnswer: { type: String, required: true }
    }
  ],
  score: { type: Number, default: 0 },
  status: { type: String, enum: ["completed", "pending"], default: "completed" }
}, { timestamps: true });

module.exports = mongoose.model("Attempt", AttemptSchema);
