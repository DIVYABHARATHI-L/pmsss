import React from 'react';
import './Registration.css';


const Registration = () => {
  return (
    <div className="registration-container">
      <h1 className="registration-title">Registration</h1>
      <div className="title-line"></div>

      <form className="registration-form">
        {/* Personal Information Section */}
        <h2 className="section-title">Personal Information</h2>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Date of Birth</label>
        <input type="date" required />

        <label>Gender</label>
        <select required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
          <option value="other">Other</option>
        </select>

        <label>Aadhaar Number</label>
        <input type="text" placeholder="Enter Aadhaar Number" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter phone number" required />

        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" required />

        {/* Address */}
        <label>Permanent Address</label>
        <input type="text" placeholder="Address Line 1" required />
        <input type="text" placeholder="Address Line 2" required />
        <input type="text" placeholder="District" required />
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Pincode" required />

        <label>Caste</label>
        <select required>
          <option value="">Select Caste</option>
          <option value="general">General</option>
          <option value="obc">OBC</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
        </select>

        {/* Educational Information Section */}
        <h2 className="section-title">Educational Information</h2>
        <label>10th Board Name</label>
        <input type="text" placeholder="Enter board name" required />

        <label>10th School Name</label>
        <input type="text" placeholder="Enter school name" required />

        <label>10th School Address</label>
        <input type="text" placeholder="Address Line 1" required />
        <input type="text" placeholder="Address Line 2" required />
        <input type="text" placeholder="District" required />
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Pincode" required />

        <label>10th Marks (CGPA/Percentage)</label>
        <input type="text" placeholder="Enter marks in CGPA/Percentage" required />

        <label>12th Board Name</label>
        <input type="text" placeholder="Enter board name" required />

        <label>12th School Name</label>
        <input type="text" placeholder="Enter school name" required />

        <label>12th School Address</label>
        <input type="text" placeholder="Address Line 1" required />
        <input type="text" placeholder="Address Line 2" required />
        <input type="text" placeholder="District" required />
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Pincode" required />

        <label>12th Marks (CGPA/Percentage)</label>
        <input type="text" placeholder="Enter marks in CGPA/Percentage" required />

        <label>University Name / Affiliated University</label>
        <input type="text" placeholder="Enter university name or affiliated university" required />

        <label>College Address</label>
        <input type="text" placeholder="Address Line 1" required />
        <input type="text" placeholder="Address Line 2" required />
        <input type="text" placeholder="District" required />
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Pincode" required />

        {/* Bank Information Section */}
        <h2 className="section-title">Bank Information</h2>
        <label>Bank Name</label>
        <input type="text" placeholder="Enter bank name" required />

        <label>Bank Branch</label>
        <input type="text" placeholder="Enter bank branch" required />

        <label>Account Number</label>
        <input type="text" placeholder="Enter account number" required />

        <label>IFSC Code</label>
        <input type="text" placeholder="Enter IFSC code" required />

        <label>Account Holder Name</label>
        <input type="text" placeholder="Enter account holder name" required />

        {/* Declaration and checkbox before submit */}
        <div className="declaration">
          <label>
            <input type="checkbox" required />
            I declare that all the entered details are correct.
          </label>
          <p>All fields are mandatory.</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
