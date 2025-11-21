import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

export default function AdminDashboard() {
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0); // Replace with API
  const [revenue, setRevenue] = useState("₹0"); // Replace with API
  const [pendingRequests, setPendingRequests] = useState(0); // Replace with API
  const [recentCourses, setRecentCourses] = useState([]);

  useEffect(() => {
    fetchTotalCourses();
    fetchRecentCourses();
    fetchOtherStats();
  }, []);

  const fetchTotalCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setTotalCourses(res.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRecentCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      // Last 5 added courses
      setRecentCourses(res.data.slice(-5).reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const fetchOtherStats = () => {
    // Example data, replace with actual API calls if available
    setTotalUsers(120);
    setRevenue("₹15,000");
    setPendingRequests(5);
  };

  const stats = [
    { title: "Total Courses", value: totalCourses, color: "primary" },
    { title: "Total Users", value: totalUsers, color: "success" },
    { title: "Revenue", value: revenue, color: "warning" },
    { title: "Pending Requests", value: pendingRequests, color: "danger" },
  ];

  return (
    <div className="d-flex">
      <AdminSidebar />

      <div className="flex-grow-1 p-4" style={{ minHeight: "100vh", background: "#f0f2f5" }}>
        <h2 className="mb-4">Admin Dashboard</h2>

        {/* Stats Cards */}
        <div className="row g-3">
          {stats.map((stat, idx) => (
            <div className="col-md-3 col-sm-6" key={idx}>
              <div className={`card h-100 shadow-sm bg-${stat.color} text-white`}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center py-4">
                  <h5 className="card-title">{stat.title}</h5>
                  <p className="fs-4 fw-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Courses */}
        <div className="mt-5">
          <h4>Recent Courses</h4>
          <div className="row g-3">
            {recentCourses.map((course) => (
              <div className="col-md-4 col-sm-6" key={course._id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={course.image || "https://via.placeholder.com/400x200"}
                    className="card-img-top"
                    alt={course.title}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">{course.title}</h5>
                    <p className="text-muted small">{course.category}</p>
                    <p className="text-truncate">{course.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className={`badge ${course.price === "Free" ? "bg-success" : "bg-danger"}`}>
                      {course.price}
                    </span>
                    <span><i className="bi bi-people-fill"></i> {course.students}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
