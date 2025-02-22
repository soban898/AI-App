import React from "react";
import "../../styles/test.css";
import Avatar from "../../img/Avatar.png"; // Replace with actual image

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Our clients</h2>
      <p className="testimonial-subtitle">
        Hear firsthand how our solutions have boosted online success for users like you.
      </p>
      <div className="testimonial-content-wrapper">
        <div className="testimonial-image-container">
          <div className="glow-lines"></div>
          <img src={Avatar} alt="Talia Taylor" className="testimonial-image" />
        </div>
        <div className="testimonial-content">
          <p className="testimonial-quote">
            <i>"This product has completely transformed how I manage my projects and deadlines"</i>
          </p>
          <p className="testimonial-name"><b>Talia Taylor</b></p>
          <p className="testimonial-role">Digital Marketing Director @ Quantum</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;