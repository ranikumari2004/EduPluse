import React from "react";
import "../CSS/ExpertInstructors.css";

const instructors = [
  {
    name: "Arav Kapoor",
    designation: "Assistant Professor",
    image: "./f1.jpg",
  },
  {
    name: "Nur Jha",
    designation: "Lecturer",
    image: "./f3.jpg",
  },
  {
    name: "Jay Dev",
    designation: "Senior Lecturer",
    image: "./f4.jpg",
  },
  {
    name: "Shiya Shaw",
    designation: "Assistant Professor",
    image: "./f5.jpg",
  },
];

const ExpertInstructors = () => {
  return (
    <section className="instructors-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary">INSTRUCTORS</h6>
          <h2 className="fw-bold text-dark">Expert Instructors</h2>
        </div>
        <div className="row g-4">
          {instructors.map((instructor, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="instructor-card text-center">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="img-fluid w-100 rounded-top"
                />
                <div className="social-icons my-2">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="bg-light py-3">
                  <h5 className="mb-1">{instructor.name}</h5>
                  <p className="mb-0 text-muted">{instructor.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertInstructors;
