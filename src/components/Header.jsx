import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Header() {
  const [text] = useTypewriter({
    words: ['React Developer', 'Laravel Developer', 'PHP Developer'],
    loop: true,
    delaySpeed: 2000
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <header
      id="home"
      className="vh-100 d-flex align-items-center justify-content-center text-center text-white position-relative overflow-hidden"
      style={{
        // background: 'linear-gradient(270deg, #6a11cb, #2575fc, #ff6ec7)',
        backgroundSize: '600% 600%',
        // animation: 'gradientMove 10s ease infinite'
      }}
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles-header"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Keep inside header only
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' }
            },
            modes: {
              push: { quantity: 3 },
              repulse: { distance: 120, duration: 0.4 }
            }
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: ['#ffffff', '#ffd700', '#61dafb'] },
            links: {
              enable: true,
              distance: 150,
              color: '#fff',
              opacity: 0.1,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.2,
              outModes: { default: 'out' }
            },
            size: { value: { min: 1, max: 4 } },
            opacity: { value: 0.6 }
          },
          detectRetina: true
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Header Content */}
      <motion.div
        style={{ position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="display-3 fw-bold mb-3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi, I'm <span style={{ color: '#ffd700' }}>Keyur Vaghela</span>
        </motion.h1>

        <motion.h2
          className="mb-4"
          style={{ fontSize: '1.8rem', fontWeight: '500' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {text}
        </motion.h2>

        <motion.a
          href="#projects"
          className="btn btn-light px-4 py-2 fw-semibold"
          whileHover={{ scale: 1.1, backgroundColor: '#ff6ec7', color: '#fff' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </header>
  );
}

export default Header;
