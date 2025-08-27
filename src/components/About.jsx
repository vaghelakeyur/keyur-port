import React from "react";
import { motion } from "framer-motion";

// React Icons
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { SiLaravel } from "react-icons/si";

function About() {
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
  };

  const cardHover = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 18px rgba(0,0,0,0.3)",
  };

  const iconStyle = {
    fontSize: "1.8rem",
    color: "#64ffda",
    flexShrink: 0,
    marginTop: "0.2rem",
  };

  const headingStyle = {
    marginBottom: "0.4rem",
    fontWeight: 600,
    color: "#64ffda",
    fontSize: "1.1rem",
  };

  const paraStyle = {
    margin: 0,
    lineHeight: "1.6rem",
  };

  return (
    <>
      {/* ✅ Embedded CSS for responsiveness */}
      <style>{`
        .about-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .about-card.full-width {
          grid-column: 1 / span 2;
        }
        @media (max-width: 992px) {
          .w-75 {
            width: 90% !important;
          }
        }
        @media (max-width: 768px) {
          .about-cards {
            grid-template-columns: 1fr;
          }
          .about-card.full-width {
            grid-column: 1;
          }
        }
      `}</style>

      <section
        id="about"
        className="about-section py-5 pt-3 text-white"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="container text-center">
          <motion.h2
            className="mb-4 fw-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
            <hr />
          </motion.h2>

          <motion.div
            className="about-cards w-75 mx-auto text-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <div
              className="about-card"
              style={cardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              <FaGraduationCap style={iconStyle} />
              <div>
                <h5 style={headingStyle}>Education</h5>
                <p style={paraStyle}>
                  Completed <b>Bachelor of Computer Applications (BCA)</b> from{" "}
                  <b>Bhakta Kavi Shree Narsinh Mehta University, Junagadh</b>.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="about-card"
              style={cardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              <SiLaravel style={iconStyle} />
              <div>
                <h5 style={headingStyle}>Internship</h5>
                <p style={paraStyle}>
                  Worked as a <b>Laravel Developer Internship (3 Months) </b> at{" "}
                  <b>Swizzdigi Pvt. Ltd., Ahmedabad</b>.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="about-card"
              style={cardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              <FaBriefcase style={iconStyle} />
              <div>
                <h5 style={headingStyle}>Professional Experience</h5>
                <p style={paraStyle}>
                  Currently working as a <b>Core PHP & React.js Developer</b>.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="about-card"
              style={cardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              <FaLaptopCode style={iconStyle} />
              <div>
                <h5 style={headingStyle}>Expertise</h5>
                <p style={paraStyle}>
                  1 year of experience in <b>Core PHP, Laravel, and React.js</b>.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="about-card full-width"
              style={cardStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              <MdOutlineRocketLaunch style={iconStyle} />
              <div>
                <h5 style={headingStyle}>Career Objective</h5>
                <p style={paraStyle}>
                  "To obtain a challenging position as a Full Stack Developer
                  specializing in PHP (Laravel) and React, where I can utilize my
                  expertise in back-end and front-end development to create
                  scalable, high-performance web applications while contributing
                  to the growth of the organization and continuously enhancing my
                  technical skills."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
