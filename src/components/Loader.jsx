import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="loader-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0a192f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        style={{
          width: 70,
          height: 70,
          border: '6px solid #fff',
          borderTop: '6px solid #ff007f',
          borderRadius: '50%'
        }}
      ></motion.div>
    </motion.div>
  );
}

export default Loader;
