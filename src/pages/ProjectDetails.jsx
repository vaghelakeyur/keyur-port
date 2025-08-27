import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import CRM_Main from "../assets/ProjectImg/crm_main.png";
import Report_Admin from "../assets/ProjectImg/report_admin.png";
import Report_User from "../assets/ProjectImg/report_user.png";
import Report_Login from "../assets/ProjectImg/report_login.png";
import Cowebcast_Login from "../assets/ProjectImg/cowebcast_login.png";
import Cowebcast_User from "../assets/ProjectImg/cowebcasrUser.png";

// ✅ Updated Project Data with Multiple Images
const projectData = [
  {
    id: 1,
    title: "CRM System Web Application",
    desc: `Developed a CRM web application for Erience Solutions to store and manage business information.

Implemented Google Authentication and core CRM functionalities in a web-based system. Integrated secure Google Authentication login into the CRM system to enhance user security and simplify access management. The project included key modules such as People, Leads, and Business, allowing users to add, view, and manage client and sales data efficiently. Developed the application using HTML, CSS, JavaScript, Core PHP, and MySQL, with all data securely stored in the database. The system features user-friendly interfaces and performs real-time operations to ensure smooth data handling and seamless user experience.`,
    images: [CRM_Main],
  },
  {
    id: 2,
    title: "Daily Report Web Application",
    desc: `This is a daily report admin panel that displays the work reports of all employees.

This is a Daily Report Admin Panel developed using HTML5, CSS3, JavaScript, Core PHP, and MySQL. The system includes a secure login panel. After logging in with valid credentials, users are directed to their personal reporting dashboard where they can submit their daily work reports. Each user also receives a personal note or message from the admin, which is displayed on their dashboard. These notes can be managed directly from the admin panel. The project is designed to streamline employee reporting and allow administrators to track daily activities efficiently.`,
    images: [Report_Admin, Report_User, Report_Login],
  },
  {
    id: 3,
    title: "Annual General Meeting Web Application",
    desc: `A web-based application to manage and generate Annual General Meetings with secure login, meeting scheduling, and document distribution features.

This Annual General Meeting (AGM) application is designed to organize and manage meetings not only within the company but also with external organizations. The meetings are conducted via Google Meet, and all key data is tracked and stored efficiently. The system allows the admin to generate and manage AGMs, send invitations, and track employee participation. It captures essential details such as the participant's email address, joining time, and leaving time, and provides downloadable reports of attendees. The meetings are live-streamed on YouTube, and the recordings are automatically retrieved and shared with the external partner or organizing company for future reference. A user dashboard is also provided, where each user can view complete meeting details, including past and upcoming meetings. The admin panel also keeps a record of the number of shareholders who attended each meeting, storing this information securely in the database. This application helps simplify AGM management by automating scheduling, tracking, recording, and reporting — improving transparency and collaboration with internal and external stakeholders.`,
    images: [
      Cowebcast_User,
      Cowebcast_Login,
    ],
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Auto change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [project]);

  if (!project) {
    return <h2 className="text-center text-light">Project Not Found</h2>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container py-5 text-light"
    >
      <div className="d-flex justify-content-center text-justify">
        <h2 className="mb-4">{project.title}</h2>
      </div>
      <div className="d-flex justify-content-center text-justify">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} screenshot`}
          className="rounded mb-4"
          style={{ width: "50%", transition: "opacity 0.5s ease-in-out" }}
        />
      </div>
      <p>{project.desc}</p>
      <Link to="/" className="btn btn-light mt-4">
        Back to Home
      </Link>
    </motion.div>
  );
}

export default ProjectDetails;
