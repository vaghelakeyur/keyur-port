import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaProjectDiagram, FaAward, FaGraduationCap } from "react-icons/fa";

function StatsSection() {
  const stats = [
    { id: 1, icon: <FaProjectDiagram size={40} />, label: "Projects", value: 5 },
    { id: 2, icon: <FaAward size={40} />, label: "Certificates & Achievements", value: 2 },
    { id: 3, icon: <FaGraduationCap size={40} />, label: "Qualifications", value: 1 }
  ];

  return (
    <section className="stats-section text-white py-5" id="stats">
      <div className="container">
        <div className="row text-center">
          {stats.map((item, index) => (
            <AnimatedStatCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStatCard({ item, index }) {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({
      number: item.value,
      transition: { duration: 2.5, ease: "easeOut" } 
    });
  }, [controls, item.value]);

  return (
    <motion.div
      className="col-md-4 mb-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
    >
      <div
        className="stat-card p-4 rounded shadow-lg"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
          style={{ color: "#ffd700" }}
        >
          {item.icon}
        </motion.div>

        <motion.h2
          className="display-5 fw-bold mt-3"
          style={{ color: "#61dafb" }}
          animate={controls}
          initial={{ number: 0 }}
        >
          {Math.floor(count)}
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            style={{ display: "inline-block", marginLeft: "4px" }}
          >
            +
          </motion.span>
        </motion.h2>

        <motion.div
          animate={controls}
          initial={{ number: 0 }}
          onUpdate={(latest) => setCount(latest.number)}
        />

        <p className="fw-semibold">{item.label}</p>
      </div>
    </motion.div>
  );
}

export default StatsSection;
