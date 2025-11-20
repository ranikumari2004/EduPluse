import React from "react";
import { Link } from "react-router-dom";
import { HouseDoor, Book, People, BoxArrowRight, Gear } from "react-bootstrap-icons";
import "../AdminCSS/AdminSidebar.css";  // <-- Yaha CSS import karna zaruri hai

export default function AdminSidebar() {
  return (
    <div
      className="d-flex flex-column p-3 text-white sidebar"
      style={{ minWidth: "240px", height: "100vh" }}
    >
      {/* Logo / Title */}
      <h3 className="text-center mb-4 fw-bold">Admin Panel</h3>

      {/* Navigation */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link text-white">
            <HouseDoor className="me-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/courses" className="nav-link text-white">
            <Book className="me-2" />
            Courses
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="nav-link text-white">
            <People className="me-2" />
            Users
          </Link>
        </li>
        <li>
          <Link to="/admin/settings" className="nav-link text-white">
            <Gear className="me-2" />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/admin/login" className="nav-link text-white">
            <BoxArrowRight className="me-2" />
            Logout
          </Link>
        </li>
      </ul>

      {/* Footer Section */}
      <div className="mt-auto text-center small text-light opacity-75">
        <p className="mb-1">© 2025 EduPlatform</p>
        <p className="mb-0">All Rights Reserved</p>
      </div>
    </div>
  );
}
