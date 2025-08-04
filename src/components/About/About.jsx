import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div 
      className='about-div'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="about-text">
        <p>
          I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that are meticulously built for performance and usability.
        </p>
        <p>
          Currently, I am working as a Technology Associate at <span className='glitch'>Morgan Stanley</span>, specializing in optimizing systems and automation.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
