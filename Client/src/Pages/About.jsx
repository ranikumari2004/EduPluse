
import React from "react";
import { Code, Users, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import "../CSS/About.css"; // custom css file

export default function About() {
  return (
    <div className="about-page bg-light text-dark">
      {/* Hero Section */}
      <section className="about-hero-section text-white text-center d-flex align-items-center">
        <div className="container">
          <motion.h1
            className="display-4 fw-bold mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover <span className="about-highlight">EduPluse</span>
          </motion.h1>
          <motion.p
            className="lead mx-auto"
            style={{ maxWidth: "720px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            We are redefining learning with <b>practical, affordable, and career-driven courses</b>.  
            Join EduPluse and unlock the skills that shape your future.
          </motion.p>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#mission" className="btn btn-warning btn-lg fw-semibold shadow-sm">
              Explore Our Journey
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              className="col-md-6 mb-4 mb-md-0"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="About EduPluse"
                className="img-fluid rounded shadow-lg"
              />
            </motion.div>

            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-4">Who We Are</h2>
              <p>
                At EduPluse, we believe <b>education has no boundaries</b>. Our
                platform provides <u>project-based courses</u> designed to
                prepare you for real-world challenges in{" "}
                <b>technology, business, and beyond</b>.
              </p>
              <p>
                With <b>hands-on learning</b> and constantly updated content,
                EduPluse ensures learners—whether students, professionals, or
                career-switchers—gain the skills needed to excel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-white">
        <div className="container text-center mb-5">
          <h2 className="fw-bold">Our Mission & Vision</h2>
          <p className="text-muted mt-3">
            Shaping the future of learning through{" "}
            <b className="text-primary">innovation, accessibility, and excellence</b>.
          </p>
        </div>
        <div className="container">
          <div className="row g-4">
            <motion.div
              className="col-md-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="card h-100 shadow card-hover border-0">
                <div className="card-body text-center">
                  <Target size={48} className="text-primary mb-3" />
                  <h5 className="fw-semibold">Our Mission</h5>
                  <p className="text-muted">
                    To make <b>quality education accessible</b> for everyone
                    with flexible online courses aligned with{" "}
                    <span className="text-primary">industry standards</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="card h-100 shadow card-hover border-0">
                <div className="card-body text-center">
                  <Rocket size={48} className="text-success mb-3" />
                  <h5 className="fw-semibold">Our Vision</h5>
                  <p className="text-muted">
                    To become a <b>global leader</b> in online education,
                    empowering learners with{" "}
                    <span className="text-success">skills for careers & innovation</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="card h-100 shadow card-hover border-0">
                <div className="card-body text-center">
                  <Users size={48} className="text-warning mb-3" />
                  <h5 className="fw-semibold">Our Commitment</h5>
                  <p className="text-muted">
                    Building a <b>community of learners & mentors</b> where
                    knowledge sharing leads to{" "}
                    <span className="text-warning">career success</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-5 bg-light">
        <div className="container text-center mb-5">
          <h2 className="fw-bold">Our Roadmap</h2>
          <p className="text-muted">
            Here’s what EduPluse is bringing for you in the{" "}
            <b className="text-primary">upcoming months</b>.
          </p>
        </div>
        <div className="container">
          <div className="row g-4">
            {[
              { phase: "Phase 1 (Jan–Mar 2025)", color: "text-danger", text: "Launch of Web Development courses: HTML, CSS, JavaScript, React." },
              { phase: "Phase 2 (Apr–Jun 2025)", color: "text-primary", text: "Add Data Science & DSA modules with real-world projects." },
              { phase: "Phase 3 (Jul–Sep 2025)", color: "text-success", text: "Introduce Cyber Security & AI specialization programs." },
              { phase: "Phase 4 (Oct–Dec 2025)", color: "text-warning", text: "Launch Full Career Tracks with mentorship & certifications." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-md-3"
                whileHover={{ y: -6 }}
              >
                <div className="card h-100 shadow border-0 card-hover">
                  <div className="card-body text-center">
                    <Code size={40} className={`${item.color} mb-3`} />
                    <h6 className="fw-semibold">{item.phase}</h6>
                    <p className="text-muted small">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
