import React from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminDashboard() {
  // Example data
  const stats = [
    { title: "Total Courses", value: 12, color: "primary" },
    { title: "Total Users", value: 120, color: "success" },
    { title: "Revenue", value: "₹15,000", color: "warning" },
    { title: "Pending Requests", value: 5, color: "danger" },
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-grow-1 p-4" style={{ background: "#f8f9fa", minHeight: "100vh" }}>
        <h2 className="mb-4">Admin Dashboard</h2>
        <p>Welcome, Admin! Here is an overview of your platform.</p>

        {/* Stats Cards */}
        <div className="row g-3 mt-3">
          {stats.map((stat, index) => (
            <div className="col-md-3" key={index}>
              <div className={`card text-white bg-${stat.color} h-100`}>
                <div className="card-body">
                  <h5 className="card-title">{stat.title}</h5>
                  <p className="card-text fs-4 fw-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity / Placeholder */}
        <div className="mt-5">
          <h4>Recent Activity</h4>
          <div className="card p-3">
            <p>No recent activity to show.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
