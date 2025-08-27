import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';
import StatsSection from './components/StatsSection';
import AOS from 'aos';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import './App.css'; // Make sure your CSS file includes the styles above

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="background-video"
            >
              <source src="/videos/184814-874271896.mp4" type="video/mp4" />
            </video>

            {/* Optional overlay */}
            <div className="background-overlay"></div>

            {/* Particles (still on top of video) */}

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Hero />
                    <StatsSection />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
