import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../CSS/Hero.css';

const Hero = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleJoinShow = () => setShowJoinModal(true);
  const handleJoinClose = () => setShowJoinModal(false);

  const handleReadMore = () => {
    const aboutSection = document.getElementById('about-engineers');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMore(true);
  };

  const handleReadLess = () => {
    setShowMore(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-content">
            <p className="small-text">TOP ENGINEERING PROGRAMS</p>
            <h1 className="main-heading">Empowering Future Engineers</h1>
            <p className="description">
              Learn from the best courses designed for Computer, Mechanical, Civil, and Electrical engineers.
              Build your future with expert mentors, real-world projects, and career support.
            </p>
            <div className="buttons">
              {!showMore ? (
                <button className="read-more animate-left" onClick={handleReadMore}>Read More</button>
              ) : (
                <button className="read-more animate-left" onClick={handleReadLess}>Read Less</button>
              )}
              <button className="join-now animate-right" onClick={handleJoinShow}>Join Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Engineers Section */}
      {showMore && (
        <section id="about-engineers" className="p-5 bg-light">
          <div className="container">
            <h2 className="mb-4">Why Engineers Choose Us?</h2>
            <p>
              From IIT aspirants to diploma holders, our courses cover everything with real-world projects,
              practical labs, and placement assistance. Whether you're from Computer, Mechanical, Civil, or Electrical—
              our content is tailored for you. Our mentors guide you step by step, helping you achieve your goals faster.
            </p>
          </div>
        </section>
      )}

      {/* Join Now Modal */}
      <Modal show={showJoinModal} onHide={handleJoinClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Join Engineering Courses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          <Form.Group className="mb-3">
  <Form.Label>Subject</Form.Label>
  <Form.Select>
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
  </Form.Select>
</Form.Group>

            <Button variant="info" type="submit" className="text-white w-100" style ={{backgroundColor:'#202A44'}}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Hero;
