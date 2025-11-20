import React, { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";
import "../CSS/Service.css";

const Service = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section className="service-section py-5">
      <div className="container">
        <div className="row g-4">
          {[
            { icon: "graduation-cap", title: "Skilled Instructors" },
            { icon: "globe", title: "Online Classes" },
            { icon: "home", title: "Home Projects" },
            { icon: "book-open", title: "Book Library" },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp`}
              data-wow-delay={`${0.1 + index * 0.2}s`}
            >
              <div className="service-card text-center">
                <i className={`fa fa-3x fa-${item.icon} mb-4`}></i>
                <h5 className="mb-3">{item.title}</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
