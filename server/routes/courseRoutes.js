import express from "express";
import { getAllCourses, getCourseById, addCourse, deleteCourse, updateCourse } from "../controllers/courseController.js";

const router = express.Router();

// Routes
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", addCourse);
router.put("/:id", updateCourse);  // Update course
router.delete("/:id", deleteCourse);

export default router;
