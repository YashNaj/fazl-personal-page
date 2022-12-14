import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./Kami.css";
import "react-multi-carousel/lib/styles.css";
import { KamiGalley } from "../../components/ImageGalleries/KamiGalley";

export const Kami = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="fazl__portfolio-item-expanded-kami"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        <motion.div
          className="img-header-kami"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
        />
        <motion.div
          className="expanded-content-kami"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.2, delay: 1.0 }}
        >
          <h1>Kami</h1>
          <p>
            Kami was a collaborative project where I was responsible for initial
            vision, research, wireframes, and high fidelity prototypes on Figma.
            I researched many sites but without a doubt the most popular type of
            cataloguing site for anime was MyAnimeList and so most of the
            research was focused around analyzing the weaknesses and flaws of
            the site while simultaneously trying to emulate all the strengths.
            The prototypes on Figma had a step by step process from the users
            point of view depending on their actions and what they were trying
            to accomplish by using Kami. A breakdown of this process was done
            for both desktop and mobile in order to ensure a truly effortless
            experience for the user.
          </p>
        </motion.div>
        <motion.div className="more-thumbnails-kami">
          <KamiGalley />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
