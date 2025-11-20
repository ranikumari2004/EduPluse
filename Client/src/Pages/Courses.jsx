// src/pages/Courses.jsx
import React, { useState } from "react";
import "../CSS/Courses.css";

const coursesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn frontend & backend with real projects.",
    price: "Free",
    modules: [
      {
        name: "HTML Basics",
        video: "https://www.youtube.com/embed/UB1O30fR-EE",
        intro: "Introduction to HTML and its structure.",
      },
      {
        name: "CSS Styling",
        video: "https://www.youtube.com/embed/yfoY53QXEnI",
        intro: "Learn how to style your websites beautifully.",
      },
      {
        name: "JavaScript Fundamentals",
        video: "https://www.youtube.com/embed/W6NZfCO5SIk",
        intro: "Make your site interactive with JS.",
      },
      {
        name: "PHP for Backend",
        video: "https://www.youtube.com/embed/OK_JCtrrv-c",
        intro: "Handle backend with PHP.",
      },
    ],
  },
  {
    id: 2,
    title: "Python Programming",
    description: "Master Python from basics to advanced.",
    price: "Free",
    modules: [
      {
        name: "Python Basics",
        video: "https://www.youtube.com/embed/rfscVS0vtbw",
        intro: "Learn Python syntax and variables.",
      },
      {
        name: "OOP in Python",
        video: "https://www.youtube.com/embed/JeznW_7DlB0",
        intro: "Understand object-oriented programming in Python.",
      },
    ],
  },
  {
    id: 3,
    title: "Android Development",
    description: "Build Android apps using Java & Kotlin.",
    price: "Free",
    modules: [
      {
        name: "Android Basics",
        video: "https://www.youtube.com/embed/fis26HvvDII",
        intro: "Getting started with Android Studio.",
      },
    ],
  },
  {
    id: 4,
    title: "MERN Stack",
    description: "Full stack development with MongoDB, Express, React, Node.",
    price: "Paid",
    modules: [
      {
        name: "MongoDB Crash Course",
        video: "https://www.youtube.com/embed/4yqu8YF29cU",
        intro: "Learn MongoDB database basics.",
      },
      {
        name: "ExpressJS Basics",
        video: "https://www.youtube.com/embed/L72fhGm1tfE",
        intro: "Learn to create APIs with Express.",
      },
      {
        name: "ReactJS Basics",
        video: "https://www.youtube.com/embed/bMknfKXIFA8",
        intro: "Build UIs using ReactJS.",
      },
      {
        name: "NodeJS Basics",
        video: "https://www.youtube.com/embed/TlB_eWDSMt4",
        intro: "Understand backend with NodeJS.",
      },
    ],
  },
  {
    id: 5,
    title: "Cyber Security",
    description: "Learn ethical hacking & system security.",
    price: "Paid",
    modules: [
      {
        name: "Introduction to Cyber Security",
        video: "https://www.youtube.com/embed/2_lswM1S264",
        intro: "Basics of cyber security and hacking.",
      },
    ],
  },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 fw-bold">Our Courses</h1>

      {/* Courses List */}
      {!selectedCourse && (
        <div className="row g-4">
          {coursesData.map((course) => (
            <div className="col-md-4" key={course.id}>
              <div
                className="card shadow-lg h-100 course-card"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="card-body text-center">
                  <h4 className="fw-bold">{course.title}</h4>
                  <p>{course.description}</p>
                  <span
                    className={`badge ${
                      course.price === "Free"
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modules List */}
      {selectedCourse && !selectedModule && (
        <div className="mt-5">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setSelectedCourse(null)}
          >
            ← Back to Courses
          </button>
          <h2 className="fw-bold mb-4">{selectedCourse.title} Modules</h2>
          <div className="row g-4">
            {selectedCourse.modules.map((module, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="card shadow-sm h-100 module-card"
                  onClick={() => setSelectedModule(module)}
                >
                  <div className="card-body text-center">
                    <h5>{module.name}</h5>
                    <p className="text-muted small">{module.intro}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Module Detail */}
{selectedModule && (
  <div className="mt-5">
    <button
      className="btn btn-secondary mb-3"
      onClick={() => setSelectedModule(null)}
    >
      ← Back to {selectedCourse.title}
    </button>
    <h3 className="fw-bold mb-3">{selectedModule.name}</h3>
    <p>{selectedModule.intro}</p>

    <div className="video-wrapper shadow-lg rounded">
      <iframe
        src={selectedModule.video}
        title={selectedModule.name}
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

    </div>
  );
}
