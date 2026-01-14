import { useState, useEffect, useContext } from "react";
import { getExams } from "../api/Api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Exams.css";
import Header from "../components/Header";

const Exams = () => {
  const { user } = useContext(AuthContext);
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const data = await getExams(user.token);
        console.log("Exams from backend:", data);
        setExams(data);
      } catch (error) {
        alert("Failed to fetch exams");
      }
    };
    fetchExams();
  }, [user]);

  const formatDateTime = (dateTimeStr) => {
    if (!dateTimeStr) return "Not Scheduled";
    const dateObj = new Date(dateTimeStr);
    return isNaN(dateObj)
      ? "Invalid Date"
      : dateObj.toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        });
  };

  return (
    <>
      <Header />
      <div className="exam-container">
        <div className="exam-wrapper">
          <h2 className="exam-title">Available Exams</h2>
          <ul className="exam-list">
            {exams.map((exam) => {
              const examDate = new Date(exam.examDateTime);
              const now = new Date();
              const isAvailable = now >= examDate;

              return (
                <li key={exam._id} className="exam-item">
                  <strong>{exam.title}</strong> - {exam.subject}
                  <br />
                  📅 {formatDateTime(exam.examDateTime)}
                  <br />
                  <button
                    className="exam-button"
                    disabled={!isAvailable}
                    onClick={() => navigate(`/attempt/${exam._id}`)}
                  >
                    {isAvailable ? "Start Exam" : "Not Yet Available"}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Exams;
