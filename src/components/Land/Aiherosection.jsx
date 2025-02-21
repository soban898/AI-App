import React from "react";
import { motion } from "framer-motion";
import "../../styles/hero.css"; 
import Graph from "../../img/Graph.png";

const AIHeroSection = () => {
  return (
    <section className="hero-section">
      <div className="glow-overlay"></div>

      {/* Wrapper - Text Always on Top, Image Always Below */}
      <div className="content-wrapper">
        {/* 📝 Text Content */}
        <div className="text-container">
          <motion.span 
            className="badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🚀 Latest Integration Arrived
          </motion.span>

          <h1 className="heading">
            Boost your 
            <p className="highlight"> rankings with AI.</p>
          </h1>
          <p className="subtext">
            Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
          </p>

          <button className="cta-button">Start for free</button>
        </div>

        {/* 🖼 Image Below */}
        <div className="image-container">
          <img className="M-Graph" src={Graph} alt="Dashboard" />
        </div>

      </div>

      <div className="circle-overlay"></div>
    </section>
  );
};

export default AIHeroSection;
