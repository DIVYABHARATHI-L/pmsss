import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();


  // Sample data for applicants
  const applicants = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      applicationDate: "2025-01-01",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      applicationDate: "2025-01-02",
      status: "Approved",
    },
    { 
      id: 3, 
      name: "Alice Johnson", 
      email: "alice.johnson@example.com", 
      applicationDate: "2025-01-03", 
      status: "Rejected", 
      submissionDate: "2024-12-29" 
    },
    { 
        id: 4, 
        name: "Bob Brown", 
        email: "bob.brown@example.com", 
        applicationDate: "2025-01-04", 
        status: "Approved", 
        submissionDate: "2024-12-28" 
    },
    { 
      id: 5, 
      name: "Charlie Davis", 
      email: "charlie.davis@example.com", 
      applicationDate: "2025-01-05", 
      status: "Pending", 
      submissionDate: "2024-12-27" 
  },

  ];

  // Navigate to ApplicationReview with applicant data
  const handleViewDetails = (applicant) => {
    navigate("/application-review", { state: { applicant } });
  };

  return (
    <div className="admin-container">
      <h2>Admin Page</h2>
      <table className="applicants-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Application Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.id}</td>
              <td>{applicant.name}</td>
              <td>{applicant.email}</td>
              <td>{applicant.applicationDate}</td>
              <td>{applicant.status}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => handleViewDetails(applicant)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
