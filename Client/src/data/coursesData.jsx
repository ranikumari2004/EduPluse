// src/data/coursesData.js

export const coursesData = [
  {
    id: 1,
    title: "Web Development 101: Frontend & Backend Mastery",
    description: "Master the complete web development lifecycle. Build responsive frontend user interfaces and robust backend APIs using modern technologies.",
    price: "Free",
    slug: "web-development-101",
    rating: 4.5,
    instructor: "Dev Gyan",
    totalHours: 12.5,
    whatYoullLearn: ["HTML5, CSS3, JavaScript ES6+", "Responsive Design (Flexbox & Grid)", "Basic Backend using PHP", "Database Fundamentals"],
    modules: [
      { name: "HTML Basics", video: "https://www.youtube.com/embed/UB1O30fR-EE", intro: "Introduction to HTML and its structure." },
      { name: "CSS Styling", video: "https://www.youtube.com/embed/yfoY53QXEnI", intro: "Learn how to style your websites beautifully." },
      { name: "JavaScript Fundamentals", video: "https://www.youtube.com/embed/W6NZfCO5SIk", intro: "Make your site interactive with JS." },
      { name: "PHP for Backend", video: "https://www.youtube.com/embed/OK_JCtrrv-c", intro: "Handle backend with PHP." },
    ],
  },
  {
    id: 4,
    title: "MERN Stack Pro: Build E-Commerce Platform",
    description: "Become a Full Stack Developer by learning the MERN stack (MongoDB, Express, React, Node). Build a real-world e-commerce application from scratch.",
    price: "Paid",
    slug: "mern-full-stack",
    rating: 4.8,
    instructor: "Anjali Sharma",
    totalHours: 40,
    whatYoullLearn: ["React Hooks & Context API", "MongoDB Schema Design", "RESTful API development with Express", "Authentication (JWT)"],
    modules: [
      { name: "MongoDB Crash Course", video: "https://www.youtube.com/embed/4yqu8YF29cU", intro: "Learn MongoDB database basics." },
      { name: "ExpressJS Basics", video: "https://www.youtube.com/embed/L72fhGm1tfE", intro: "Learn to create APIs with Express." },
      { name: "ReactJS Basics", video: "https://www.youtube.com/embed/bMknfKXIFA8", intro: "Build UIs using ReactJS." },
      { name: "NodeJS Basics", video: "https://www.youtube.com/embed/TlB_eWDSMt4", intro: "Understand backend with NodeJS." },
    ],
  },
  // ... बाकी कोर्स जोड़ें
];