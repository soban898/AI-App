import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/nav.css";
import Logo from "../img/Logo.png"

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(expanded ? false : 'expanded');

  return (
    <Navbar expanded={expanded} expand="lg" sticky="top" className={`navbar ${expanded ? 'navbar-expanded' : ''}`}>
      <Container className="nav-container">
        <div className="navbar-icons d-lg-none">
        <button className='Join-wait'>Join waitlist</button>
        </div>

        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img className='logo' src={Logo} alt="" />
        </Navbar.Brand>

        {/* <Navbar.Toggle 
          aria-controls="navbar-nav" 
          className="navbar-toggler order-lg-1 custom-toggler"
          onClick={toggleNavbar} 
        /> */}

<Navbar.Toggle 
  aria-controls="navbar-nav" 
  className="navbar-toggler order-lg-1"
  onClick={toggleNavbar} 
>
  <span className="navbar-toggler-icon">
    <span></span>
    <span></span>
    <span></span>
  </span>
</Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className="navbar-collapse-custom">
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => setExpanded(false)}>
              Features<svg className='nav-svg' xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <g opacity="0.6">
    <path d="M12.1848 5.55977L7.80977 9.93477C7.76914 9.97545 7.72089 10.0077 7.66778 10.0297C7.61467 10.0518 7.55774 10.0631 7.50024 10.0631C7.44275 10.0631 7.38582 10.0518 7.33271 10.0297C7.2796 10.0077 7.23134 9.97545 7.19071 9.93477L2.81571 5.55977C2.73362 5.47768 2.6875 5.36634 2.6875 5.25024C2.6875 5.13415 2.73362 5.0228 2.81571 4.94071C2.8978 4.85862 3.00915 4.8125 3.12524 4.8125C3.24134 4.8125 3.35268 4.85862 3.43477 4.94071L7.50024 9.00673L11.5657 4.94071C11.6064 4.90006 11.6546 4.86782 11.7077 4.84582C11.7608 4.82382 11.8178 4.8125 11.8752 4.8125C11.9327 4.8125 11.9897 4.82382 12.0428 4.84582C12.0959 4.86782 12.1441 4.90006 12.1848 4.94071C12.2254 4.98136 12.2577 5.02962 12.2797 5.08273C12.3017 5.13584 12.313 5.19276 12.313 5.25024C12.313 5.30773 12.3017 5.36465 12.2797 5.41776C12.2577 5.47087 12.2254 5.51913 12.1848 5.55977Z" fill="white"/>
  </g>
</svg>
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className="nav-link" onClick={() => setExpanded(false)}>
              Developers
            </Nav.Link>
            <Nav.Link as={Link} to="/product" className="nav-link" onClick={() => setExpanded(false)}>
              Company<svg className='nav-svg' xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <g opacity="0.6">
    <path d="M12.1848 5.55977L7.80977 9.93477C7.76914 9.97545 7.72089 10.0077 7.66778 10.0297C7.61467 10.0518 7.55774 10.0631 7.50024 10.0631C7.44275 10.0631 7.38582 10.0518 7.33271 10.0297C7.2796 10.0077 7.23134 9.97545 7.19071 9.93477L2.81571 5.55977C2.73362 5.47768 2.6875 5.36634 2.6875 5.25024C2.6875 5.13415 2.73362 5.0228 2.81571 4.94071C2.8978 4.85862 3.00915 4.8125 3.12524 4.8125C3.24134 4.8125 3.35268 4.85862 3.43477 4.94071L7.50024 9.00673L11.5657 4.94071C11.6064 4.90006 11.6546 4.86782 11.7077 4.84582C11.7608 4.82382 11.8178 4.8125 11.8752 4.8125C11.9327 4.8125 11.9897 4.82382 12.0428 4.84582C12.0959 4.86782 12.1441 4.90006 12.1848 4.94071C12.2254 4.98136 12.2577 5.02962 12.2797 5.08273C12.3017 5.13584 12.313 5.19276 12.313 5.25024C12.313 5.30773 12.3017 5.36465 12.2797 5.41776C12.2577 5.47087 12.2254 5.51913 12.1848 5.55977Z" fill="white"/>
  </g>
</svg>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" onClick={() => setExpanded(false)}>
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="navbar-icons d-none d-lg-flex">
         <button className='Join-wait'>Join waitlist</button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
