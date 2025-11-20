import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminUsers() {
  // Example user data
  const [users, setUsers] = useState([
    { id: 1, name: "Rani Kumari", email: "rani@example.com", role: "Student" },
    { id: 2, name: "Anuj Sharma", email: "anuj@example.com", role: "Instructor" },
    { id: 3, name: "Sneha Patel", email: "sneha@example.com", role: "Student" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Student" });

  // Open modal
  const openModal = () => {
    setNewUser({ name: "", email: "", role: "Student" });
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => setShowModal(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Add new user
  const handleAddUser = (e) => {
    e.preventDefault();
    const id = users.length + 1;
    setUsers([...users, { id, ...newUser }]);
    closeModal();
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-grow-1 p-4" style={{ background: "#f8f9fa", minHeight: "100vh" }}>
        <h2 className="mb-4">Users Management</h2>

        {/* Add New User Button */}
        <button className="btn btn-success mb-3" onClick={openModal}>
          Add New User
        </button>

        {/* Users Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped bg-white shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => setUsers(users.filter((u) => u.id !== user.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New User</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleAddUser}>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newUser.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Role</label>
                      <select
                        className="form-select"
                        name="role"
                        value={newUser.role}
                        onChange={handleChange}
                      >
                        <option>Student</option>
                        <option>Instructor</option>
                        <option>Admin</option>
                      </select>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-secondary me-2" onClick={closeModal}>
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-success">
                        Add User
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
