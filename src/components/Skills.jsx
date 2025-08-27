import React from "react";
import { motion } from "framer-motion";

// Add logo URLs or import local images
const skills = [
  {
    name: "HTML",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: 65,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    level: 70,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "PHP",
    level: 82,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    level: 85,
    logo: "https://keyur-v-portfolio.netlify.app/assets/images/skill-image/laraveldata.png",
  },
  {
    name: "MySQL",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "GitHub",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section py-5 pt-3 text-white"
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        <motion.h2
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
          <hr />
        </motion.h2>

        <div className="row">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-6 mb-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />
                  <span>{skill.name}</span>
                </div>
                <span>{skill.level}%</span>
              </div>
              <div
                className="progress"
                style={{
                  height: "10px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <motion.div
                  className="progress-bar bg-gradient"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  style={{
                    background:
                      "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
