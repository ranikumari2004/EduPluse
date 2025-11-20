import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// User pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Course from "./Pages/Courses";

// User components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Admin pages
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminCourses from "./admin/AdminCourses";
import AdminUsers from "./admin/AdminUsers";

// Layout for user side
const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  // Example: simple admin auth (true = logged in)
  const isAdminLoggedIn = true;

  return (
    <Router>
      <Routes>
        {/* User Side */}
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/about"
          element={
            <UserLayout>
              <About />
            </UserLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <UserLayout>
              <Contact />
            </UserLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <UserLayout>
              <Course />
            </UserLayout>
          }
        />

        {/* Admin Side */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            isAdminLoggedIn ? <AdminDashboard /> : <Navigate to="/admin/login" />
          }
        />
        <Route
          path="/admin/courses"
          element={
            isAdminLoggedIn ? <AdminCourses /> : <Navigate to="/admin/login" />
          }
        />
        <Route
          path="/admin/users"
          element={
            isAdminLoggedIn ? <AdminUsers /> : <Navigate to="/admin/login" />
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
