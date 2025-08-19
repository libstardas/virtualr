import React from "react";
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('../images/im6.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center"
        >
          <h4 className="text-4xl md:text-6xl font-bold text-blue-100 mb-4">
            About
          </h4>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="../images/tawanggate.jpg"
              alt=""
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              We’re a passionate team of travel enthusiasts dedicated to helping
              you explore the world with ease, comfort, and unforgettable
              experiences.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              Our mission is to inspire and empower people to explore the world
              by providing exceptional travel experiences that are personalized,
              affordable, and stress-free.our mission is to inspire and empower
              people to explore the world by providing exceptional travel
              experiences that are personalized, affordable, and stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
