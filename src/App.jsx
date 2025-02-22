import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
import AIHeroSection from './components/Land/Aiherosection';
import TrustedBrands from './components/Land/TrustedBrands';
import FeaturesSection from './components/Land/FeaturesSection';
import Seo from './components/Land/Seo';

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
      <Routes>
      
      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App
