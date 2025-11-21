import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold">Our Courses</h1>
      
      <div className="row g-4">
        {courses.map(course => (
          <div className="col-md-4 col-sm-6" key={course._id}>
            <div
              className="card shadow-lg h-100 cursor-pointer"
              onClick={() => navigate(`/courses/${course._id}`)}
              style={{ transition: "transform 0.2s" }}
            >
              <img
                src={course.image || "https://via.placeholder.com/400x200"}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">{course.title}</h5>
                <p className="text-muted small">{course.category}</p>
                <p className="text-truncate">{course.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <span className={`badge ${course.price === "Free" ? "bg-success" : "bg-danger"}`}>
                  {course.price}
                </span>
                <span><i className="bi bi-people-fill"></i> {course.students}</span>
                <span><i className="bi bi-star-fill text-warning"></i> {course.rating || 0}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
