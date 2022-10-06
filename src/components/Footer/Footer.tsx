import React from "react";
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
            LinkedIn
          </motion.a>
          <motion.a href="" target="_blank">
            fmojaddedi@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
