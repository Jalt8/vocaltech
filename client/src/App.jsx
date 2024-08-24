import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import LandingPage from './pages/LandingPage';
import TermsOfService from './pages/TermsOfServicePage';
import PrivacyPolicy from './pages/PrivacyPolicyPage';

// Replace 'Your-Measurement-ID' with your actual GA4 Measurement ID
ReactGA.initialize("Your-Measurement-ID");

// Create a component to handle route changes
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteTracker /> {/* Add this inside the Router */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;