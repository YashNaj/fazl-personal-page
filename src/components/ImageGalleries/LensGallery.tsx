import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";

const LensPics = [
  {
    original: "https://i.postimg.cc/xTTDZMTB/Cover.jpg",
    thumbnail: "https://i.postimg.cc/xTTDZMTB/Cover.jpg",
    loading: "lazy",
  },
  {
    original: "https://i.postimg.cc/gjg5ptkQ/page-0.jpg",
    thumbnail: "https://i.postimg.cc/gjg5ptkQ/page-0.jpg",
    loading: "lazy",
  },
  {
    original: "https://i.postimg.cc/gcs13jqs/page-1.jpg",
    thumbnail: "https://i.postimg.cc/gcs13jqs/page-1.jpg",
    loading: "lazy",
  },
  {
    original: "https://i.postimg.cc/8cp3qgDL/page-3.jpg",
    thumbnail: "https://i.postimg.cc/8cp3qgDL/page-3.jpg",
    loading: "lazy",
  },
  {
    original: "https://i.postimg.cc/nLqPrhhv/page-4.jpg",
    thumbnail: "https://i.postimg.cc/nLqPrhhv/page-4.jpg",
    loading: "lazy",
  },
  {
    original: "https://i.postimg.cc/BQwywzz1/page-5.jpg",
    thumbnail: "https://i.postimg.cc/BQwywzz1/page-5.jpg",
    loading: "lazy",
  },

  {
    original: "https://i.postimg.cc/BnLyWgW7/page-6.jpg",
    thumbnail: "https://i.postimg.cc/BnLyWgW7/page-6.jpg",
    loading: "lazy",
  },
  {
    original: "https://i.postimg.cc/kg0H7bqJ/page-7.jpg",
    thumbnail: "https://i.postimg.cc/kg0H7bqJ/page-7.jpg",
    loading: "lazy",
  },
  {
    original: "https://i.postimg.cc/Nf0SDtdc/page-8.jpg",
    thumbnail: "https://i.postimg.cc/Nf0SDtdc/page-8.jpg",
    loading: "lazy",
  },
];

export const LensGallery = () => {
  return (
    <motion.div>
      <ImageGallery items={LensPics}
      thumbnailPosition = "left" />{" "}
    </motion.div>
  );
};
