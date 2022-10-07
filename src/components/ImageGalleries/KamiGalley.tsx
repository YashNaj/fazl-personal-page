import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";

const kamiPics = [
  {
    original: "https://i.postimg.cc/QtwhDM4c/mobile-1.png",
    thumbnail: "https://i.postimg.cc/QtwhDM4c/mobile-1.png",
  },
  {
    original: "https://i.postimg.cc/cC3ZLN22/mobile-2.png",
    thumbnail: "https://i.postimg.cc/cC3ZLN22/mobile-2.png",
  },
  {
    original: "https://i.postimg.cc/pV5PZDrC/mobile-3.png",
    thumbnail: "https://i.postimg.cc/pV5PZDrC/mobile-3.png",
  },
  {
    original: "https://i.postimg.cc/ZTm05DnS/mobile-4.png",
    thumbnail: "https://i.postimg.cc/ZTm05DnS/mobile-4.png",
  },
  {
    original: "https://i.postimg.cc/mrZbNJ11/Desktop-1.png",
    thumbnail: "https://i.postimg.cc/mrZbNJ11/Desktop-1.png",
  },
  {
    original: "https://i.postimg.cc/3JMYbdDT/Desktop-2.png",
    thumbnail: "https://i.postimg.cc/3JMYbdDT/Desktop-2.png",
  },
];

export const KamiGalley = () => {
  return (
    <motion.div className = 'kami-gallery'>
      <ImageGallery items={kamiPics} thumbnailPosition="left" />{" "}
    </motion.div>
  );
};
