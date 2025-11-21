import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    title: "",
    author: "",
    description: "",
    price: "Free",
    students: 0,
    category: "",
    duration: "",
    rating: 0,
    image: "",
    modules: [],
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const openModal = (course = null) => {
    if (course) {
      setEditingCourse(course._id);
      setNewCourse({ ...course });
    } else {
      setEditingCourse(null);
      setNewCourse({
        title: "",
        author: "",
        description: "",
        price: "Free",
        students: 0,
        category: "",
        duration: "",
        rating: 0,
        image: "",
        modules: [],
      });
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleModuleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedModules = [...newCourse.modules];
    updatedModules[index][name] = value;
    setNewCourse({ ...newCourse, modules: updatedModules });
  };

  const addModule = () => {
    setNewCourse({
      ...newCourse,
      modules: [...newCourse.modules, { name: "", intro: "", video: "" }],
    });
  };

  const removeModule = (index) => {
    const updatedModules = [...newCourse.modules];
    updatedModules.splice(index, 1);
    setNewCourse({ ...newCourse, modules: updatedModules });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCourse) {
        // Update course
        const res = await axios.put(
          `http://localhost:5000/api/courses/${editingCourse}`,
          newCourse
        );
        setCourses(
          courses.map((c) => (c._id === editingCourse ? res.data : c))
        );
      } else {
        // Add new course
        const res = await axios.post(
          "http://localhost:5000/api/courses",
          newCourse
        );
        setCourses([...courses, res.data]);
      }
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      setCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex">
      <AdminSidebar />
      <div
        className="flex-grow-1 p-4"
        style={{ background: "#f8f9fa", minHeight: "100vh" }}
      >
        <h2 className="mb-4">Courses Management</h2>
        <button className="btn btn-success mb-3" onClick={() => openModal()}>
          Add New Course
        </button>

        <table className="table table-bordered table-striped bg-white shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Students</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course.title}</td>
                <td>{course.author}</td>
                <td>{course.price}</td>
                <td>{course.students}</td>
                <td>{course.category}</td>
                <td>{course.duration}</td>
                <td>{course.rating}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => openModal(course)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div
            className="modal show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editingCourse ? "Edit Course" : "Add New Course"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="form-control mb-2"
                      name="image"
                      placeholder="Image URL"
                      value={newCourse.image || ""}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control mb-2"
                      name="title"
                      placeholder="Title"
                      value={newCourse.title}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="form-control mb-2"
                      name="author"
                      placeholder="Author"
                      value={newCourse.author}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control mb-2"
                      name="description"
                      placeholder="Description"
                      value={newCourse.description}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control mb-2"
                      name="price"
                      placeholder="Price"
                      value={newCourse.price}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control mb-2"
                      name="students"
                      type="number"
                      placeholder="Students"
                      value={newCourse.students}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control mb-2"
                      name="category"
                      placeholder="Category"
                      value={newCourse.category}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control mb-2"
                      name="duration"
                      placeholder="Duration"
                      value={newCourse.duration}
                      onChange={handleChange}
                    />
                    <input
                      className="form-control mb-2"
                      name="rating"
                      type="number"
                      placeholder="Rating"
                      value={newCourse.rating}
                      onChange={handleChange}
                    />

                    {/* Modules Section */}
                    <h5 className="mt-3">Modules</h5>
                    {newCourse.modules.map((mod, index) => (
                      <div key={index} className="mb-2 border p-2 rounded">
                        <input
                          className="form-control mb-1"
                          name="name"
                          placeholder="Module Name"
                          value={mod.name}
                          onChange={(e) => handleModuleChange(index, e)}
                        />
                        <input
                          className="form-control mb-1"
                          name="intro"
                          placeholder="Module Intro"
                          value={mod.intro}
                          onChange={(e) => handleModuleChange(index, e)}
                        />
                        <input
                          className="form-control mb-1"
                          name="video"
                          placeholder="Video URL"
                          value={mod.video}
                          onChange={(e) => handleModuleChange(index, e)}
                        />
                        <button
                          type="button"
                          className="btn btn-danger btn-sm mt-1"
                          onClick={() => removeModule(index)}
                        >
                          Remove Module
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-secondary mb-2"
                      onClick={addModule}
                    >
                      Add Module
                    </button>

                    <button className="btn btn-success mt-2" type="submit">
                      {editingCourse ? "Update Course" : "Add Course"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
