import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AddQuestions = () => {
  const { user } = useContext(AuthContext) || {};
  const { examId } = useParams(); // Get exam ID from URL
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([{ text: "", options: ["", "", "", ""], correctAnswer: "" }]);

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
      for (const question of questions) {
        const response = await axios.post(
          "http://localhost:5000/api/questions",
          { examId, text: question.text, options: question.options, correctAnswer: question.correctAnswer },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        console.log("Question Added:", response.data);
      }

      alert("All questions added successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding questions:", error.response?.data || error.message);
      alert(`Failed to add questions: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div>
      <h2>Add Questions to Exam</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, idx) => (
          <div key={idx}>
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
        <button type="button" onClick={handleAddQuestion}>Add Another Question</button>
        <button type="submit">Submit Questions</button>
      </form>
    </div>
  );
};

export default AddQuestions;
