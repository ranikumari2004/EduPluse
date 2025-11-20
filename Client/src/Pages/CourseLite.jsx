// src/components/CourseLite.jsx
import React from "react";
import { Star } from "lucide-react";
import "../CSS/CourseLite.css"; // external CSS import

const courses = [
  {
    id: 1,
    name: "Python",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    rating: 4.8,
    courses: 120,
  },
  {
    id: 2,
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    rating: 4.7,
    courses: 98,
  },
  {
    id: 3,  
    name: "HTML",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    rating: 4.5,
    courses: 80,
  },
  {
    id: 4,
    name: "CSS",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    rating: 4.6,
    courses: 75,
  },
  {
    id: 5,
    name: "Java",
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    rating: 4.4,
    courses: 90,
  },
];

export default function CourseLite() {
  return (
    <div className="course-section">
      <h2 className="course-title">🚀 Top Programming Languages</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.name} />
            </div>

            <div className="course-content">
              <h3>{course.name}</h3>

              <div className="rating">
                <Star className="star-icon" />
                <span>{course.rating} / 5</span>
              </div>

              <p>📚 {course.courses}+ Courses Available</p>
            </div>

            <div className="card-accent"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
