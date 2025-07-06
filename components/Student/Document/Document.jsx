import React from 'react';
import './Document.css';

const Document = () => {
  return (
    <div className="document-upload-container">
      <h1 className="document-upload-title">DOCUMENT UPLOAD</h1>
      <div className="title-line"></div>
      <form className="document-upload-form">
        <label>Passport-sized Photograph <span className="mandatory">*</span></label>
        <input type="file" accept="image/*" required />

        <label>Scanned Signature <span className="mandatory">*</span></label>
        <input type="file" accept="image/*" required />

        <label>10th Marksheet <span className="mandatory">*</span></label>
        <input type="file" accept=".pdf,.jpg,.png" required />

        <label>12th Marksheet <span className="mandatory">*</span></label>
        <input type="file" accept=".pdf,.jpg,.png" required />

        <label>Domicile Certificate <span className="mandatory">*</span></label>
        <input type="file" accept=".pdf,.jpg,.png" required />

        <label>Income Certificate <span className="mandatory">*</span></label>
        <input type="file" accept=".pdf,.jpg,.png" required />

        <label>Category Certificate</label>
        <input type="file" accept=".pdf,.jpg,.png" />

        <label>Proof of Admission <span className="mandatory">*</span></label>
        <input type="file" accept=".pdf,.jpg,.png" required />

        <label>Fee Structure <span className="mandatory">*</span></label>
        <input type="file" accept=".pdf,.jpg,.png" required />

        <label>Scholarship Undertaking <span className="mandatory">*</span></label>
        <input type="file" accept=".pdf,.jpg,.png" required />

        <div className="declaration">
          <p>All fields are mandatory.</p>
          <label>
            <input type="checkbox" required />
            I hereby declare that the documents uploaded by me are true, authentic, and valid to the best of my knowledge. I understand that providing false or forged documents may result in disqualification or legal action as per the governing rules.
          </label>
        </div>

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Document;
