import React from 'react'
import "../../styles/input.css"
const Seoinput = () => {
    return (
        <section className="hero-section">
        <h1 className="hero-title">
          AI-driven SEO <br /> for everyone.
        </h1>
        <div className="hero-input-container">
          <input type="email" placeholder="Your email" className="hero-input" />
          <button className="hero-button">Join waitlist</button>
        </div>
        <p className="hero-subtext">
          No credit card required · 7 days free trial
        </p>
      </section>
      );
    };
  export default Seoinput;
