import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example images
import CRMLogin from "../assets/ProjectImg/crn_login.png";
import ReportLogin from "../assets/ProjectImg/report_login.png";
import CowebcastMain from "../assets/ProjectImg/cowebcast_main.png";
import KYC from "../assets/ProjectImg/generateKYC.png";
import E_commerceUser from "../assets/ProjectImg/e-storeFront.png";
import CRM_Main from "../assets/ProjectImg/crm_main.png";
import Report_Admin from "../assets/ProjectImg/report_admin.png";
import Report_User from "../assets/ProjectImg/report_user.png";
import Cowebcast_Login from "../assets/ProjectImg/cowebcast_login.png";
import Cowebcast_User from "../assets/ProjectImg/cowebcasrUser.png";
import E_commerceAdmin from "../assets/ProjectImg/e-storeAdmin.png";

const projects = [
  {
    id: 1,
    title: "CRM System Web Application",
    images: [CRMLogin, CRM_Main],
    url: "https://crm.accurateai.in/views/login.php",
    description: `Developed a CRM web application for Erience Solutions to store and manage business information.

Implemented Google Authentication and core CRM functionalities in a web-based system. Integrated secure Google Authentication login into the CRM system to enhance user security and simplify access management. The project included key modules such as People, Leads, and Business, allowing users to add, view, and manage client and sales data efficiently. Developed the application using HTML, CSS, JavaScript, Core PHP, and MySQL, with all data securely stored in the database. The system features user-friendly interfaces and performs real-time operations to ensure smooth data handling and seamless user experience.`,
  },
  {
    id: 2,
    title: "Daily Report Web Application",
    images: [ReportLogin, Report_Admin, Report_User],
    url: "https://report.accurateai.in/index.php",
    description: `This is a daily report admin panel that displays the work reports of all employees.

This is a Daily Report Admin Panel developed using HTML5, CSS3, JavaScript, Core PHP, and MySQL. The system includes a secure login panel. After logging in with valid credentials, users are directed to their personal reporting dashboard where they can submit their daily work reports. Each user also receives a personal note or message from the admin, which is displayed on their dashboard. These notes can be managed directly from the admin panel. The project is designed to streamline employee reporting and allow administrators to track daily activities efficiently.`,
  },
  {
    id: 3,
    title: "Annual General Meeting Web Application",
    images: [CowebcastMain, Cowebcast_Login, Cowebcast_User],
    url: `A web-based application to manage and generate Annual General Meetings with secure login, meeting scheduling, and document distribution features.

This Annual General Meeting (AGM) application is designed to organize and manage meetings not only within the company but also with external organizations. The meetings are conducted via Google Meet, and all key data is tracked and stored efficiently. The system allows the admin to generate and manage AGMs, send invitations, and track employee participation. It captures essential details such as the participant's email address, joining time, and leaving time, and provides downloadable reports of attendees. The meetings are live-streamed on YouTube, and the recordings are automatically retrieved and shared with the external partner or organizing company for future reference. A user dashboard is also provided, where each user can view complete meeting details, including past and upcoming meetings. The admin panel also keeps a record of the number of shareholders who attended each meeting, storing this information securely in the database. This application helps simplify AGM management by automating scheduling, tracking, recording, and reporting — improving transparency and collaboration with internal and external stakeholders.`,
    description: "Platform for managing virtual annual general meetings.",
  },
  {
    id: 4,
    title: "KYC",
    images: [KYC],
    url: "",
    description: `Developed a KYC application with React.js and Node.js, featuring web scraping for
company and director details, ISIN data lookup (NSE, BSE, NBFC), and secure data handling
using MySQL, Puppeteer, and REST APIs.`,
  },
  {
    id: 5,
    title: "E-Commerce Website",
    images: [E_commerceUser, E_commerceAdmin],
    url: "",
    description: `This project is a full-fledged e-commerce platform designed for selling garments.

Created an e-commerce website for selling garments with a fully functional user panel (frontend) and admin panel (backend). The system supports two types of users: regular users and administrators, both of whom can log in securely. Administrators can add garments, and these products are instantly visible on the user side. The platform includes product categorization for better organization. Users can browse products, add them to a shopping cart, and place or cancel orders. Additionally, the admin panel displays the number of users currently logged in, providing real-time insights. The overall system ensures a smooth and user-friendly experience with a clear separation between frontend and backend operations.`,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    if (!selectedProject || selectedProject.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="py-5 text-white projects-section"
      style={{ position: "relative", zIndex: 1 }}
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
                  src={project.images[0]}
                  className="card-img-top rounded-top"
                  alt={project.title}
                  style={{ height: "190px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <div className="d-flex justify-content-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn btn-outline-light"
                      onClick={() => openModal(project)}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1050,
              }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content bg-dark text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "80%",
                  maxWidth: "900px",
                  borderRadius: "15px",
                  padding: "20px",
                  maxHeight: "80vh",
                  overflowY: "auto",
                  position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header border-0">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={closeModal}
                  ></button>
                </div>

                <div className="modal-body text-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex} // key for animation
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="img-fluid mb-3"
                      style={{ maxHeight: "300px", borderRadius: "10px" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </AnimatePresence>

                  <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                    {selectedProject.description}
                  </p>

                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg"
                    >
                      Visit Project
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
