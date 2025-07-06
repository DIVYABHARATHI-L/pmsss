import React, { useState } from 'react';
import './ApplicationReview.css';
import {useNavigate } from "react-router-dom";



const ApplicationReview = () => {
  const [isAccepted, setIsAccepted] = useState(null);
  const navigate = useNavigate();

  // Sample data for review
  const userData = {
    personalInfo: {
      fullName: 'Laura Smith',
      dob: '1995-05-10',
      gender: 'Female',
      aadhaar: '1234 5678 9101',
      contact: { phone: '123-456-7890', email: 'laura@example.com' },
      address: { permanent: '123 Main St, Some City, Some State, 12345' },
    },
    educationInfo: {
      tenth: { board: 'CBSE', year: 2011, marks: '90%', rollNo: '123456' },
      twelfth: { board: 'CBSE', year: 2013, marks: '85%', rollNo: '789012' },
      college: 'XYZ University',
      course: 'Computer Science',
      duration: '4 years',
    },
    domicile: { certificateUploaded: true },
    familyInfo: {
      income: '50,000 INR/month',
      parents: { father: { name: 'John Smith', occupation: 'Engineer' }, mother: { name: 'Jane Smith', occupation: 'Teacher' } },
    },
    bankingDetails: {
      accountNo: '1234567890',
      ifscCode: 'XYZ0001234',
      bankName: 'ABC Bank',
    },
  };

  // Handle Accept and Reject
  const handleAccept = () => {
    setIsAccepted(true);
    alert("Application Accepted!");
    navigate("/");
  };

  const handleReject = () => {
    setIsAccepted(false);
    alert("Application Rejected!");
    navigate("/");
  };

  return (
    <div className="application-review-container">
      <h2>APPLICATION REVIEW</h2>

      <table>
        <tbody>
          <tr>
            <th>Full Name</th>
            <td>{userData.personalInfo.fullName}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>{userData.personalInfo.dob}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{userData.personalInfo.gender}</td>
          </tr>
          <tr>
            <th>Aadhaar Number</th>
            <td>{userData.personalInfo.aadhaar}</td>
          </tr>
          <tr>
            <th>Contact</th>
            <td>{userData.personalInfo.contact.phone}, {userData.personalInfo.contact.email}</td>
          </tr>
          <tr>
            <th>Permanent Address</th>
            <td>{userData.personalInfo.address.permanent}</td>
          </tr>

          <tr>
            <th>10th Class</th>
            <td>{userData.educationInfo.tenth.board}, {userData.educationInfo.tenth.year}, {userData.educationInfo.tenth.marks}, Roll No: {userData.educationInfo.tenth.rollNo}</td>
          </tr>
          <tr>
            <th>12th Class</th>
            <td>{userData.educationInfo.twelfth.board}, {userData.educationInfo.twelfth.year}, {userData.educationInfo.twelfth.marks}, Roll No: {userData.educationInfo.twelfth.rollNo}</td>
          </tr>
          <tr>
            <th>College</th>
            <td>{userData.educationInfo.college}</td>
          </tr>
          <tr>
            <th>Course</th>
            <td>{userData.educationInfo.course}, Duration: {userData.educationInfo.duration}</td>
          </tr>

          <tr>
            <th>Domicile Certificate</th>
            <td>{userData.domicile.certificateUploaded ? 'Uploaded' : 'Not Uploaded'}</td>
          </tr>

          <tr>
            <th>Family Income</th>
            <td>{userData.familyInfo.income}</td>
          </tr>
          <tr>
            <th>Father</th>
            <td>{userData.familyInfo.parents.father.name}, Occupation: {userData.familyInfo.parents.father.occupation}</td>
          </tr>
          <tr>
            <th>Mother</th>
            <td>{userData.familyInfo.parents.mother.name}, Occupation: {userData.familyInfo.parents.mother.occupation}</td>
          </tr>

          <tr>
            <th>Bank Account Number</th>
            <td>{userData.bankingDetails.accountNo}</td>
          </tr>
          <tr>
            <th>IFSC Code</th>
            <td>{userData.bankingDetails.ifscCode}</td>
          </tr>
          <tr>
            <th>Bank Name</th>
            <td>{userData.bankingDetails.bankName}</td>
          </tr>
        </tbody>
      </table>

      <div className="action-buttons">
        {isAccepted === null ? (
          <div>
            <button onClick={handleAccept} className="accept-button">Accept</button>
            <button onClick={handleReject} className="reject-button">Reject</button>
          </div>
        ) : (
          <h3 className="status">{isAccepted ? 'Application Accepted' : 'Application Rejected'}</h3>
        )}
      </div>
    </div>
  );
};

export default ApplicationReview;