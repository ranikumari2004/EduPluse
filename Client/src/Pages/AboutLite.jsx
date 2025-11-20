import React from "react";
import "../CSS/AboutLite.css";

const AboutEdupluse = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Text Section */}
        <div className="about-text">
          <h2>
            About <span>EduPluse</span>
          </h2>
          <p>
            EduPluse is a modern online learning platform designed to empower students 
            and professionals with practical knowledge. Our platform provides structured 
            learning resources in Programming, Web Development, Data Science, Artificial Intelligence, 
            and much more.
          </p>
          <p>
            At EduPluse, we believe learning should be interactive, flexible, and career-focused. 
            With 24/7 access to courses, hands-on projects, and guidance from industry experts, 
            we make sure you gain real-world skills that matter.
          </p>
          <button className="about-btn">Get Started</button>
        </div>

        {/* Right Image Section */}
        <div className="about-image">
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="About EduPluse"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutEdupluse;
