import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CreateExam.css";
import Header from "../components/Header";

const CreateExam = () => {
  const { user } = useContext(AuthContext) || {};
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [examDateTime, setExamDateTime] = useState("");
  const [duration] = useState("10"); // Fixed 10-minute duration
  const [questions, setQuestions] = useState([{ text: "", options: ["", "", "", ""], correctAnswer: "" }]);
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: "", options: ["", "", "", ""], correctAnswer: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.token) {
      alert("Unauthorized: Please log in again.");
      return;
    }

    try {
      const examResponse = await axios.post(
        "http://localhost:5000/api/exams",
        { title, subject, duration, examDateTime },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      const examId = examResponse.data.examId;
      console.log("Exam created with ID:", examId);

      for (const question of questions) {
        await axios.post(
          "http://localhost:5000/api/questions",
          { examId, ...question },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
      }

      alert("Exam and questions created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating exam:", error.response?.data || error.message);
      alert(`Failed to create exam: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <>
      <Header />
      <div className="create-exam-container">
        <h2>Create Exam</h2>
        <form onSubmit={handleSubmit} className="create-exam-form">
          <input
            type="text"
            placeholder="Exam Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <label>Exam Date & Time</label>
          <input
            type="datetime-local"
            value={examDateTime}
            onChange={(e) => setExamDateTime(e.target.value)}
            required
          />

          <label>Duration (in minutes)</label>
          <input
            type="number"
            value={duration}
            readOnly
            className="readonly-duration"
          />

          {questions.map((q, idx) => (
            <div key={idx} className="question-container">
              <input
                type="text"
                placeholder="Question Text"
                value={q.text}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[idx].text = e.target.value;
                  setQuestions(newQuestions);
                }}
                required
              />
              {q.options.map((opt, optIdx) => (
                <input
                  key={optIdx}
                  type="text"
                  placeholder={`Option ${optIdx + 1}`}
                  value={opt}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[idx].options[optIdx] = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                />
              ))}
              <input
                type="text"
                placeholder="Correct Answer"
                value={q.correctAnswer}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[idx].correctAnswer = e.target.value;
                  setQuestions(newQuestions);
                }}
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddQuestion} className="add-question-btn">Add Question</button>
          <button type="submit" className="submit-btn">Create Exam</button>
        </form>
      </div>
    </>
  );
};

export default CreateExam;
