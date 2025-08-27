import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactImage from "../../public/contact.png";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section py-5 text-white"
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
          <hr />
        </motion.h2>

        <div className="row align-items-center">
          {/* LEFT SIDE: CONTACT INFO */}
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="fw-bold mb-3">Let's Connect</h3>
            <p className="text-light small mb-4">
              Feel free to reach out for collaborations or just a friendly chat.
              I’d be happy to connect with you.
            </p>

            <div className="contact-info">
              <p className="mb-3">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <strong>Current Location:</strong>{" "}
                <a
                  href="https://www.google.com/maps?q=Ahmedabad,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Ahmedabad, India
                </a>
              </p>

              <p className="mb-3">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <strong>Permanent Location:</strong>{" "}
                <a
                  href="https://www.google.com/maps/place/Kariya,+Gujarat+362030"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Junagadh, India
                </a>
              </p>

              <p className="mb-3">
                <FaEnvelope className="me-2 text-danger" />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:keyurvaghela62@gmail.com"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  keyurvaghela62@gmail.com
                </a>
              </p>

              <p>
                <FaPhone className="me-2 text-success" />
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919016160151"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  +91 90161 60151
                </a>
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE */}
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={ContactImage}
              alt="Contact"
              className="img-fluid rounded-3 shadow-lg"
              style={{ maxWidth: "80%" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
