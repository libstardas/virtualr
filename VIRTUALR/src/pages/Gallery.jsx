import React from "react";
import { motion } from "motion/react";
const images = [
  "../images/im1.jpg",
  "../images/im2.jpg",
  "../images/im3.jpg",
  "../images/im4.jpg",
  "../images/im5.jpg",
  "../images/im6.jpg",
];
const Gallery = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('../images/im2.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center"
        >
          <h4 className="text-4xl md:text-6xl font-bold text-blue-100 mb-4">
            Gallery
          </h4>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <div
              className="rounded-lg overflow-hidden shadow-md  transform
        transition duration-300 hover:scale-105"
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
