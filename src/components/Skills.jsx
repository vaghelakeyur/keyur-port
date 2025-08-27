import React from "react";
import { motion } from "framer-motion";
import LaravelImage from "../../public/laraveldata.png";

const skills = [
  {
    name: "Laravel",
    description:
      "Gained expertise as a Laravel Developer (Versions 10, 11) and developed a dynamic restaurant And E-Commerce website",
    logo: "https://keyur-v-portfolio.netlify.app/assets/images/skill-image/laraveldata.png",
  },
  {
    name: "HTML 5",
    description:
      "Built structured, accessible, and user-friendly interfaces using HTML5, following best practices for semantic markup and cross-browser compatibility.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    description:
      "Built strong expertise in CSS by designing responsive, visually appealing, and user-friendly web interfaces.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    description:
      "Developed interactive and dynamic web features, improving user experience and application functionality.Developed a strong understanding of JavaScript to communicate with PHP-based backend systems using asynchronous API calls. Implemented frontend logic to send and receive data from PHP APIs.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    description:
      "Gained expertise in React.js by developing dynamic web applications, including a KYC (Know Your Customer) project for retrieving and displaying company data through web scraping techniques.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "PHP",
    description:
      "Gained expertise in Core PHP by developing a dynamic Daily Report system, Company CRM, and Annual General Meeting (AGM) module integrated with the Zoom Web API.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  }
];

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section py-5 text-white"
      style={{
        backgroundColor: "#0a0f1c",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
          <hr
            style={{
              width: "80px",
              margin: "10px auto",
              border: "2px solid #00f0ff",
            }}
          />
        </motion.h2>

        {/* Skill Cards */}
        <div className="row">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="card h-100 text-center p-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(0,240,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 30px rgba(0,0,0,0.5)";
                }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  style={{ width: "50px", marginBottom: "15px" }}
                />
                <h4 className="fw-bold">{skill.name}</h4>
                <p style={{ fontSize: "14px", color: "#ccc" }}>
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
