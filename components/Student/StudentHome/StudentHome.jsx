import React from 'react';
import './StudentHome.css';
import line from '../../../assets/line.png';
import arrow from '../../../assets/arrow.svg';
import { useNavigate } from 'react-router-dom';

const StudentHome = () => {
  const navigate = useNavigate();

  return (
    <div className="studenthome-container">
      <h1 className="studenthome-title">StudentHome</h1>
      <img src={line} alt="line" className="studenthome-line" />

      <div className="cards-container">
        <div className="card" onClick={() => navigate('/registration')}>
          <span className="card-title">Registration</span>
          <img src={arrow} alt="arrow" className="card-arrow" />
        </div>
        <div className="card" onClick={() => navigate('/document')}>
          <span className="card-title">Document Upload</span>
          <img src={arrow} alt="arrow" className="card-arrow" />
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
