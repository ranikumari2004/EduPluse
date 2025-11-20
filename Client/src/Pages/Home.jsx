import React from "react";
import Hero from "../Pages/Hero";
import Service from "../Pages/Service";
import AboutLite from "../Pages/AboutLite";
// import CourseLite from "../Pages/CourseLite";
import PopularCourses from "./PopularCourses";
import ExpertInstructors from "./ExpertInstructors";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <AboutLite />
      {/* <CourseLite /> */}
      <PopularCourses/>
      <ExpertInstructors/>
      <Testimonials/>
    </>
  );
};

export default Home;
