import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid px-4">
          <Link to="/" className="navbar-brand fw-bold fs-3 animated-logo">
            Edu<span className="pulse-part">Pulse</span>
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link">
                  COURSES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
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
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-4">
              <h5 className="modal-title mb-3">Sign In</h5>
              <button type="button" className="btn-close float-end" onClick={() => setShowSignIn(false)}></button>
              <form>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">
                  Sign In
                </button>
                <p className="text-center">
                  Don't have an account?{" "}
                  <span
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShowSignIn(false);
                      setShowSignUp(true);
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

     {/* Sign Up Modal */}
{showSignUp && (
  <div
    className="modal d-block"
    tabIndex="-1"
    role="dialog"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content p-4">
        <h5 className="modal-title mb-3">Sign Up</h5>
        <button
          type="button"
          className="btn-close float-end"
          onClick={() => setShowSignUp(false)}
        ></button>
        <form>
          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Sign Up
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
