import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenu(false); // link click hone ke baad close hoga
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar fixed-top ${scroll ? ' shadow' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold text-light" href="#home">Keyur Vaghela</a>

          {/* Desktop Menu */}
          <ul className="navbar-nav d-none d-lg-flex flex-row ms-auto">
            {['Home','About','Skills','Projects','Contact'].map((item,i)=>(
              <li key={i} className="nav-item mx-2">
                <a className="nav-link text-light" href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>

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
                className="text-light fs-6 text-decoration-none" 
                href={`#${item.toLowerCase()}`} 
                onClick={handleLinkClick}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Styling */}
      <style>{`
        .mobile-dropdown {
          position: fixed;
          top: 56px; /* navbar height */
          left: 0;
          width: 100%;
          text-align:center;
          background: #0a192f;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
          z-index: 1500;
        }
        .mobile-dropdown.open {
          max-height: 300px; /* jitne item hain utna hi khulega */
        }
      `}</style>
    </>
  );
}

export default Navbar;
