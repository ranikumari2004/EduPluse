import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminCourses() {
  const [courses, setCourses] = useState([
    { id: 1, title: "HTML Basics", author: "Rani Kumari", price: "₹149", students: 120 },
    { id: 2, title: "CSS Advanced", author: "Anuj Sharma", price: "₹199", students: 80 },
    { id: 3, title: "JavaScript Essentials", author: "Sneha Patel", price: "₹249", students: 200 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: "", author: "", price: "", students: 0 });

  const openModal = () => {
    setNewCourse({ title: "", author: "", price: "", students: 0 });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const id = courses.length + 1;
    setCourses([...courses, { id, ...newCourse }]);
    closeModal();
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-grow-1 p-4" style={{ background: "#f8f9fa", minHeight: "100vh" }}>
        <h2 className="mb-4">Courses Management</h2>

        {/* Add New Course Button */}
        <button className="btn btn-success mb-3" onClick={openModal}>
          Add New Course
        </button>

        {/* Courses Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped bg-white shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Students</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.author}</td>
                  <td>{course.price}</td>
                  <td>{course.students}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => setCourses(courses.filter((c) => c.id !== course.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for Adding Course */}
        {showModal && (
          <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Course</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleAddCourse}>
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={newCourse.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Author</label>
                      <input
                        type="text"
                        className="form-control"
                        name="author"
                        value={newCourse.author}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={newCourse.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Students</label>
                      <input
                        type="number"
                        className="form-control"
                        name="students"
                        value={newCourse.students}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-secondary me-2" onClick={closeModal}>
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-success">
                        Add Course
                      </button>
                    </div>
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
