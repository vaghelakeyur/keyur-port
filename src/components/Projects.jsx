import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa'; // Hand like icon
import CRMLogin from "../assets/ProjectImg/crn_login.png";
import ReportLogin from "../assets/ProjectImg/report_login.png";
import CowebcastMain from "../assets/ProjectImg/cowebcast_main.png";

const projects = [
  {
    id: 1,
    title: 'CRM System Web Application',
    image: CRMLogin,
    url: "https://crm.accurateai.in/views/login.php"
  },
  {
    id: 2,
    title: 'Daily Report Web Application',
    image: ReportLogin,
    url: "https://report.accurateai.in/index.php"
  },
  {
    id: 3,
    title: 'Annual General Meeting Web Application',
    image: CowebcastMain,
    url: "https://cowebcast.com/newbeta/login.php"
  }
];

function Projects() {
  const [likes, setLikes] = useState({}); // Track likes for each project

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1
    }));
  };

  return (
    <section
      id="projects"
      className="py-5 text-white projects-section"
      style={{
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <motion.h2
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="row">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="card project-card border-0 shadow-lg text-center"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  className="card-img-top rounded-top"
                  alt={project.title}
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>

                  {/* Clickable URL */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#007bff',
                        textDecoration: 'underline',
                        display: 'block',
                        marginBottom: '15px'
                      }}
                    >
                      {project.url}
                    </a>
                  )}

                  {/* Buttons in One Row */}
                  <div className="d-flex justify-content-center gap-3">
                    {/* Like Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(project.id)}
                      className="btn btn-outline-primary"
                    >
                      <FaThumbsUp className="me-2" /> {likes[project.id] || 0}
                    </motion.button>

                    {/* View Details Button */}
                    <Link to={`/project/${project.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn btn-outline-light"
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
