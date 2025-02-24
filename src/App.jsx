import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
import AIHeroSection from './components/Land/Aiherosection';
import TrustedBrands from './components/Land/TrustedBrands';
import FeaturesSection from './components/Land/FeaturesSection';
import Seo from './components/Land/Seo';
import TestimonialSection from './components/Land/TestimonialSection';
import Pricing from './components/Land/Pricing';
import Seoinput from './components/Land/Seoinput';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
      <div>
      <Router>
      <Navigation />
      <AIHeroSection />
      <TrustedBrands />
      <FeaturesSection />
      <Seo />
      <TestimonialSection />
      <Pricing />
      <Seoinput />
      <Footer />
      <Routes>
      
      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App
