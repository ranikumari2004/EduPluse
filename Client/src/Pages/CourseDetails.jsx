import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then(res => setCourse(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!course) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container my-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate("/courses")}
      >
        ← Back to Courses
      </button>

      <div className="row">
        {/* Left Column: Image + Modules */}
        <div className="col-lg-8 mb-4">
          <div className="card shadow-sm mb-4">
            <img
              src={course.image || "https://via.placeholder.com/800x400"}
              className="card-img-top rounded-top"
              alt={course.title}
            />
            <div className="card-body">
              <h2 className="fw-bold">{course.title}</h2>
              <p className="text-muted mb-1">{course.category}</p>
              <p>{course.description}</p>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <span className="badge bg-primary">Author: {course.author}</span>
                <span className="badge bg-success">Students: {course.students}</span>
                <span className="badge bg-warning text-dark">Rating: {course.rating || 0}</span>
                <span className="badge bg-info text-dark">Duration: {course.duration || "N/A"}</span>
                <span className={`badge ${course.price === "Free" ? "bg-success" : "bg-danger"}`}>
                  {course.price}
                </span>
              </div>
            </div>
          </div>

          {/* Modules Accordion */}
          <h4 className="mb-3">Course Modules</h4>
          <div className="accordion" id="modulesAccordion">
            {course.modules.map((mod, idx) => (
              <div className="accordion-item" key={idx}>
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                    aria-expanded="false"
                    aria-controls={`collapse${idx}`}
                  >
                    {mod.name}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${idx}`}
                  data-bs-parent="#modulesAccordion"
                >
                  <div className="accordion-body">
                    <p>{mod.intro}</p>
                    {mod.video && (
                      <div className="ratio ratio-16x9 mt-2">
                        <iframe
                          src={mod.video}
                          title={mod.name}
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Quick Info Card */}
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Course Details</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Author:</strong> {course.author}</li>
                <li className="list-group-item"><strong>Category:</strong> {course.category}</li>
                <li className="list-group-item"><strong>Price:</strong> {course.price}</li>
                <li className="list-group-item"><strong>Students:</strong> {course.students}</li>
                <li className="list-group-item"><strong>Duration:</strong> {course.duration || "N/A"}</li>
                <li className="list-group-item"><strong>Rating:</strong> {course.rating || 0}</li>
              </ul>
              <button
                className="btn btn-primary w-100 mt-3"
                onClick={() => alert("Enroll functionality coming soon!")}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
