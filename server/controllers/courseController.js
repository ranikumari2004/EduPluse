import Course from "../models/Course.js";

// Get all courses

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses); // Ye array return karega
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get single course
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new course
export const addCourse = async (req, res) => {
  const newCourse = new Course(req.body);
  try {
    const savedCourse = await newCourse.save();
    res.json(savedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a course
export const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // Return updated document
    );
    if (!updatedCourse) return res.status(404).json({ message: "Course not found" });
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a course
export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
