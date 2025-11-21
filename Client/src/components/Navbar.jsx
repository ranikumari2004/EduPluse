import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/signin", {
        email: loginEmail,
        password: loginPassword,
      });
      alert(res.data.message);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("userName", res.data.name);
      setShowSignIn(false);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  // Handle register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", {
        name: regName,
        email: regEmail,
        password: regPassword,
      });
      alert(res.data.message);
      setShowSignUp(false);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid px-4">
          <Link to="/" className="navbar-brand fw-bold fs-3">
            Edu<span className="text-primary">Pulse</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              navbarOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link to="/" className="nav-link active">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link">COURSES</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </li>
            </ul>
            <button
              className="btn btn-primary ms-lg-3 px-4 py-2 fw-bold"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Sign In Modal */}
      {showSignIn && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <h5>Sign In</h5>
              <button
                className="btn-close float-end"
                onClick={() => setShowSignIn(false)}
              ></button>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">
                  Sign In
                </button>
              </form>
              <p className="text-center">
                Don't have an account?{" "}
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowSignIn(false);
                    setShowSignUp(true);
                  }}
                >
                  Register Now
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <h5>Sign Up</h5>
              <button
                className="btn-close float-end"
                onClick={() => setShowSignUp(false)}
              ></button>
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-2"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
