import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";

function Contact() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClicked = (e) => {
    e.preventDefault();

    if (!subject || !name || !number || !email || !message) {
      toast.error("Please Fill in all the Required Fields..!");
    }

    const templateParams = { subject, name, number, email, message };

    email.js
      .send("service_46sn5en", "template_5loujwb", templateParams, "203QGSGtMzBwz4_5f")
      .then(() => {
        toast.success("Email Send SuccessFully..!");

        setSubject("");
        setName("");
        setNumber("");
        setEmail("");
        setMessage("");
      }),
      (error) => {
        console.log("Email.js Error", error);
        toast.error("Failed to send Mail Please Try again..!");
      };
  };

  return (
    <section
      id="contact"
      className="contact-section py-5 pt-3 text-white"
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
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

        <div className="row align-items-start">
          {/* LEFT SIDE */}
          <motion.div
            className="col-md-5 text-md-start text-center mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="fw-bold">Let's Connect</h3>
            <p className="text-light small">
              Feel free to reach out for collaborations or just a friendly chat.
              I’d be happy to connect with you.
            </p>

            <div className="mt-4">
              <p>
                <FaMapMarkerAlt className="me-2 text-primary" />
                <strong>Location:</strong> Ahmedabad, India
              </p>
              <p>
                <FaEnvelope className="me-2 text-danger" />
                <strong>Email:</strong> keyurvaghela62@gmail.com
              </p>
              <p>
                <FaPhone className="me-2 text-success" />
                <strong>Phone:</strong> +91 90161 60151
              </p>
            </div>
          </motion.div>

          {/* VERTICAL LINE */}
          <div className="col-md-1 d-none d-md-flex justify-content-center">
            <div
              style={{
                width: "2px",
                background: "rgba(255,255,255,0.3)",
                height: "100%",
              }}
            ></div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form
              className="contact-form mx-auto"
              style={{ maxWidth: "600px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <input
                  type="text"
                  className="form-control glass-input"
                  placeholder="Your Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </motion.div>

              <motion.div
                className="mb-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <input
                  type="text"
                  className="form-control glass-input"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </motion.div>

              <motion.div
                className="mb-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <input
                  type="number"
                  className="form-control glass-input"
                  placeholder="Your Mobile Number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </motion.div>

              <motion.div
                className="mb-3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <input
                  type="email"
                  className="form-control glass-input"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              <motion.div
                className="mb-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <textarea
                  rows="4"
                  className="form-control glass-input"
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="btn btn-blue w-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClicked}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
