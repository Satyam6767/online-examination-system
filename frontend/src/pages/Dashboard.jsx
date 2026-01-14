import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../Dashboard.css";  // Import CSS file

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return <h2>Loading...</h2>;

  return (
    <>
    <Header />
    
    <div className="dashboard-container">
      
      <h2>Welcome, {user.user.name}</h2>
      <h3>Role: {user.user.role}</h3>

      <div className="dashboard-buttons">
        {/* Student Options */}
        {user.user.role === "student" && (
          <>
            <button onClick={() => navigate("/exams")}>Take Exam</button>
            <button onClick={() => navigate("/results")}>View Results</button>
          </>
        )}

        {/* Teacher Options */}
        {user.user.role === "teacher" && (
          <>
            <button onClick={() => navigate("/create-exam")}>Create Exam</button>
            {/* <button onClick={() => navigate("/exams")}>Manage Exams</button>
            <button onClick={() => navigate("/results")}>View Student Results</button> */}
          </>
        )}

        <button className="logout-button" onClick={() => { logout(); navigate("/login"); }}>Logout</button>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
