import React from 'react';
import "../../styles/feature.css";
import Ring from '../../img/Visual.png';
import Triangle from '../../img/Visual2.png';
import Dashboard from "../../img/Dashboard.png";
import Reports from "../../img/Reports.png";

const FeaturesSection = () => {
  return (
    <section className="feature-container">
      <h2 className="feature-title">
        Harness the power of AI, making <br />
        search engine optimization intuitive <br />
        and effective for all skill levels.
      </h2>

      <div className="feature-grid">
        {/* SEO Goal Setting */}
        <div className="feature-card">
          <div className="feature-img-placeholder"><img src={Ring} alt="" /></div>
          <h3>SEO goal setting</h3>
          <p>Helps you set and achieve SEO goals with guided assistance.</p>
        </div>

        {/* User-friendly Dashboard */}
        <div className="feature-card wide">
          <div ><img className='dash' src={Dashboard} alt="" /></div>
          
        </div>

        {/* Visual Reports */}
        <div className="feature-card wide">
          <div ><img className='report' src={Reports} alt="" /></div>
         
        </div>

        {/* Smart Keyword Generator */}
        <div className="feature-card">
          <div className="feature-img-placeholder"><img src={Triangle} alt="" /></div>
          <h3>Smart Keyword Generator</h3>
          <p>Automatic suggestions and the best keywords to target.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;