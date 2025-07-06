import React from "react";
import "./Vision.css";
import visionImg from "../../assets/vision-img.jpg"; // Adjust the path as needed

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="vision-container">
        {/* Vision Image */}
        <div className="vision-image">
          <img src={visionImg} alt="Vision Behind Our Work" className="vision-img" />
        </div>

        {/* Vision Content */}
        <div className="vision-content">
          <h1 className="vision-title">Vision Behind Our Work</h1>
          <p className="vision-text">
            We are dedicated to creating <span>innovative digital solutions</span> that address the challenges faced by students in 
            <span> Jammu, Kashmir, and Ladakh</span>. Our mission is to break barriers and provide 
            <span> seamless access</span> to education.
          </p>
          <p className="vision-text">
            By leveraging <span>technology</span> and prioritizing <span>user-friendliness</span>, we aim to transform 
            lives and create a brighter future for all.
          </p>
          <button className="vision-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Vision;
