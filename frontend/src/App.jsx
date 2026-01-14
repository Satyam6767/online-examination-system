import {  Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Exams from "./pages/Exams";
import AttemptExam from "./pages/AttemptExam";
import Results from "./pages/Results";
import CreateExam from "./pages/CreateExam";
import AddQuestions from "./pages/AddQuestions";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <AuthProvider>
      
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/attempt/:examId" element={<AttemptExam />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/create-exam" element={<CreateExam />} /> */}

          <Route path="/create-exam" element={<CreateExam />} />
          <Route path="/add-questions/:examId" element={<AddQuestions />} />
        </Routes>
      
    </AuthProvider>
  );
}

export default App;
