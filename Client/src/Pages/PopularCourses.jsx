import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../CSS/PopularCourses.css";

const courses = [
  {
    image: "https://miro.medium.com/v2/resize:fit:768/0*GxCqw53T3Qzbh08l",
    price: "₹99.00",
    rating: 5,
    reviews: 180,
    title: "HTML Fundamentals",
    author: "Rani Kumari",
    duration: "2.0 Hrs",
    students: 150,
    description: "Learn the building blocks of web development with HTML."
  },
  {
    image: "https://blog.mystrika.com/wp-content/uploads/sites/8/2023/10/HTML-CSS.jpeg",
    price: "₹129.00",
    rating: 4,
    reviews: 160,
    title: "CSS Styling Essentials",
    author: "Anuj Sharma",
    duration: "2.5 Hrs",
    students: 140,
    description: "Master CSS to style web pages and create responsive layouts."
  },
  {
    image: "https://www.manualweb.net/img/covers/javascript-cover.jpg",
    price: "₹149.00",
    rating: 5,
    reviews: 220,
    title: "JavaScript Basics",
    author: "Sneha Patel",
    duration: "3.0 Hrs",
    students: 200,
    description: "Learn JavaScript fundamentals to build interactive websites."
  }
];

const PopularCourses = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClose = () => setShowModal(false);

  const handleDetails = (course) => {
    setModalContent({
      title: course.title,
      body: (
        <>
          <img src={course.image} className="img-fluid rounded mb-3" alt="course" />
          <p><b>Author:</b> {course.author}</p>
          <p><b>Duration:</b> {course.duration}</p>
          <p><b>Students:</b> {course.students}</p>
          <p><b>Description:</b> {course.description}</p>
        </>
      )
    });
    setShowModal(true);
  };

  const handleEnroll = (course) => {
    setModalContent({
      title: "Enroll Confirmation",
      body: (
        <>
          <p>Are you sure you want to enroll in <b>{course.title}</b>?</p>
          <Button
            variant="success"
            onClick={() => window.location.href = "/enroll"}
          >
            Yes, Enroll Me
          </Button>
        </>
      )
    });
    setShowModal(true);
  };

  return (
    <section className="popular-courses-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="fw-semibold" style={{ color: "#0D6EFD" }}>Our Programs</h6>
          <h2 className="fw-bold text-dark">Top Trending Courses</h2>
          <p className="text-muted">Learn in-demand skills with expert-led online courses.</p>
        </div>

        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="course-card shadow rounded-4 bg-white h-100 d-flex flex-column position-relative overflow-hidden">
                
                {/* Course Image */}
                <img src={course.image} className="course-image" alt="Course" />

                {/* Buttons Overlay */}
                <div className="button-overlay d-flex justify-content-center gap-3 p-2">
                  <button 
                    className="details-btn btn-sm" 
                    onClick={() => handleDetails(course)}
                  >
                    Details
                  </button>
                  <button 
                    className="btn btn-primary btn-sm" 
                    onClick={() => handleEnroll(course)}
                  >
                    Enroll
                  </button>
                </div>

                {/* Course Content */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h5 className="text-success fw-bold mb-2">{course.price}</h5>

                  <div className="rating mb-2">
                    <span className="text-warning">{"★".repeat(course.rating)}</span>
                    <span className="text-muted ms-1">({course.reviews} reviews)</span>
                  </div>

                  <h6 className="fw-semibold text-dark mb-3">{course.title}</h6>

                  {/* Meta info bottom align */}
                  <div className="course-meta d-flex justify-content-between text-muted small mt-auto">
                    <span><i className="fas fa-user me-1"></i>{course.author}</span>
                    <span><i className="far fa-clock me-1"></i>{course.duration}</span>
                    <span><i className="fas fa-users me-1"></i>{course.students} Students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalContent?.body}</Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default PopularCourses;
