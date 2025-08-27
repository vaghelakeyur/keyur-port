import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  // ensure full bundle is loaded
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // optional: console.log(container);
  }, []);

  const options = {
    fullScreen: { enable: false }, // we control sizing with style
    background: { color: { value: 'transparent' } }, // keep transparent so your page BG shows
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 120, duration: 0.4 }
      }
    },
    particles: {
      number: { value: 65, density: { enable: true, area: 800 } },
      color: { value: ['#61dafb', '#ff6ec7', '#6a11cb', '#2575fc'] },
      shape: { type: 'circle' },
      opacity: {
        value: 0.75,
        random: { enable: true, minimumValue: 0.3 }
      },
      size: { value: { min: 1, max: 4 } },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.12,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'out' }
      }
    },
    detectRetina: true
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      // IMPORTANT: position fixed + zIndex 0 (content will be zIndex 1)
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none' // allows clicking through particles to page content
      }}
    />
  );
}
