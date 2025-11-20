import React from "react";
import "../CSS/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-4">Contact Us</h1>
        <p className="text-center text-muted mb-5">
          Have questions? We'd love to hear from you. Send us a message and we
          will respond as soon as possible.
        </p>

        <div className="row g-4">
          {/* Left Side - Google Map */}
          <div className="col-md-5">
            <div className="map-card shadow-sm rounded overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0572236832643!2d77.231139874494!3d28.62535898434921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd38a43a8699%3A0x3f41f2e9d14f2a64!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1693389941536!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-7">
            <div className="form-card shadow-sm p-4 rounded">
              <h4 className="fw-bold mb-3">Send Message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
