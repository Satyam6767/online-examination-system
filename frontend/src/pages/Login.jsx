import { useState, useContext } from "react";
import { loginUser } from "../api/Api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2"; // ✅ Import SweetAlert

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      login(data);

      // ✅ SweetAlert on successful login
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome to the Dashboard!",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // Delay to allow SweetAlert to show before navigating
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please check your email or password.",
      });
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="loginform">
        <div className="innerloginform">
          <h2>Sign-in</h2>
          <form className="finalform" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            {/* Password with show/hide icon */}
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                style={{ paddingRight: "40px" }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "24%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="btn btn-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
