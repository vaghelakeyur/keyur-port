import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp, FaGithub, FaFacebook } from 'react-icons/fa';

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar fixed-top ${scroll ? 'shadow' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* Left: Animated Name */}
          <a className="navbar-brand fw-bold animated-text" href="#home">
            Keyur Vaghela
          </a>

          {/* Center: Desktop Menu */}
          <ul className="navbar-nav d-none d-lg-flex flex-row menu-center">
            {['Home','About','Skills','Projects','Contact'].map((item,i)=>(
              <li key={i} className="nav-item mx-3">
                <a className="nav-link custom-link" href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>

          {/* Right: Social Icons */}
          <div className="d-none d-lg-flex social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler text-light border-0 d-lg-none" 
            type="button" 
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-dropdown ${mobileMenu ? 'open' : ''}`}>
        <ul className="list-unstyled m-0 p-3">
          {['Home','About','Skills','Projects','Contact'].map((item,i)=>(
            <li key={i} className="my-2">
              <a 
                className="text-light fs-6 text-decoration-none custom-link" 
                href={`#${item.toLowerCase()}`} 
                onClick={handleLinkClick}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="mt-3 social-icons-mobile">
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://wa.me/1234567890"><FaWhatsapp /></a>
            <a href="https://github.com"><FaGithub /></a>
            <a href="https://facebook.com"><FaFacebook /></a>
          </li>
        </ul>
      </div>

      {/* Styling */}
      <style>{`
        .navbar {
          background: #0a192f;
          padding: 15px 20px;
        }

        /* Animated Gradient Text */
        .animated-text {
          font-size: 24px;
          font-weight: bold;
          background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 4s infinite linear;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Center Menu */
        .menu-center {
          flex: 1;
          justify-content: center;
          display: flex;
        }

        /* Menu Hover Animation */
        .custom-link {
          position: relative;
          color: #fff;
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s ease;
        }
        .custom-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #00ffff;
          transition: width 0.3s ease-in-out;
        }
        .custom-link:hover {
          color: #00ffff;
        }
        .custom-link:hover::after {
          width: 100%;
        }

        /* Social Icons */
        .social-icons a {
          color: #fff;
          font-size: 20px;
          margin-left: 15px;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icons a:hover {
          color: #00ffff;
          transform: scale(1.2);
        }

        /* Mobile Dropdown */
        .mobile-dropdown {
          position: fixed;
          top: 56px;
          left: 0;
          width: 100%;
          text-align: center;
          background: #0a192f;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
          z-index: 1500;
        }
        .mobile-dropdown.open {
          max-height: 400px;
        }

        .social-icons-mobile a {
          color: #fff;
          font-size: 24px;
          margin: 0 10px;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icons-mobile a:hover {
          color: #00ffff;
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
}

export default Navbar;
