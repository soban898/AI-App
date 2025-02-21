import React from 'react'
import '../../styles/trusted.css'
import acme from "../../img/acme.png"
import b2 from "../../img/b2.png"
import b3 from "../../img/b3.png"
import b4 from "../../img/b4.png"
import b5 from "../../img/b5.png"
import b6 from "../../img/b6.png"
import b7 from "../../img/b7.png"
import b8 from "../../img/b8.png"
const TrustedBrands = () => {
    return (
      <section className="trusted-container">
        {/* Heading */}
        <p className="trusted-heading">
          Trusted by the world's most innovative teams
        </p>
  
        {/* Logos Grid */}
        <div className="trusted-grid">
          <div className="trusted-logoBox">
            <img src={acme} alt="Brand 1" className="trusted-logo" />
          </div>
          <div className="trusted-logoBox">
            <img src={b2} alt="Brand 2" className="trusted-logo" />
          </div>
          <div className="trusted-logoBox">
            <img src={b3} alt="Brand 3" className="trusted-logo" />
          </div>
          <div className="trusted-logoBox">
            <img src={b4} alt="Brand 4" className="trusted-logo" />
          </div>
          <div className="trusted-logoBox">
            <img src={b5} alt="Brand 5" className="trusted-logo" />
          </div>
          <div className="trusted-logoBox">
            <img src={b6} alt="Brand 6" className="trusted-logo" />
          </div>
          <div className="trusted-logoBox">
            <img src={b7} alt="Brand 7" className="trusted-logo" />
          </div>
          <div className="trusted-logoBox">
            <img src={b8} alt="Brand 8" className="trusted-logo" />
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedBrands;