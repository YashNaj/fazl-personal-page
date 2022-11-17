import React from "react";
import "./About.css";
import { AnimatePresence, motion } from "framer-motion";
export const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="about-container content"
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        {" "}
        <div className="about-content">
          <h1 className="about-heading">About Me</h1>
          <div className="about-description-container">
            <div className="about-description">
              <div className="paragraph-container">
                <p className="about-paragraph">
                  With a degree in Psychology to better understand the human
                  condition and psyche, numerous experiences involving
                  collaborations with a plethora of different individuals, and
                  an inherent empathetic mindset to my fellow man, my goal is a
                  career in the field of UI/UX which will truly allow me to
                  flourish and show my varied skillset.
                </p>
                <p className="about-paragraph">
                  All the projects related to design you see here are either
                  personal or collaborative with like minded peers. I see design
                  as a powerful tool that can shape someones’ experience for the
                  better or worse regardless of the content at hand. As such I
                  have immersed myself in this field by trying my hand at a
                  myriad of divergent projects in order to fully understand all
                  the different facets that encapsulate the world of the digital
                  consumer.
                </p>
                <p className="about-paragraph">
                  When it comes to my personal life I am a recent graduate
                  living in the city of San Diego who loves all forms of media
                  from movies, to music, to reading. Some of my most recent
                  favorites of those would be Chinatown, House of the Dragon,
                  and A Seat at the Table by Solange.
                </p>
              </div>
              <div className="fazl-image-container">
                <div className="fazl-image" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
