import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion";
import "./Footer.css";
export const Footer = () => {
  return (
    <motion.div className="footer-container">
      <motion.div className="footer">
        <motion.div className="contact-me-heading">
          <motion.h1 className="contact-heading">Contact Me</motion.h1>
        </motion.div>
        <motion.div className="contact-link-container">
            <motion.a
              href="https://www.linkedin.com/in/fazl-mojaddedi-500976241/"
              target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className= "icon"/>
            </motion.a>
            <motion.a href="mailto: fmojaddedi@gmail.com" target="_blank">
            <FontAwesomeIcon icon= {faEnvelope} className= "icon"/>
            </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
