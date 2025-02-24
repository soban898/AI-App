import React from "react";
import "../../styles/price.css";
import Toggle from "../../img/Toggle.png" 
const CheckIcon = () => (
    <svg className="Tick" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <path d="M12.3975 5.2725L6.39746 11.2725C6.3452 11.3249 6.28311 11.3665 6.21473 11.3949C6.14636 11.4233 6.07306 11.4379 5.99902 11.4379C5.92499 11.4379 5.85169 11.4233 5.78331 11.3949C5.71494 11.3665 5.65284 11.3249 5.60058 11.2725L2.97559 8.6475C2.92326 8.59518 2.88176 8.53306 2.85344 8.46469C2.82512 8.39633 2.81055 8.32306 2.81055 8.24906C2.81055 8.17507 2.82512 8.10179 2.85344 8.03343C2.88176 7.96506 2.92326 7.90295 2.97559 7.85062C3.02791 7.7983 3.09003 7.7568 3.15839 7.72848C3.22675 7.70016 3.30003 7.68559 3.37402 7.68559C3.44802 7.68559 3.52129 7.70016 3.58966 7.72848C3.65802 7.7568 3.72014 7.7983 3.77246 7.85062L5.99949 10.0777L11.6015 4.47656C11.7072 4.37089 11.8505 4.31152 12 4.31152C12.1494 4.31152 12.2927 4.37089 12.3984 4.47656C12.5041 4.58223 12.5634 4.72556 12.5634 4.875C12.5634 5.02444 12.5041 5.16776 12.3984 5.27344L12.3975 5.2725Z" fill="white"/>
</svg>
  );
const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Pricing</h2>
      <p className="pricing-subtitle">
        Choose the right plan to meet your SEO needs and start optimizing today.
      </p>

      {/* Toggle Button */}
      <div className="toggle-container">
        <img className="toggle-icon" src={Toggle} alt="" /> {/* Dummy SVG */}
        <span>dsad</span>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Pricing</h3>
          <p className="price">$29/mo</p>
          <ul>
            <li><CheckIcon /> Keyword optimization</li>
            <li><CheckIcon /> Automated meta tags</li>
            <li><CheckIcon /> SEO monitoring</li>
            <li><CheckIcon /> Monthly reports</li>
          </ul>
          <button className="pricing-button">Join waitlist</button>
        </div>

        <div className="pricing-card highlight">
          <h3>Pro</h3>
          <p className="price">$79/mo</p>
          <ul>
            <li><CheckIcon  /> Keyword optimization</li>
            <li><CheckIcon /> Automated meta tags</li>
            <li><CheckIcon /> SEO monitoring</li>
            <li><CheckIcon /> Monthly reports</li>
            <li><CheckIcon /> Content suggestions</li>
            <li><CheckIcon /> Link optimization</li>
          </ul>
          <button className="pricing-button">Join waitlist</button>
        </div>

        <div className="pricing-card">
          <h3>Business</h3>
          <p className="price">$149/mo</p>
          <ul>
            <li><CheckIcon /> Keyword optimization</li>
            <li><CheckIcon /> Keyword optimization</li>
            <li><CheckIcon /> Automated meta tags</li>
            <li><CheckIcon /> SEO monitoring</li>
            <li><CheckIcon /> Monthly reports</li>
            <li><CheckIcon /> Content suggestions</li>
            <li><CheckIcon /> Link optimization</li>
            <li><CheckIcon /> Multi-user access</li>
            <li><CheckIcon /> API integration</li>
          </ul>
          <button className="pricing-button">Join waitlist</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
