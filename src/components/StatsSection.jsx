import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaAward, FaGraduationCap } from 'react-icons/fa';

function StatsSection() {
  const stats = [
    { id: 1, icon: <FaProjectDiagram size={40} />, label: 'Projects', value: 5 },
    { id: 2, icon: <FaAward size={40} />, label: 'Certificates & Achievements', value: 2 },
    { id: 3, icon: <FaGraduationCap size={40} />, label: 'Qualifications', value: 1 }
  ];

  return (
    <section className="stats-section text-white py-5" id="stats">
      <div className="container">
        <div className="row text-center">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div
                className="stat-card p-4 rounded shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: '#ffd700' }}
                >
                  {item.icon}
                </motion.div>
                <h2 className="display-5 fw-bold mt-3" style={{ color: '#61dafb' }}>
                  {item.value}+
                </h2>
                <p className="fw-semibold">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
