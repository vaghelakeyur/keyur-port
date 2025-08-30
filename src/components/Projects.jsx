import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CRMLogin from "../assets/ProjectImg/crn_login.png";
import ReportLogin from "../assets/ProjectImg/report_login.png";
import CowebcastMain from "../assets/ProjectImg/cowebcast_main.png";
import KYC from "../assets/ProjectImg/generateKYC.png";
import E_commerceUser from "../assets/ProjectImg/e-storeFront.png";

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
  },
  {
    id: 4,
    title: 'KYC',
    image: KYC,
    url: ""
  },
  {
    id: 5,
    title: 'E-Commerce Website',
    image: E_commerceUser,
    url: ""
  }
];

function Projects() {
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

                  <div className="d-flex justify-content-center gap-3">
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
