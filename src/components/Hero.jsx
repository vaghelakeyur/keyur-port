import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import DeveloperImage from '../assets/img/developer.png';

// Icons
import { FaReact, FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

function Hero() {
  const [text] = useTypewriter({
    words: ['Laravel Developer', 'PHP Developer', 'React Developer'],
    loop: true,
    delaySpeed: 2000
  });

  const skills = [
    { icon: <FaReact color="#61DBFB" size={40} />, name: 'React' },
    { icon: <FaPhp color="#8993be" size={40} />, name: 'PHP' },
    { icon: <FaLaravel color="#ff2d20" size={40} />, name: 'Laravel' },
    { icon: <FaHtml5 color="#e34c26" size={40} />, name: 'HTML5' },
    { icon: <FaCss3Alt color="#264de4" size={40} />, name: 'CSS3' },
    { icon: <FaJs color="#f7df1e" size={40} />, name: 'JavaScript' }
  ];

  return (
    <header
      id="home"
      className="d-flex align-items-center justify-content-center text-light"
      style={{ minHeight: '100vh' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mt-10 text-center text-md-start mb-4 mb-md-0">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, <br /> I'm Keyur Vaghela
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {text}
            </motion.h2>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <a href="#projects" className="btn btn-custom px-4 py-2">
                Explore Projects
              </a>
              <a
                href="/resume.pdf"
                download="Keyur-v-Latest.pdf"
                className="btn btn-light px-4 py-2"
              >
                Download Resume
              </a>
            </div>

            {/* Animated Skills */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    background: '#ffffff1a',
                    borderRadius: '50%',
                    padding: '10px'
                  }}
                >
                  {skill.icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Developer Image - Responsive */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <div
              style={{
                display: 'inline-block',
                padding: '12px',
                borderRadius: '50%',
                position: 'relative',
                width: '80%', // responsive width
                maxWidth: '400px', // prevent overflow
                aspectRatio: '1 / 1' // maintain square shape
              }}
            >
              {/* Rotating Gradient Border */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  padding: '5px',
                  background: 'conic-gradient(#ffffff14, #6a11cb)',
                  zIndex: 0
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: '#0a192f',
                    borderRadius: '50%'
                  }}
                />
              </motion.div>

              {/* Responsive Image */}
              <motion.img
                src={DeveloperImage}
                alt="Developer"
                className="img-fluid rounded-circle shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
