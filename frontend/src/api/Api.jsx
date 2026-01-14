import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const loginUser = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  return res.data;
};

export const registerUser = async (name, email, password, role) => {
  const res = await axios.post(`${API_URL}/auth/register`, { name, email, password, role });
  return res.data;
};

export const getExams = async (token) => {
  const res = await axios.get(`${API_URL}/exams`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const attemptExam = async (token, examId, responses) => {
  const res = await axios.post(
    `${API_URL}/attempts`,
    { examId, responses },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const getResults = async (token) => {
  const res = await axios.get(`${API_URL}/attempts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
