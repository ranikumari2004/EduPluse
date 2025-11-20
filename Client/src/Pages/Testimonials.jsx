import React, { useState } from "react";
import "../CSS/Testimonials.css"; // You will create this CSS file

const testimonialsData = [
  {
    image: "./s2.jpg",
    name: "Ravi Patel",
    message: "EduPulse has completely changed how I learn. It's interactive, easy to understand, and the support is awesome!",
  },
  {
    image: "./s1.jpg",
    name: "Sneha Sharma",
    message: "The platform is super helpful and the tutorials are well-structured. I love learning on EduPulse!",
  },
  {
    image: "./s2.jpg",
    name: "Amit Verma",
    message: "Thanks to EduPulse, I scored top marks in my semester. The practice quizzes are amazing!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-container">
      <h2>What Our Students Say</h2>
      <div className="carousel">
        <button className="nav-button left" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="testimonial-card-wrapper">
          {testimonialsData.map((student, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <img
                src={student.image}
                alt={student.name}
                className="student-image"
              />
              <p className="student-message">"{student.message}"</p>
              <h4 className="student-name">- {student.name}</h4>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="indicator-wrapper">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`indicator-square ${
              index === currentIndex ? "checked" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
